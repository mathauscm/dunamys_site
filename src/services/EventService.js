import { Event } from '../models/Event.js';

/**
 * Event Service
 * Handles all event-related operations following SOLID principles
 */
export class EventService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getAllEvents() {
    try {
      const response = await this.apiClient.get('/events');
      return response.data.map(event => Event.create(event));
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Failed to fetch events');
    }
  }

  async getEventById(id) {
    try {
      const response = await this.apiClient.get(`/events/${id}`);
      return Event.create(response.data);
    } catch (error) {
      console.error('Error fetching event by ID:', error);
      throw new Error('Failed to fetch event');
    }
  }

  async getEventBySlug(slug) {
    try {
      const response = await this.apiClient.get(`/events/slug/${slug}`);
      return Event.create(response.data);
    } catch (error) {
      console.error('Error fetching event by slug:', error);
      throw new Error('Failed to fetch event');
    }
  }

  async getUpcomingEvents(limit = 10) {
    try {
      const response = await this.apiClient.get(`/events/upcoming?limit=${limit}`);
      return response.data.map(event => Event.create(event));
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      throw new Error('Failed to fetch upcoming events');
    }
  }

  async getEventsByCategory(category) {
    try {
      const response = await this.apiClient.get(`/events/category/${category}`);
      return response.data.map(event => Event.create(event));
    } catch (error) {
      console.error('Error fetching events by category:', error);
      throw new Error('Failed to fetch events');
    }
  }

  async getEventsByDateRange(startDate, endDate) {
    try {
      const params = new URLSearchParams({
        start: startDate.toISOString(),
        end: endDate.toISOString()
      });
      const response = await this.apiClient.get(`/events/date-range?${params}`);
      return response.data.map(event => Event.create(event));
    } catch (error) {
      console.error('Error fetching events by date range:', error);
      throw new Error('Failed to fetch events');
    }
  }

  async searchEvents(query, filters = {}) {
    try {
      const params = new URLSearchParams({ q: query, ...filters });
      const response = await this.apiClient.get(`/events/search?${params}`);
      return response.data.map(event => Event.create(event));
    } catch (error) {
      console.error('Error searching events:', error);
      throw new Error('Failed to search events');
    }
  }

  async createEvent(eventData) {
    try {
      const event = Event.create(eventData);
      const response = await this.apiClient.post('/events', event.toJSON());
      return Event.create(response.data);
    } catch (error) {
      console.error('Error creating event:', error);
      throw new Error('Failed to create event');
    }
  }

  async updateEvent(id, eventData) {
    try {
      const response = await this.apiClient.put(`/events/${id}`, eventData);
      return Event.create(response.data);
    } catch (error) {
      console.error('Error updating event:', error);
      throw new Error('Failed to update event');
    }
  }

  async deleteEvent(id) {
    try {
      await this.apiClient.delete(`/events/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting event:', error);
      throw new Error('Failed to delete event');
    }
  }

  async registerForEvent(eventId, userData) {
    try {
      const response = await this.apiClient.post(`/events/${eventId}/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering for event:', error);
      throw new Error('Failed to register for event');
    }
  }

  async unregisterFromEvent(eventId, userEmail) {
    try {
      const response = await this.apiClient.delete(`/events/${eventId}/register`, {
        data: { email: userEmail }
      });
      return response.data;
    } catch (error) {
      console.error('Error unregistering from event:', error);
      throw new Error('Failed to unregister from event');
    }
  }

  // Utility methods
  filterUpcomingEvents(events) {
    return events.filter(event => event.isUpcoming());
  }

  filterPastEvents(events) {
    return events.filter(event => event.isPast());
  }

  filterOngoingEvents(events) {
    return events.filter(event => event.isOngoing());
  }

  filterFreeEvents(events) {
    return events.filter(event => event.isFree());
  }

  filterEventsWithRegistration(events) {
    return events.filter(event => event.registrationRequired);
  }

  sortEventsByDate(events, ascending = true) {
    return events.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }

  groupEventsByCategory(events) {
    return events.reduce((groups, event) => {
      const category = event.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(event);
      return groups;
    }, {});
  }

  groupEventsByMonth(events) {
    return events.reduce((groups, event) => {
      const month = event.startDate.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: 'long' 
      });
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(event);
      return groups;
    }, {});
  }

  generateEventSummary(events) {
    const now = new Date();
    return {
      total: events.length,
      upcoming: events.filter(event => event.isUpcoming()).length,
      ongoing: events.filter(event => event.isOngoing()).length,
      past: events.filter(event => event.isPast()).length,
      free: events.filter(event => event.isFree()).length,
      withRegistration: events.filter(event => event.registrationRequired).length,
      categories: [...new Set(events.map(event => event.category))]
    };
  }
}