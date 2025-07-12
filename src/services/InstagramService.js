/**
 * Instagram Service - Graph API
 * Usando a nova Instagram Graph API (pós-dezembro 2024)
 * Requer conta Instagram Business ou Creator
 */
export class InstagramService {
  constructor() {
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    this.baseURL = 'https://graph.instagram.com';
    
    // Verificar se o token foi configurado
    if (!this.accessToken) {
      console.warn('Token do Instagram não configurado. Usando dados de fallback.');
    }
  }

  /**
   * Busca posts recentes da conta Instagram Business/Creator
   */
  async getRecentPosts(limit = 6) {
    try {
      if (!this.accessToken) {
        console.warn('Token não configurado. Retornando dados de fallback.');
        return this.getFallbackPosts();
      }

      // Busca posts recentes usando Graph API
      const response = await fetch(
        `${this.baseURL}/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Token de acesso inválido ou expirado');
        } else if (response.status === 400) {
          throw new Error('Parâmetros da requisição inválidos');
        }
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.data || data.data.length === 0) {
        console.warn('Nenhum post encontrado. Retornando dados de fallback.');
        return this.getFallbackPosts();
      }

      return this.formatPostsData(data.data);
    } catch (error) {
      console.error('Erro ao buscar posts do Instagram:', error);
      return this.getFallbackPosts();
    }
  }

  /**
   * Busca informações da conta
   */
  async getAccountInfo() {
    try {
      if (!this.accessToken) {
        return this.getFallbackAccountInfo();
      }

      const response = await fetch(
        `${this.baseURL}/me?fields=id,username,account_type,media_count&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar informações da conta:', error);
      return this.getFallbackAccountInfo();
    }
  }

  /**
   * Formata dados dos posts para o componente
   */
  formatPostsData(posts) {
    return posts.map(post => ({
      id: post.id,
      mediaUrl: post.media_url,
      thumbnailUrl: post.thumbnail_url || post.media_url,
      mediaType: post.media_type,
      caption: this.truncateCaption(post.caption || ''),
      timestamp: post.timestamp,
      permalink: post.permalink,
      formattedDate: this.formatDate(post.timestamp),
      isViewed: this.isPostViewed(post.id)
    }));
  }

  /**
   * Trunca a caption para não ficar muito longa
   */
  truncateCaption(caption, maxLength = 100) {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength).trim() + '...';
  }

  /**
   * Posts de fallback caso a API falhe
   */
  getFallbackPosts() {
    return [
      {
        id: 'fallback-1',
        mediaUrl: '/roll1.jpg',
        thumbnailUrl: '/roll1.jpg',
        mediaType: 'IMAGE',
        caption: 'Culto de domingo na Dunamys! 🙏 #Fe #Poder #Dunamys',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '2h',
        isViewed: false
      },
      {
        id: 'fallback-2',
        mediaUrl: '/background.jpg',
        thumbnailUrl: '/background.jpg',
        mediaType: 'IMAGE',
        caption: 'Experimentando o sobrenatural de Deus 💪 #Dunamys #PoderDoAlto',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '5h',
        isViewed: false
      },
      {
        id: 'fallback-3',
        mediaUrl: '/roll2.jpg',
        thumbnailUrl: '/roll2.jpg',
        mediaType: 'IMAGE',
        caption: 'Unidos em oração e fé! 🤝 #Comunidade #Dunamys',
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '8h',
        isViewed: false
      },
      {
        id: 'fallback-4',
        mediaUrl: '/uni.jpg',
        thumbnailUrl: '/uni.jpg',
        mediaType: 'IMAGE',
        caption: 'Transformando vidas através do poder de Deus ✨',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '12h',
        isViewed: false
      }
    ];
  }

  /**
   * Informações de fallback da conta
   */
  getFallbackAccountInfo() {
    return {
      id: 'dunamys_official',
      username: 'dunamys',
      account_type: 'BUSINESS',
      media_count: 156
    };
  }

  /**
   * Formata data para exibição
   */
  formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffMinutes = Math.ceil(diffTime / (1000 * 60));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) return `${diffMinutes}min`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays === 1) return 'Ontem';
    if (diffDays < 7) return `${diffDays}d`;
    
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'short' 
    });
  }

  /**
   * Verifica se o token está válido
   */
  async checkTokenValidity() {
    try {
      if (!this.accessToken) return false;
      
      const response = await fetch(
        `${this.baseURL}/me?access_token=${this.accessToken}`
      );
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Marca post como visualizado
   */
  markPostAsViewed(postId) {
    const viewedPosts = JSON.parse(localStorage.getItem('viewedInstagramPosts') || '[]');
    if (!viewedPosts.includes(postId)) {
      viewedPosts.push(postId);
      if (viewedPosts.length > 50) {
        viewedPosts.splice(0, viewedPosts.length - 50);
      }
      localStorage.setItem('viewedInstagramPosts', JSON.stringify(viewedPosts));
    }
  }

  /**
   * Verifica se post foi visualizado
   */
  isPostViewed(postId) {
    const viewedPosts = JSON.parse(localStorage.getItem('viewedInstagramPosts') || '[]');
    return viewedPosts.includes(postId);
  }

  /**
   * Obtém informações de debug sobre o token
   */
  async getTokenInfo() {
    try {
      if (!this.accessToken) {
        return { error: 'Token não configurado' };
      }

      const response = await fetch(
        `${this.baseURL}/debug_token?input_token=${this.accessToken}&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        return { error: `Erro ${response.status}: ${response.statusText}` };
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
}