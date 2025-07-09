// Content entity structure
export const ContentSchema = {
  id: '',
  title: '',
  description: '',
  content: '',
  imageUrl: '',
  author: '',
  category: '',
  tags: [],
  isPublished: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};