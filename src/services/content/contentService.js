import { apiClient, API_ENDPOINTS } from '../api';

export class ContentService {
  async getAllContent() {
    return apiClient.get(API_ENDPOINTS.content.getAll);
  }

  async getContentById(id) {
    return apiClient.get(API_ENDPOINTS.content.getById(id));
  }

  async createContent(content) {
    return apiClient.post(API_ENDPOINTS.content.create, content);
  }

  async updateContent(id, content) {
    return apiClient.put(API_ENDPOINTS.content.update(id), content);
  }

  async deleteContent(id) {
    return apiClient.delete(API_ENDPOINTS.content.delete(id));
  }
}

export const contentService = new ContentService();