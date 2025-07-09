export const API_ENDPOINTS = {
  content: {
    getAll: '/content',
    getById: (id) => `/content/${id}`,
    create: '/content',
    update: (id) => `/content/${id}`,
    delete: (id) => `/content/${id}`,
  },
  schedule: {
    getAll: '/schedule',
    getById: (id) => `/schedule/${id}`,
    create: '/schedule',
    update: (id) => `/schedule/${id}`,
    delete: (id) => `/schedule/${id}`,
  },
  services: {
    getAll: '/services',
    getById: (id) => `/services/${id}`,
    create: '/services',
    update: (id) => `/services/${id}`,
    delete: (id) => `/services/${id}`,
  },
  contact: {
    send: '/contact/send',
  },
  newsletter: {
    subscribe: '/newsletter/subscribe',
  },
};