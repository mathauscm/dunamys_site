import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DunamysTV = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCPE_zGPRLEf-0dUYnxKcwTw";

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!YOUTUBE_API_KEY) {
        throw new Error("VITE_YOUTUBE_API_KEY não configurada no arquivo .env");
      }

      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&key=${YOUTUBE_API_KEY}&maxResults=12`
      );

      if (!videosResponse.ok) throw new Error("Erro ao buscar vídeos");

      const videosData = await videosResponse.json();
      if (!videosData.items || videosData.items.length === 0) {
        throw new Error("Nenhum vídeo encontrado no canal");
      }

      const videoIds = videosData.items.map((item) => item.id.videoId).join(",");
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      const detailsData = await detailsResponse.json();

      const processedVideos = videosData.items.map((video) => {
        const details = detailsData.items.find((detail) => detail.id === video.id.videoId);
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          thumbnail:
            video.snippet.thumbnails.maxresdefault?.url ||
            video.snippet.thumbnails.high?.url ||
            video.snippet.thumbnails.medium?.url,
          channelTitle: video.snippet.channelTitle,
          publishedAt: video.snippet.publishedAt,
          duration: details?.contentDetails?.duration || "",
          viewCount: details?.statistics?.viewCount || "0",
          likeCount: details?.statistics?.likeCount || "0",
        };
      });

      setVideos(processedVideos);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar vídeos do YouTube:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYouTubeVideos();
  }, []);

  const handleVideoClick = (video) => {
    navigate(`/dunamystv?v=${video.id}`);
  };

  const scrollCarousel = (direction) => {
    const maxIndex = Math.max(0, videos.length - 4);
    if (direction === "left") {
      setCarouselStartIndex(Math.max(0, carouselStartIndex - 1));
    } else {
      setCarouselStartIndex(Math.min(maxIndex, carouselStartIndex + 1));
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return "";
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "";
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;
    return hours > 0
      ? `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      : `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (viewCount) => {
    const count = parseInt(viewCount);
    if (isNaN(count) || count === 0) return "Sem visualizações";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M visualizações`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K visualizações`;
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
            style={{ backgroundColor: "#8B9A3D" }}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Vídeo destaque com logo */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/eQiG4VxAioc?start=1903&autoplay=1&mute=1&loop=1&playlist=eQiG4VxAioc&controls=0&modestbranding=1&showinfo=0&rel=0"
          title="Destaque DunamysTV"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center">
          <div className="z-10 px-10 max-w-2xl">
            <img
              src="/dunamystv2.png"
              alt="Logo DunamysTV"
              className="w-32 md:w-48 mb-6 drop-shadow-lg"
            />
            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              Crescendo Espiritualmente
            </h2>
            <p className="text-gray-200 mb-6">
              Como crescer espiritualmente e fortalecer sua fé no dia a dia.
            </p>
            <button
              onClick={() => navigate("/dunamystv?v=eQiG4VxAioc")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Assistir agora
            </button>
          </div>
        </div>
      </div>

      {/* Lista de vídeos */}
      <div className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <button
                onClick={() => scrollCarousel("left")}
                disabled={carouselStartIndex === 0}
                className="p-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollCarousel("right")}
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
                onClick={() => handleVideoClick(video)}
                className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {formatDuration(video.duration)}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-200 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#8B9A3D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold text-sm mb-2 line-clamp-2">{video.title}</h4>
                  <div className="text-gray-400 text-xs flex justify-between">
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

export default DunamysTV;