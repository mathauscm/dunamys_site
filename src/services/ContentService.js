import { Content } from '../models/Content.js';

/**
 * Content Service
 * Handles all content-related operations following SOLID principles
 */
export class ContentService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAllContent() {
    try {
      const response = await this.apiClient.get('/content');
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching content:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async getContentById(id) {
    try {
      const response = await this.apiClient.get(`/content/${id}`);
      return Content.create(response.data);
    } catch (error) {
      console.error('Error fetching content by ID:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async getContentBySlug(slug) {
    try {
      const response = await this.apiClient.get(`/content/slug/${slug}`);
      return Content.create(response.data);
    } catch (error) {
      console.error('Error fetching content by slug:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async getContentByCategory(category) {
    try {
      const response = await this.apiClient.get(`/content/category/${category}`);
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching content by category:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async getFeaturedContent() {
    try {
      const response = await this.apiClient.get('/content/featured');
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching featured content:', error);
      throw new Error('Failed to fetch featured content');
    }
  }

  async getRecentContent(limit = 10) {
    try {
      const response = await this.apiClient.get(`/content/recent?limit=${limit}`);
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching recent content:', error);
      throw new Error('Failed to fetch recent content');
    }
  }

  async searchContent(query, filters = {}) {
    try {
      const params = new URLSearchParams({ q: query, ...filters });
      const response = await this.apiClient.get(`/content/search?${params}`);
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error searching content:', error);
      throw new Error('Failed to search content');
    }
  }

  async getContentByTag(tag) {
    try {
      const response = await this.apiClient.get(`/content/tag/${tag}`);
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching content by tag:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async getContentByAuthor(author) {
    try {
      const response = await this.apiClient.get(`/content/author/${author}`);
      return response.data.map(item => Content.create(item));
    } catch (error) {
      console.error('Error fetching content by author:', error);
      throw new Error('Failed to fetch content');
    }
  }

  async createContent(contentData) {
    try {
      const content = Content.create(contentData);
      const response = await this.apiClient.post('/content', content.toJSON());
      return Content.create(response.data);
    } catch (error) {
      console.error('Error creating content:', error);
      throw new Error('Failed to create content');
    }
  }

  async updateContent(id, contentData) {
    try {
      const response = await this.apiClient.put(`/content/${id}`, contentData);
      return Content.create(response.data);
    } catch (error) {
      console.error('Error updating content:', error);
      throw new Error('Failed to update content');
    }
  }

  async deleteContent(id) {
    try {
      await this.apiClient.delete(`/content/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting content:', error);
      throw new Error('Failed to delete content');
    }
  }

  // Utility methods
  filterPublishedContent(content) {
    return content.filter(item => item.isPublished());
  }

  sortContentByDate(content, ascending = false) {
    return content.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }

  groupContentByCategory(content) {
    return content.reduce((groups, item) => {
      const category = item.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(item);
      return groups;
    }, {});
  }

  generateContentSummary(content) {
    return {
      total: content.length,
      published: content.filter(item => item.isPublished()).length,
      featured: content.filter(item => item.isFeatured()).length,
      categories: [...new Set(content.map(item => item.category))],
      tags: [...new Set(content.flatMap(item => item.tags))]
    };
  }
}