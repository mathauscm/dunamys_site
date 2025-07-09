/**
 * Utility Helper Functions
 * Common utility functions used across the application
 */

// Date Formatting
export const formatDate = (date, format = 'dd/MM/yyyy') => {
  if (!date) return '';
  
  const d = new Date(date);
  
  if (isNaN(d.getTime())) return '';
  
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

export const formatDateTime = (date) => {
  if (!date) return '';
  
  const d = new Date(date);
  
  if (isNaN(d.getTime())) return '';
  
  return d.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getRelativeTime = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const diffTime = Math.abs(now - new Date(date));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return 'ontem';
  if (diffDays <= 7) return `${diffDays} dias atrás`;
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)} semanas atrás`;
  if (diffDays <= 365) return `${Math.floor(diffDays / 30)} meses atrás`;
  
  return `${Math.floor(diffDays / 365)} anos atrás`;
};

// String Utilities
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const slugify = (text) => {
  if (!text) return '';
  
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const capitalizeWords = (text) => {
  if (!text) return '';
  return text.split(' ').map(word => capitalize(word)).join(' ');
};

// URL Utilities
export const buildUrl = (baseUrl, path, params = {}) => {
  const url = new URL(path, baseUrl);
  
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null) {
      url.searchParams.append(key, params[key]);
    }
  });
  
  return url.toString();
};

export const getQueryParams = (search = window.location.search) => {
  const params = new URLSearchParams(search);
  const result = {};
  
  for (let [key, value] of params) {
    result[key] = value;
  }
  
  return result;
};

// Array Utilities
export const chunk = (array, size) => {
  if (!array || !size) return [];
  
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  
  return chunks;
};

export const unique = (array, key) => {
  if (!array) return [];
  
  if (key) {
    const seen = new Set();
    return array.filter(item => {
      const value = item[key];
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  }
  
  return [...new Set(array)];
};

export const sortBy = (array, key, direction = 'asc') => {
  if (!array) return [];
  
  return [...array].sort((a, b) => {
    const aValue = key ? a[key] : a;
    const bValue = key ? b[key] : b;
    
    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

// Object Utilities
export const isEmpty = (obj) => {
  if (!obj) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
};

export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
  return obj;
};

export const pick = (obj, keys) => {
  if (!obj || !keys) return {};
  
  return keys.reduce((result, key) => {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
};

export const omit = (obj, keys) => {
  if (!obj || !keys) return obj;
  
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  
  return result;
};

// Validation Utilities
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// DOM Utilities
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

export const scrollToElement = (elementId, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

// Storage Utilities
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
  
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  }
};

// Debounce Utility
export const debounce = (func, delay) => {
  let timeoutId;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle Utility
export const throttle = (func, limit) => {
  let inThrottle;
  
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Error Handling
export const handleError = (error, fallback = null) => {
  console.error('Error:', error);
  
  if (typeof fallback === 'function') {
    return fallback(error);
  }
  
  return fallback;
};

// Number Utilities
export const formatNumber = (num, locale = 'pt-BR') => {
  if (typeof num !== 'number') return '0';
  return num.toLocaleString(locale);
};

export const formatCurrency = (amount, currency = 'BRL', locale = 'pt-BR') => {
  if (typeof amount !== 'number') return 'R$ 0,00';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Random Utilities
export const generateId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};

export const getRandomColor = () => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};