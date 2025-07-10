import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const DunamysTVPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Configuração da API do YouTube
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCPE_zGPRLEf-0dUYnxKcwTw"; // Canal @dunamystv

  // Busca vídeos reais do canal @dunamystv usando YouTube Data API v3
  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!YOUTUBE_API_KEY) {
        throw new Error('VITE_YOUTUBE_API_KEY não configurada no arquivo .env');
      }

      // Busca os vídeos mais recentes do canal usando o Channel ID diretamente
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&key=${YOUTUBE_API_KEY}&maxResults=12`
      );

      if (!videosResponse.ok) {
        throw new Error('Erro ao buscar vídeos');
      }

      const videosData = await videosResponse.json();

      if (!videosData.items || videosData.items.length === 0) {
        throw new Error('Nenhum vídeo encontrado no canal');
      }

      // Busca detalhes adicionais dos vídeos (duração, estatísticas)
      const videoIds = videosData.items.map(item => item.id.videoId).join(',');
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      const detailsData = await detailsResponse.json();

      // Combina os dados
      const processedVideos = videosData.items.map((video) => {
        const details = detailsData.items.find(detail => detail.id === video.id.videoId);
        
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail: video.snippet.thumbnails.maxresdefault?.url || 
                    video.snippet.thumbnails.high?.url || 
                    video.snippet.thumbnails.medium?.url,
          channelTitle: video.snippet.channelTitle,
          publishedAt: video.snippet.publishedAt,
          duration: details?.contentDetails?.duration || '',
          viewCount: details?.statistics?.viewCount || '0',
          likeCount: details?.statistics?.likeCount || '0'
        };
      });

      setVideos(processedVideos);
      setSelectedVideo(processedVideos[0]);
      setLoading(false);

    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  useEffect(() => {
    // Verifica se há um vídeo específico na URL
    const videoId = searchParams.get('v');
    
    if (videoId && videos.length > 0) {
      const video = videos.find(v => v.id === videoId);
      if (video) {
        setSelectedVideo(video);
      }
    }
  }, [videos, searchParams]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setVideoError(false);
  };

  const scrollCarousel = (direction) => {
    const maxIndex = Math.max(0, videos.length - 4);
    if (direction === 'left') {
      setCarouselStartIndex(Math.max(0, carouselStartIndex - 1));
    } else {
      setCarouselStartIndex(Math.min(maxIndex, carouselStartIndex + 1));
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return '';
    
    // Converte duração ISO 8601 para formato legível
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '';
    
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatViews = (viewCount) => {
    const count = parseInt(viewCount);
    if (isNaN(count) || count === 0) {
      return 'Sem visualizações';
    }
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M visualizações`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K visualizações`;
    }
    return `${count} visualizações`;
  };

  const visibleVideos = videos.slice(carouselStartIndex, carouselStartIndex + 4);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="text-white mt-4 text-xl">Carregando Dunamys TV...</p>
          <p className="text-gray-400 mt-2">Buscando vídeos do canal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-white text-2xl font-bold mb-4">Erro ao carregar vídeos</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button 
            onClick={fetchYouTubeVideos}
            className="text-white px-6 py-3 rounded-lg transition-colors hover:opacity-90"
            style={{backgroundColor: '#8B9A3D'}}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Dunamys TV</h1>
                <p className="text-gray-200 text-lg">Canal Oficial | Transformando vidas através da Palavra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Video Section */}
      {selectedVideo && (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Video Player */}
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl mb-6">
                {!videoError ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?controls=1&rel=0&modestbranding=1&playsinline=1&fs=1&hl=pt-BR`}
                    title={selectedVideo.title}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    frameBorder="0"
                    onError={() => setVideoError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="text-center">
                      <div className="text-red-500 text-6xl mb-4">📺</div>
                      <h3 className="text-white text-xl font-bold mb-2">Erro ao carregar vídeo</h3>
                      <p className="text-gray-300 mb-6">
                        Ocorreu um problema ao carregar este vídeo. Tente assistir diretamente no YouTube.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                          onClick={() => setVideoError(false)}
                          className="text-white px-6 py-3 rounded-lg transition-colors hover:opacity-90"
                          style={{backgroundColor: '#8B9A3D'}}
                        >
                          🔄 Tentar novamente
                        </button>
                        <a 
                          href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                            <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z"/>
                          </svg>
                          <span>Assistir no YouTube</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Video Info */}
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {selectedVideo.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300">
                      <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{formatViews(selectedVideo.viewCount)}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{formatDuration(selectedVideo.duration)}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(selectedVideo.publishedAt)}</span>
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedVideo.description.length > 300 
                        ? `${selectedVideo.description.substring(0, 300)}...` 
                        : selectedVideo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Carousel */}
      <div className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Mais Vídeos do Canal</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollCarousel('left')}
                disabled={carouselStartIndex === 0}
                className="p-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                disabled={carouselStartIndex >= videos.length - 4}
                className="p-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleVideos.map((video) => (
              <div 
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className={`bg-gray-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                  selectedVideo?.id === video.id ? 'ring-2' : ''
                }`}
                style={selectedVideo?.id === video.id ? {'--tw-ring-color': '#8B9A3D'} : {}}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {formatDuration(video.duration)}
                  </div>
                  {selectedVideo?.id === video.id && (
                    <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center" style={{backgroundColor: 'rgba(139, 154, 61, 0.2)'}}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#8B9A3D'}}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 line-clamp-2 text-sm leading-tight">
                    {video.title}
                  </h4>
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <span>{formatViews(video.viewCount)}</span>
                    <span>{formatDate(video.publishedAt)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DunamysTVPage;