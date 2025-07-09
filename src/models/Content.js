/**
 * Content Model
 * Represents a content item in the application
 */
export class Content {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title || '';
    this.content = data.content || '';
    this.excerpt = data.excerpt || '';
    this.author = data.author || '';
    this.date = data.date ? new Date(data.date) : new Date();
    this.category = data.category || '';
    this.tags = data.tags || [];
    this.featured = data.featured || false;
    this.status = data.status || 'published';
    this.slug = data.slug || '';
    this.imageUrl = data.imageUrl || '';
    this.metaDescription = data.metaDescription || '';
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }

  // Static factory methods
  static create(data) {
    return new Content(data);
  }

  static fromBlogPost(blogData) {
    return new Content({
      ...blogData,
      category: 'blog',
      status: 'published'
    });
  }

  static fromMessage(messageData) {
    return new Content({
      ...messageData,
      category: 'message',
      status: 'published'
    });
  }

  // Instance methods
  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      excerpt: this.excerpt,
      author: this.author,
      date: this.date.toISOString(),
      category: this.category,
      tags: this.tags,
      featured: this.featured,
      status: this.status,
      slug: this.slug,
      imageUrl: this.imageUrl,
      metaDescription: this.metaDescription,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString()
    };
  }

  getExcerpt(length = 150) {
    if (this.excerpt) return this.excerpt;
    
    const plainText = this.content.replace(/<[^>]*>/g, '');
    return plainText.length > length 
      ? plainText.substring(0, length) + '...'
      : plainText;
  }

  generateSlug() {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  isPublished() {
    return this.status === 'published';
  }

  isFeatured() {
    return this.featured;
  }

  getFormattedDate() {
    return this.date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  hasTag(tag) {
    return this.tags.includes(tag);
  }

  addTag(tag) {
    if (!this.hasTag(tag)) {
      this.tags.push(tag);
    }
  }

  removeTag(tag) {
    this.tags = this.tags.filter(t => t !== tag);
  }
}