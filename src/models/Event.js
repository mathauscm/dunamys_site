/**
 * Event Model
 * Represents an event in the application
 */
export class Event {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.description = data.description || '';
    this.startDate = data.startDate ? new Date(data.startDate) : new Date();
    this.endDate = data.endDate ? new Date(data.endDate) : null;
    this.location = data.location || '';
    this.address = data.address || '';
    this.imageUrl = data.imageUrl || '';
    this.category = data.category || '';
    this.status = data.status || 'upcoming';
    this.registrationRequired = data.registrationRequired || false;
    this.maxAttendees = data.maxAttendees || null;
    this.currentAttendees = data.currentAttendees || 0;
    this.price = data.price || 0;
    this.organizer = data.organizer || '';
    this.contactEmail = data.contactEmail || '';
    this.contactPhone = data.contactPhone || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }

  // Static factory methods
  static create(data) {
    return new Event(data);
  }

  static fromConference(conferenceData) {
    return new Event({
      ...conferenceData,
      category: 'conference',
      registrationRequired: true
    });
  }

  static fromWorkshop(workshopData) {
    return new Event({
      ...workshopData,
      category: 'workshop',
      registrationRequired: true
    });
  }

  static fromService(serviceData) {
    return new Event({
      ...serviceData,
      category: 'service',
      registrationRequired: false
    });
  }

  // Instance methods
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate ? this.endDate.toISOString() : null,
      location: this.location,
      address: this.address,
      imageUrl: this.imageUrl,
      category: this.category,
      status: this.status,
      registrationRequired: this.registrationRequired,
      maxAttendees: this.maxAttendees,
      currentAttendees: this.currentAttendees,
      price: this.price,
      organizer: this.organizer,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      slug: this.slug,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString()
    };
  }

  getFormattedDate() {
    return this.startDate.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getFormattedTime() {
    return this.startDate.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getFormattedDateTime() {
    return `${this.getFormattedDate()} às ${this.getFormattedTime()}`;
  }

  getDuration() {
    if (!this.endDate) return null;
    return this.endDate.getTime() - this.startDate.getTime();
  }

  getDurationInHours() {
    const duration = this.getDuration();
    return duration ? Math.floor(duration / (1000 * 60 * 60)) : null;
  }

  isUpcoming() {
    return this.status === 'upcoming' && this.startDate > new Date();
  }

  isOngoing() {
    const now = new Date();
    return this.startDate <= now && (this.endDate ? this.endDate > now : true);
  }

  isPast() {
    return this.status === 'past' || (this.endDate && this.endDate < new Date());
  }

  isFree() {
    return this.price === 0;
  }

  hasAvailableSpots() {
    return !this.maxAttendees || this.currentAttendees < this.maxAttendees;
  }

  getAvailableSpots() {
    return this.maxAttendees ? this.maxAttendees - this.currentAttendees : null;
  }

  generateSlug() {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  updateAttendees(count) {
    this.currentAttendees = Math.max(0, count);
    this.updatedAt = new Date();
  }

  canRegister() {
    return this.registrationRequired && this.hasAvailableSpots() && this.isUpcoming();
  }
}