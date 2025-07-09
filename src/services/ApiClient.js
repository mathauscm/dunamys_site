/**
 * API Client
 * Handles HTTP requests with proper error handling and configuration
 */
export class ApiClient {
  constructor(baseURL = 'http://localhost:3000/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const config = {
      method: options.method || 'GET',
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
      ...options,
    };

    if (config.method !== 'GET' && options.body) {
      config.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return await response.text();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: data,
    });
  }

  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: data,
    });
  }

  async patch(endpoint, data) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: data,
    });
  }

  async delete(endpoint, data = null) {
    const options = {
      method: 'DELETE',
    };

    if (data) {
      options.body = data;
    }

    return this.request(endpoint, options);
  }

  setAuthToken(token) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  setBaseURL(baseURL) {
    this.baseURL = baseURL;
  }
}