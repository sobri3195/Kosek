export interface User {
  id: string;
  name: string;
  whatsappNumber: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  status: 'active' | 'inactive';
  medicalHistory?: string[];
  allergies?: string[];
  registeredAt: Date;
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  sender: 'user' | 'bot' | 'doctor';
  isUrgent?: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  lastMessage: string;
  timestamp: Date;
  status: 'waiting' | 'urgent' | 'resolved';
  assignedTo?: string;
  messages: Message[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  updatedAt: Date;
}

export interface MessageTemplate {
  id: string;
  name: string;
  content: string;
  type: 'reminder' | 'education' | 'broadcast';
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  title: string;
  message: string;
  segment: 'all' | 'age40plus' | 'hypertension' | 'diabetes';
  scheduledAt: Date;
  status: 'scheduled' | 'sent' | 'draft';
  recipientCount?: number;
}

export interface MedicationReminder {
  id: string;
  userId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  times: string[];
  duration: number;
  startDate: Date;
  active: boolean;
}

export interface DashboardStats {
  totalUsers: number;
  todayConversations: number;
  activeReminders: number;
  urgentCases: number;
}

export interface HealthTopic {
  name: string;
  count: number;
}

export type UserRole = 'admin' | 'doctor' | 'support';

export interface SystemSettings {
  webhookUrl: string;
  activeHours: {
    start: string;
    end: string;
  };
  autoReplyEnabled: boolean;
}
