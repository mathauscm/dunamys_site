import { EventService } from '../services/EventService.js';

/**
 * Event Controller
 * Handles event-related business logic and state management
 */
export class EventController {
  constructor(eventService) {
    this.eventService = eventService;
  }

  async getUpcomingEvents(limit = 5) {
    try {
      const upcomingEvents = await this.eventService.getUpcomingEvents(limit);
      return this.eventService.sortEventsByDate(upcomingEvents);
    } catch (error) {
      console.error('Error getting upcoming events:', error);
      throw error;
    }
  }

  async getAllEvents() {
    try {
      const events = await this.eventService.getAllEvents();
      return this.eventService.sortEventsByDate(events);
    } catch (error) {
      console.error('Error getting all events:', error);
      throw error;
    }
  }

  async getEventsByCategory(category) {
    try {
      const events = await this.eventService.getEventsByCategory(category);
      return this.eventService.sortEventsByDate(events);
    } catch (error) {
      console.error('Error getting events by category:', error);
      throw error;
    }
  }

  async getEventBySlug(slug) {
    try {
      const event = await this.eventService.getEventBySlug(slug);
      const relatedEvents = await this.getRelatedEvents(event);

      return {
        event,
        related: relatedEvents
      };
    } catch (error) {
      console.error('Error getting event by slug:', error);
      throw error;
    }
  }

  async getRelatedEvents(event, limit = 3) {
    try {
      const categoryEvents = await this.eventService.getEventsByCategory(event.category);
      
      // Filter out the current event and sort by date
      const filteredEvents = categoryEvents
        .filter(e => e.id !== event.id)
        .filter(e => e.isUpcoming());
      
      const sortedEvents = this.eventService.sortEventsByDate(filteredEvents);
      
      return sortedEvents.slice(0, limit);
    } catch (error) {
      console.error('Error getting related events:', error);
      return [];
    }
  }

  async getEventCalendar(year, month) {
    try {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      
      const events = await this.eventService.getEventsByDateRange(startDate, endDate);
      const groupedEvents = this.eventService.groupEventsByMonth(events);
      
      return {
        events: groupedEvents,
        year,
        month
      };
    } catch (error) {
      console.error('Error getting event calendar:', error);
      throw error;
    }
  }

  async searchEvents(query, filters = {}) {
    try {
      const searchResults = await this.eventService.searchEvents(query, filters);
      const sortedResults = this.eventService.sortEventsByDate(searchResults);
      
      return {
        results: sortedResults,
        query,
        filters,
        total: sortedResults.length
      };
    } catch (error) {
      console.error('Error searching events:', error);
      throw error;
    }
  }

  async registerForEvent(eventId, userData) {
    try {
      const event = await this.eventService.getEventById(eventId);
      
      if (!event.canRegister()) {
        throw new Error('Registration not available for this event');
      }

      const registrationResult = await this.eventService.registerForEvent(eventId, userData);
      
      // Update local event data
      event.updateAttendees(event.currentAttendees + 1);
      
      return {
        success: true,
        event,
        registration: registrationResult
      };
    } catch (error) {
      console.error('Error registering for event:', error);
      throw error;
    }
  }

  async unregisterFromEvent(eventId, userEmail) {
    try {
      const event = await this.eventService.getEventById(eventId);
      
      const unregistrationResult = await this.eventService.unregisterFromEvent(eventId, userEmail);
      
      // Update local event data
      event.updateAttendees(Math.max(0, event.currentAttendees - 1));
      
      return {
        success: true,
        event,
        unregistration: unregistrationResult
      };
    } catch (error) {
      console.error('Error unregistering from event:', error);
      throw error;
    }
  }

  async getEventCategories() {
    try {
      const allEvents = await this.eventService.getAllEvents();
      const groupedEvents = this.eventService.groupEventsByCategory(allEvents);

      return Object.keys(groupedEvents).map(category => ({
        name: category,
        count: groupedEvents[category].length,
        upcoming: groupedEvents[category].filter(event => event.isUpcoming()).length
      }));
    } catch (error) {
      console.error('Error getting event categories:', error);
      throw error;
    }
  }

  async getEventStatistics() {
    try {
      const allEvents = await this.eventService.getAllEvents();
      const summary = this.eventService.generateEventSummary(allEvents);
      
      return {
        ...summary,
        nextEvent: this.eventService.filterUpcomingEvents(allEvents)
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0] || null
      };
    } catch (error) {
      console.error('Error getting event statistics:', error);
      throw error;
    }
  }

  async getFeaturedEvents(limit = 3) {
    try {
      const upcomingEvents = await this.eventService.getUpcomingEvents();
      
      // For now, consider all upcoming events as potentially featured
      // In a real application, you might have a 'featured' flag in the Event model
      const featuredEvents = upcomingEvents
        .filter(event => event.registrationRequired || event.category === 'conference')
        .slice(0, limit);
      
      return featuredEvents;
    } catch (error) {
      console.error('Error getting featured events:', error);
      throw error;
    }
  }

  async getEventsByDateRange(startDate, endDate) {
    try {
      const events = await this.eventService.getEventsByDateRange(startDate, endDate);
      return this.eventService.sortEventsByDate(events);
    } catch (error) {
      console.error('Error getting events by date range:', error);
      throw error;
    }
  }

  async getMonthlyEvents(year, month) {
    try {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      
      const events = await this.getEventsByDateRange(startDate, endDate);
      const groupedByCategory = this.eventService.groupEventsByCategory(events);
      
      return {
        events,
        groupedByCategory,
        year,
        month,
        monthName: startDate.toLocaleDateString('pt-BR', { month: 'long' })
      };
    } catch (error) {
      console.error('Error getting monthly events:', error);
      throw error;
    }
  }
}