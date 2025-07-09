// Schedule entity structure
export const ScheduleSchema = {
  id: '',
  title: '',
  description: '',
  date: new Date(),
  startTime: '',
  endTime: '',
  location: '',
  category: 'service', // 'service' | 'event' | 'meeting' | 'activity'
  isRecurring: false,
  recurringPattern: null, // 'daily' | 'weekly' | 'monthly'
  createdAt: new Date(),
  updatedAt: new Date(),
};