import React, { useState, useEffect } from 'react';
import { InstagramService } from '../../../services/InstagramService.js';

/**
 * Instagram Feed Component
 * Substitui completamente o placeholder "Poder do Alto" no Hero
 * SEM texto "Poder do Alto" e SEM ícone de raio
 */
const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const instagramService = new InstagramService();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Verifica se o token está válido
      const isValidToken = await instagramService.checkTokenValidity();
      if (!isValidToken) {
        console.warn('Token inválido ou expirado. Usando dados de fallback.');
      }
      
      const postsData = await instagramService.getRecentPosts(4);
      setPosts(postsData);
    } catch (err) {
      setError('Erro ao carregar posts');
      console.error('Erro ao carregar posts:', err);
      // Em caso de erro, usar dados de fallback
      const fallbackPosts = instagramService.getFallbackPosts();
      setPosts(fallbackPosts.slice(0, 4));
    } finally {
      setLoading(false);
    }
  };

  const openPostViewer = (post, index) => {
    setSelectedPost(post);
    setCurrentPostIndex(index);
    
    // Marca como visualizado
    instagramService.markPostAsViewed(post.id);
    
    // Atualiza o estado local
    setPosts(prev => prev.map(p => 
      p.id === post.id ? { ...p, isViewed: true } : p
    ));
  };

  const closePostViewer = () => {
    setSelectedPost(null);
    setCurrentPostIndex(0);
  };

  const nextPost = () => {
    if (currentPostIndex < posts.length - 1) {
      const nextIndex = currentPostIndex + 1;
      setCurrentPostIndex(nextIndex);
      setSelectedPost(posts[nextIndex]);
      instagramService.markPostAsViewed(posts[nextIndex].id);
    } else {
      closePostViewer();
    }
  };

  const prevPost = () => {
    if (currentPostIndex > 0) {
      const prevIndex = currentPostIndex - 1;
      setCurrentPostIndex(prevIndex);
      setSelectedPost(posts[prevIndex]);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Carregando posts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Container com o mesmo fundo do placeholder original - SEM texto nem ícones */}
      <div className="w-full h-96 lg:h-[600px] bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm p-6 relative overflow-hidden">
        <div className="relative z-10 h-full flex flex-col justify-center">
          
          {/* Grid de Posts do Instagram - SEM título nem descrição */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {posts.slice(0, 4).map((post, index) => (
                <div
                  key={post.id}
                  onClick={() => openPostViewer(post, index)}
                  className="relative cursor-pointer group overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 aspect-square"
                >
                  <img
                    src={post.thumbnailUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/logoprincipal.jpg'; // Fallback image
                    }}
                  />
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-medium truncate">
                        {post.caption || 'Post do Instagram'}
                      </p>
                      <p className="text-white/70 text-xs">
                        {post.formattedDate}
                      </p>
                    </div>
                  </div>

                  {/* Play icon para vídeos */}
                  {post.mediaType === 'VIDEO' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Indicador de visualizado */}
                  {post.isViewed && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
              ))}
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
          <div className="absolute bottom-4 right-4">
            <a
              href="https://instagram.com/dunamys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 text-white px-2 py-1 rounded transition-colors text-xs"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.99-5.366 11.99-11.99C24.007 5.367 18.641.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
              </svg>
              <span>@dunamys</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Visualização */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full h-full max-h-screen bg-black rounded-2xl overflow-hidden">
            {/* Header do Modal */}
            <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">D</span>
                  </div>
                </div>
                <span className="text-white text-sm font-medium">dunamys</span>
                <span className="text-white/60 text-sm">{selectedPost.formattedDate}</span>
              </div>
              
              <button
                onClick={closePostViewer}
                className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-16 left-4 right-4 z-10">
              <div className="flex space-x-1">
                {posts.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full flex-1 ${
                      index < currentPostIndex 
                        ? 'bg-white' 
                        : index === currentPostIndex 
                        ? 'bg-white bg-opacity-80' 
                        : 'bg-white bg-opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Conteúdo do Post */}
            <div className="w-full h-full flex items-center justify-center pt-20 pb-20">
              {selectedPost.mediaType === 'VIDEO' ? (
                <video
                  src={selectedPost.mediaUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                />
              ) : (
                <img
                  src={selectedPost.mediaUrl}
                  alt={selectedPost.caption}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Caption */}
            {selectedPost.caption && (
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-black bg-opacity-70 rounded-lg p-3">
                  <p className="text-white text-sm leading-relaxed">
                    {selectedPost.caption}
                  </p>
                </div>
              </div>
            )}

            {/* Navegação */}
            <button
              onClick={prevPost}
              className="absolute left-0 top-20 bottom-20 w-1/3 z-10 flex items-center justify-start pl-4"
              disabled={currentPostIndex === 0}
            >
              {currentPostIndex > 0 && (
                <div className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              )}
            </button>
            
            <button
              onClick={nextPost}
              className="absolute right-0 top-20 bottom-20 w-1/3 z-10 flex items-center justify-end pr-4"
            >
              {currentPostIndex < posts.length - 1 && (
                <div className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </button>

            {/* Ações */}
            <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center">
              <a
                href={selectedPost.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramFeed;