import React, { useState, useEffect } from 'react';
import { InstagramService } from '../../../services/InstagramService.js';

/**
 * Instagram Feed Component
 * Substitui completamente o placeholder "Poder do Alto" no Hero
 * Agora com navegação de imagem única
 */
const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const [accountInfo, setAccountInfo] = useState(null);

  const instagramService = new InstagramService();

  const openPostViewer = (post) => {
    setSelectedPost(post);
  };

  const closePostViewer = () => {
    setSelectedPost(null);
  };

  useEffect(() => {
    loadPosts();
    loadAccountInfo();
    
    // Debug: teste manual do token (remover em produção)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        instagramService.debugToken();
      }, 2000);
    }
  }, []);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedPost) {
        closePostViewer();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [selectedPost]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Tenta buscar da API primeiro
      console.log('🔍 Tentando buscar posts da API do Instagram...');
      const isValidToken = await instagramService.checkTokenValidity();
      
      if (isValidToken) {
        console.log('✅ Token válido, buscando posts...');
        const postsData = await instagramService.getRecentPosts(4);
        setPosts(postsData);
        console.log('✅ Posts carregados:', postsData.length);
      } else {
        console.warn('⚠️ Token inválido, usando fallback...');
        const fallbackPosts = instagramService.getFallbackPosts();
        setPosts(fallbackPosts.slice(0, 4));
      }
    } catch (err) {
      console.error('❌ Erro ao carregar posts:', err);
      setError('Erro ao carregar posts');
      
      // Usar fallback em caso de erro
      const fallbackPosts = instagramService.getFallbackPosts();
      setPosts(fallbackPosts.slice(0, 4));
    } finally {
      setLoading(false);
    }
  };

  const loadAccountInfo = async () => {
    try {
      const accountData = await instagramService.getAccountInfo();
      setAccountInfo(accountData);
      console.log('✅ Informações da conta carregadas:', accountData);
    } catch (err) {
      console.error('❌ Erro ao carregar informações da conta:', err);
      // Usar fallback se não conseguir carregar
      setAccountInfo(instagramService.getFallbackAccountInfo());
    }
  };

  // Navegação do feed principal
  const nextDisplayPost = () => {
    if (currentDisplayIndex < posts.length - 1) {
      setCurrentDisplayIndex(currentDisplayIndex + 1);
    } else {
      setCurrentDisplayIndex(0); // Volta para o primeiro
    }
  };

  const prevDisplayPost = () => {
    if (currentDisplayIndex > 0) {
      setCurrentDisplayIndex(currentDisplayIndex - 1);
    } else {
      setCurrentDisplayIndex(posts.length - 1); // Vai para o último
    }
  };

  // Auto-play (opcional)
  useEffect(() => {
    if (posts.length > 1) {
      const interval = setInterval(() => {
        nextDisplayPost();
      }, 5000); // Troca a cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [currentDisplayIndex, posts.length]);

  if (loading) {
    return (
      <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Carregando posts...</p>
          <p className="text-white/60 text-sm mt-2">Conectando com Instagram...</p>
        </div>
      </div>
    );
  }

  const currentPost = posts[currentDisplayIndex];

  return (
    <>
      {/* Container com o mesmo fundo do placeholder original */}
      <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm p-6 relative overflow-hidden">
        <div className="relative z-10 h-full flex flex-col justify-center">
          
          {/* Debug info (remover em produção) */}
          {error && (
            <div className="absolute top-2 left-2 bg-red-500/20 text-white text-xs px-2 py-1 rounded">
              Debug: {error}
            </div>
          )}
          
          {/* Post único do Instagram */}
          {posts.length > 0 && currentPost ? (
            <div className="relative h-full flex items-center justify-center">
              {/* Imagem simples */}
              <div
                onClick={() => openPostViewer(currentPost)}
                className="relative cursor-pointer group overflow-hidden rounded-xl transition-all duration-300 w-full h-full max-w-md mx-auto flex items-center justify-center"
              >
                <img
                  src={currentPost.thumbnailUrl}
                  alt={currentPost.caption}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/logoprincipal.jpg'; // Fallback image
                  }}
                />
                
                {/* Play icon para vídeos */}
                {currentPost.mediaType === 'VIDEO' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Setas de navegação */}
              {posts.length > 1 && (
                <>
                  <button
                    onClick={prevDisplayPost}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextDisplayPost}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Indicadores de página */}
              {posts.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {posts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDisplayIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentDisplayIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/80 mb-4">Posts indisponíveis</p>
                <button 
                  onClick={loadPosts}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          )}

          {/* Link para Instagram - pequeno e discreto no canto */}
          <div className="absolute bottom-4 right-4 z-30">
            <a
              href={`https://instagram.com/${accountInfo?.username || 'dunamysibiapaba'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded transition-colors text-xs"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@{accountInfo?.username || 'dunamysibiapaba'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal com informações reais do Instagram */}
      {selectedPost && accountInfo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closePostViewer} // Clique no backdrop fecha o modal
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden flex"
            onClick={(e) => e.stopPropagation()} // Impede que clique no modal feche
          >
            {/* Lado esquerdo - Imagem */}
            <div className="w-1/2 bg-black flex items-center justify-center">
              {selectedPost.mediaType === 'VIDEO' ? (
                <video
                  src={selectedPost.mediaUrl}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  controls
                />
              ) : (
                <img
                  src={selectedPost.mediaUrl}
                  alt={selectedPost.caption}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Lado direito - Informações do post */}
            <div className="w-1/2 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={accountInfo?.profile_picture_url || '/logoprincipal.jpg'}
                    alt={accountInfo?.username || 'dunamysibiapaba'}
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = '/logoprincipal.jpg';
                    }}
                  />
                  <span className="ml-3 text-gray-900 text-sm font-medium">{accountInfo?.username || 'dunamysibiapaba'}</span>
                </div>
                
                <button
                  onClick={closePostViewer}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors duration-200"
                  title="Fechar (ESC)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo do post */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img
                      src={accountInfo?.profile_picture_url || '/logoprincipal.jpg'}
                      alt={accountInfo?.username || 'dunamysibiapaba'}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        e.target.src = '/logoprincipal.jpg';
                      }}
                    />
                    <div className="ml-3">
                      <p className="text-gray-900 text-sm">
                        <span className="font-medium">{accountInfo?.username || 'dunamysibiapaba'}</span>{' '}
                        {selectedPost.caption || 'Post do Instagram'}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{selectedPost.formattedDate}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer com ações */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                
                <a
                  href={selectedPost.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors duration-200"
                >
                  Ver no Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramFeed;