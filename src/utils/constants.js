/**
 * Application Constants
 * Centralized constants for the application
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
};

// Application Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre',
  MINISTRY: '/ministerio',
  MESSAGES: '/mensagens',
  EVENTS: '/eventos',
  BLOG: '/blog',
  CONTACT: '/contato',
  PRIVACY: '/privacidade',
  TERMS: '/termos'
};

// Content Categories
export const CONTENT_CATEGORIES = {
  BLOG: 'blog',
  MESSAGE: 'message',
  SERMON: 'sermon',
  TEACHING: 'teaching',
  TESTIMONY: 'testimony'
};

// Event Categories
export const EVENT_CATEGORIES = {
  CONFERENCE: 'conference',
  WORKSHOP: 'workshop',
  SERVICE: 'service',
  MEETING: 'meeting',
  TRAINING: 'training',
  CELEBRATION: 'celebration'
};

// Event Status
export const EVENT_STATUS = {
  UPCOMING: 'upcoming',
  ONGOING: 'ongoing',
  PAST: 'past',
  CANCELLED: 'cancelled'
};

// Content Status
export const CONTENT_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived'
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme'
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'dd/MM/yyyy',
  DISPLAY_WITH_TIME: 'dd/MM/yyyy HH:mm',
  API: 'yyyy-MM-dd',
  ISO: 'yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''
};

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
  MIN_PASSWORD_LENGTH: 6,
  MAX_TITLE_LENGTH: 100,
  MAX_CONTENT_LENGTH: 10000
};

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/dunamys',
  INSTAGRAM: 'https://instagram.com/dunamys',
  YOUTUBE: 'https://youtube.com/dunamys',
  TWITTER: 'https://twitter.com/dunamys'
};

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Ocorreu um erro inesperado. Tente novamente.',
  NETWORK: 'Erro de conexão. Verifique sua internet.',
  NOT_FOUND: 'Conteúdo não encontrado.',
  UNAUTHORIZED: 'Acesso não autorizado.',
  VALIDATION: 'Dados inválidos. Verifique os campos.',
  SERVER: 'Erro do servidor. Tente novamente em alguns minutos.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Mensagem enviada com sucesso!',
  SUBSCRIPTION: 'Inscrição realizada com sucesso!',
  REGISTRATION: 'Cadastro realizado com sucesso!',
  UPDATE: 'Atualização realizada com sucesso!'
};

// Theme Configuration
export const THEME = {
  PRIMARY_COLOR: '#d133ff',
  SECONDARY_COLOR: '#0ea5e9',
  SUCCESS_COLOR: '#10b981',
  WARNING_COLOR: '#f59e0b',
  ERROR_COLOR: '#ef4444',
  DARK_MODE: false
};

// Feature Flags
export const FEATURES = {
  DARK_MODE: false,
  USER_REGISTRATION: true,
  NEWSLETTER: true,
  COMMENTS: true,
  SEARCH: true,
  NOTIFICATIONS: true
};