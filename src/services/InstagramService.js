/**
 * Instagram Service - Graph API
 * Configurado para conta de teste, preparado para @dunamys
 */
export class InstagramService {
  constructor() {
    this.accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;
    this.baseURL = 'https://graph.instagram.com';
    
    // Debug info
    console.log('🔧 Instagram Service iniciado');
    console.log('🔑 Token configurado:', this.accessToken ? 'SIM' : 'NÃO');
    
    if (!this.accessToken) {
      console.warn('⚠️ Token do Instagram não configurado. Usando dados de fallback.');
    }
  }

  /**
   * Busca posts recentes da conta Instagram Business/Creator
   */
  async getRecentPosts(limit = 6) {
    try {
      if (!this.accessToken) {
        console.warn('❌ Token não configurado. Retornando dados de fallback.');
        return this.getFallbackPosts();
      }

      console.log('🔍 Tentando buscar posts da API...');
      
      // Busca posts recentes usando Graph API
      const response = await fetch(
        `${this.baseURL}/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${this.accessToken}`
      );

      console.log('📡 Resposta da API:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Erro da API:', errorData);
        
        if (response.status === 401) {
          throw new Error('Token de acesso inválido ou expirado');
        } else if (response.status === 400) {
          throw new Error('Parâmetros da requisição inválidos');
        }
        throw new Error(`Instagram API error: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Dados recebidos:', data);
      
      if (!data.data || data.data.length === 0) {
        console.warn('⚠️ Nenhum post encontrado. Retornando dados de fallback.');
        return this.getFallbackPosts();
      }

      console.log('🎉 Posts encontrados:', data.data.length);
      return this.formatPostsData(data.data);
    } catch (error) {
      console.error('❌ Erro ao buscar posts do Instagram:', error);
      return this.getFallbackPosts();
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
   * Posts de fallback realistas (preparado para @dunamys)
   */
  getFallbackPosts() {
    console.log('🔄 Usando posts de fallback');
    return [
      {
        id: 'dunamys-fallback-1',
        mediaUrl: '/background.jpg',
        thumbnailUrl: '/background.jpg',
        mediaType: 'IMAGE',
        caption: 'Culto de domingo na Dunamys! Experimentando o poder sobrenatural de Deus 🙏 #Dunamys #PoderDoAlto #Fe',
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3h atrás
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '3h',
        isViewed: false
      },
      {
        id: 'dunamys-fallback-2',
        mediaUrl: '/roll1.jpg',
        thumbnailUrl: '/roll1.jpg',
        mediaType: 'IMAGE',
        caption: 'Unidos em oração e fé! A comunidade Dunamys se fortalece a cada dia 💪 #ComunidadeDunamys #Oracao',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6h atrás
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '6h',
        isViewed: false
      },
      {
        id: 'dunamys-fallback-3',
        mediaUrl: '/roll2.jpg',
        thumbnailUrl: '/roll2.jpg',
        mediaType: 'IMAGE',
        caption: 'Palavra de fé transformando vidas! "Tudo é possível para aquele que crê" ✨ #PalavraDeFe #Transformacao',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12h atrás
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '12h',
        isViewed: false
      },
      {
        id: 'dunamys-fallback-4',
        mediaUrl: '/uni.jpg',
        thumbnailUrl: '/uni.jpg',
        mediaType: 'IMAGE',
        caption: 'Momento de louvor e adoração! O coração se alegra na presença do Senhor 🎵 #Louvor #Adoracao #Dunamys',
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18h atrás
        permalink: 'https://instagram.com/dunamys',
        formattedDate: '18h',
        isViewed: false
      }
    ];
  }

  /**
   * Trunca a caption para não ficar muito longa
   */
  truncateCaption(caption, maxLength = 80) {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength).trim() + '...';
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
      if (!this.accessToken) {
        console.log('❌ Sem token para validar');
        return false;
      }
      
      console.log('🔍 Validando token...');
      const response = await fetch(
        `${this.baseURL}/me?access_token=${this.accessToken}`
      );
      
      const isValid = response.ok;
      console.log('🔑 Token válido:', isValid ? 'SIM' : 'NÃO');
      
      if (!isValid) {
        const errorText = await response.text();
        console.error('❌ Erro na validação:', errorText);
      }
      
      return isValid;
    } catch (error) {
      console.error('❌ Erro ao validar token:', error);
      return false;
    }
  }

  /**
   * Busca informações da conta (para debug)
   */
  async getAccountInfo() {
    try {
      if (!this.accessToken) {
        return this.getFallbackAccountInfo();
      }

      console.log('🔍 Buscando informações da conta...');
      const response = await fetch(
        `${this.baseURL}/me?fields=id,username,account_type,media_count&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        console.error('❌ Erro ao buscar info da conta:', response.status);
        return this.getFallbackAccountInfo();
      }

      const data = await response.json();
      console.log('✅ Info da conta:', data);
      return data;
    } catch (error) {
      console.error('❌ Erro ao buscar informações da conta:', error);
      return this.getFallbackAccountInfo();
    }
  }

  /**
   * Informações de fallback da conta
   */
  getFallbackAccountInfo() {
    return {
      id: 'dunamys_test',
      username: 'dunamys',
      account_type: 'BUSINESS',
      media_count: 156
    };
  }

  /**
   * Marca post como visualizado
   */
  markPostAsViewed(postId) {
    const viewedPosts = JSON.parse(localStorage.getItem('viewedDunamysPosts') || '[]');
    if (!viewedPosts.includes(postId)) {
      viewedPosts.push(postId);
      if (viewedPosts.length > 50) {
        viewedPosts.splice(0, viewedPosts.length - 50);
      }
      localStorage.setItem('viewedDunamysPosts', JSON.stringify(viewedPosts));
    }
  }

  /**
   * Verifica se post foi visualizado
   */
  isPostViewed(postId) {
    const viewedPosts = JSON.parse(localStorage.getItem('viewedDunamysPosts') || '[]');
    return viewedPosts.includes(postId);
  }

  /**
   * Função de debug para testar manualmente
   */
  async debugToken() {
    console.log('🔧 === DEBUG TOKEN ===');
    console.log('Token:', this.accessToken ? 'Configurado' : 'Não configurado');
    
    if (this.accessToken) {
      try {
        // Teste básico
        const response = await fetch(`${this.baseURL}/me?access_token=${this.accessToken}`);
        console.log('Status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Dados da conta:', data);
        } else {
          const error = await response.text();
          console.log('Erro:', error);
        }
      } catch (error) {
        console.log('Erro na requisição:', error);
      }
    }
    console.log('🔧 === FIM DEBUG ===');
  }
}