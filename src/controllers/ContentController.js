import { ContentService } from '../services/ContentService.js';

/**
 * Content Controller
 * Handles content-related business logic and state management
 */
export class ContentController {
  constructor(contentService) {
    this.contentService = contentService;
  }

  async getHomepageContent() {
    try {
      const [featuredContent, recentContent] = await Promise.all([
        this.contentService.getFeaturedContent(),
        this.contentService.getRecentContent(6)
      ]);

      return {
        featured: featuredContent,
        recent: recentContent
      };
    } catch (error) {
      console.error('Error getting homepage content:', error);
      throw error;
    }
  }

  async getBlogContent(page = 1, limit = 10) {
    try {
      const blogContent = await this.contentService.getContentByCategory('blog');
      const publishedContent = this.contentService.filterPublishedContent(blogContent);
      const sortedContent = this.contentService.sortContentByDate(publishedContent);
      
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedContent = sortedContent.slice(startIndex, endIndex);

      return {
        content: paginatedContent,
        pagination: {
          page,
          limit,
          total: sortedContent.length,
          totalPages: Math.ceil(sortedContent.length / limit),
          hasNextPage: endIndex < sortedContent.length,
          hasPreviousPage: page > 1
        }
      };
    } catch (error) {
      console.error('Error getting blog content:', error);
      throw error;
    }
  }

  async getMessagesContent(page = 1, limit = 10) {
    try {
      const messagesContent = await this.contentService.getContentByCategory('message');
      const publishedContent = this.contentService.filterPublishedContent(messagesContent);
      const sortedContent = this.contentService.sortContentByDate(publishedContent);
      
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedContent = sortedContent.slice(startIndex, endIndex);

      return {
        content: paginatedContent,
        pagination: {
          page,
          limit,
          total: sortedContent.length,
          totalPages: Math.ceil(sortedContent.length / limit),
          hasNextPage: endIndex < sortedContent.length,
          hasPreviousPage: page > 1
        }
      };
    } catch (error) {
      console.error('Error getting messages content:', error);
      throw error;
    }
  }

  async getContentBySlug(slug) {
    try {
      const content = await this.contentService.getContentBySlug(slug);
      
      if (!content.isPublished()) {
        throw new Error('Content not found or not published');
      }

      // Get related content
      const relatedContent = await this.getRelatedContent(content);

      return {
        content,
        related: relatedContent
      };
    } catch (error) {
      console.error('Error getting content by slug:', error);
      throw error;
    }
  }

  async getRelatedContent(content, limit = 3) {
    try {
      // Get content from the same category
      const categoryContent = await this.contentService.getContentByCategory(content.category);
      
      // Filter out the current content and unpublished content
      const filteredContent = this.contentService.filterPublishedContent(
        categoryContent.filter(item => item.id !== content.id)
      );

      // Sort by date and limit results
      const sortedContent = this.contentService.sortContentByDate(filteredContent);
      
      return sortedContent.slice(0, limit);
    } catch (error) {
      console.error('Error getting related content:', error);
      return [];
    }
  }

  async searchContent(query, filters = {}) {
    try {
      const searchResults = await this.contentService.searchContent(query, filters);
      const publishedResults = this.contentService.filterPublishedContent(searchResults);
      
      return {
        results: publishedResults,
        query,
        filters,
        total: publishedResults.length
      };
    } catch (error) {
      console.error('Error searching content:', error);
      throw error;
    }
  }

  async getContentByTag(tag) {
    try {
      const taggedContent = await this.contentService.getContentByTag(tag);
      const publishedContent = this.contentService.filterPublishedContent(taggedContent);
      const sortedContent = this.contentService.sortContentByDate(publishedContent);

      return {
        content: sortedContent,
        tag,
        total: sortedContent.length
      };
    } catch (error) {
      console.error('Error getting content by tag:', error);
      throw error;
    }
  }

  async getContentByAuthor(author) {
    try {
      const authorContent = await this.contentService.getContentByAuthor(author);
      const publishedContent = this.contentService.filterPublishedContent(authorContent);
      const sortedContent = this.contentService.sortContentByDate(publishedContent);

      return {
        content: sortedContent,
        author,
        total: sortedContent.length
      };
    } catch (error) {
      console.error('Error getting content by author:', error);
      throw error;
    }
  }

  async getContentCategories() {
    try {
      const allContent = await this.contentService.getAllContent();
      const publishedContent = this.contentService.filterPublishedContent(allContent);
      const groupedContent = this.contentService.groupContentByCategory(publishedContent);

      return Object.keys(groupedContent).map(category => ({
        name: category,
        count: groupedContent[category].length
      }));
    } catch (error) {
      console.error('Error getting content categories:', error);
      throw error;
    }
  }

  async getContentTags() {
    try {
      const allContent = await this.contentService.getAllContent();
      const publishedContent = this.contentService.filterPublishedContent(allContent);
      
      const tagCounts = publishedContent.reduce((acc, content) => {
        content.tags.forEach(tag => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
      }, {});

      return Object.entries(tagCounts).map(([tag, count]) => ({
        name: tag,
        count
      })).sort((a, b) => b.count - a.count);
    } catch (error) {
      console.error('Error getting content tags:', error);
      throw error;
    }
  }

  async getContentArchive() {
    try {
      const allContent = await this.contentService.getAllContent();
      const publishedContent = this.contentService.filterPublishedContent(allContent);
      
      const archive = publishedContent.reduce((acc, content) => {
        const year = content.date.getFullYear();
        const month = content.date.toLocaleDateString('pt-BR', { month: 'long' });
        
        if (!acc[year]) {
          acc[year] = {};
        }
        
        if (!acc[year][month]) {
          acc[year][month] = [];
        }
        
        acc[year][month].push(content);
        return acc;
      }, {});

      return archive;
    } catch (error) {
      console.error('Error getting content archive:', error);
      throw error;
    }
  }
}