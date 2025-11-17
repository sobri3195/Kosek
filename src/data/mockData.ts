import { User, Conversation, FAQ, MessageTemplate, Campaign, DashboardStats, HealthTopic, MedicationReminder } from '../types';

export const mockStats: DashboardStats = {
  totalUsers: 1247,
  todayConversations: 89,
  activeReminders: 342,
  urgentCases: 7
};

export const mockHealthTopics: HealthTopic[] = [
  { name: 'Demam', count: 145 },
  { name: 'Batuk', count: 132 },
  { name: 'Obat', count: 98 },
  { name: 'Pusing', count: 76 },
  { name: 'Lainnya', count: 124 }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    whatsappNumber: '+62812345678',
    age: 45,
    gender: 'male',
    status: 'active',
    medicalHistory: ['Diabetes', 'Hipertensi'],
    allergies: ['Penisilin'],
    registeredAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Siti Rahayu',
    whatsappNumber: '+62823456789',
    age: 32,
    gender: 'female',
    status: 'active',
    medicalHistory: [],
    allergies: [],
    registeredAt: new Date('2024-02-20')
  },
  {
    id: '3',
    name: 'Ahmad Wijaya',
    whatsappNumber: '+62834567890',
    age: 58,
    gender: 'male',
    status: 'active',
    medicalHistory: ['Hipertensi'],
    allergies: ['Aspirin'],
    registeredAt: new Date('2024-01-10')
  },
  {
    id: '4',
    name: 'Dewi Lestari',
    whatsappNumber: '+62845678901',
    age: 28,
    gender: 'female',
    status: 'active',
    medicalHistory: [],
    allergies: [],
    registeredAt: new Date('2024-03-05')
  },
  {
    id: '5',
    name: 'Rudi Hartono',
    whatsappNumber: '+62856789012',
    age: 62,
    gender: 'male',
    status: 'inactive',
    medicalHistory: ['Diabetes', 'Kolesterol'],
    allergies: [],
    registeredAt: new Date('2023-12-01')
  }
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Budi Santoso',
    lastMessage: 'Saya merasa pusing sejak pagi',
    timestamp: new Date(),
    status: 'urgent',
    messages: [
      {
        id: '1-1',
        userId: '1',
        content: 'Halo, saya merasa pusing sejak pagi',
        timestamp: new Date(),
        sender: 'user'
      },
      {
        id: '1-2',
        userId: '1',
        content: 'Apakah Anda juga mengalami mual atau muntah?',
        timestamp: new Date(),
        sender: 'bot'
      }
    ]
  },
  {
    id: '2',
    userId: '2',
    userName: 'Siti Rahayu',
    lastMessage: 'Terima kasih atas sarannya',
    timestamp: new Date(Date.now() - 3600000),
    status: 'resolved',
    messages: [
      {
        id: '2-1',
        userId: '2',
        content: 'Bagaimana cara mengatasi batuk kering?',
        timestamp: new Date(Date.now() - 7200000),
        sender: 'user'
      },
      {
        id: '2-2',
        userId: '2',
        content: 'Untuk batuk kering, saya sarankan: 1) Minum air hangat, 2) Istirahat cukup, 3) Konsumsi madu...',
        timestamp: new Date(Date.now() - 3600000),
        sender: 'bot'
      },
      {
        id: '2-3',
        userId: '2',
        content: 'Terima kasih atas sarannya',
        timestamp: new Date(Date.now() - 3600000),
        sender: 'user'
      }
    ]
  },
  {
    id: '3',
    userId: '3',
    userName: 'Ahmad Wijaya',
    lastMessage: 'Kapan saya harus cek tekanan darah lagi?',
    timestamp: new Date(Date.now() - 7200000),
    status: 'waiting',
    assignedTo: 'Dr. Sarah',
    messages: [
      {
        id: '3-1',
        userId: '3',
        content: 'Kapan saya harus cek tekanan darah lagi?',
        timestamp: new Date(Date.now() - 7200000),
        sender: 'user'
      }
    ]
  }
];

export const mockFAQs: FAQ[] = [
  {
    id: '1',
    question: 'Bagaimana cara mengatasi demam?',
    answer: 'Untuk mengatasi demam: 1) Istirahat yang cukup, 2) Minum banyak air putih, 3) Kompres hangat, 4) Konsumsi parasetamol sesuai dosis. Jika demam >3 hari atau >39°C, segera ke dokter.',
    category: 'Gejala Umum',
    updatedAt: new Date('2024-03-01')
  },
  {
    id: '2',
    question: 'Berapa dosis parasetamol untuk dewasa?',
    answer: 'Dosis parasetamol untuk dewasa: 500-1000mg setiap 4-6 jam, maksimal 4000mg per 24 jam. Jangan melebihi dosis yang dianjurkan.',
    category: 'Obat',
    updatedAt: new Date('2024-03-05')
  },
  {
    id: '3',
    question: 'Kapan harus ke dokter?',
    answer: 'Segera ke dokter jika: 1) Demam tinggi >3 hari, 2) Sesak napas, 3) Nyeri dada, 4) Pusing berat, 5) Kehilangan kesadaran, 6) Gejala memburuk.',
    category: 'Konsultasi',
    updatedAt: new Date('2024-02-28')
  }
];

export const mockTemplates: MessageTemplate[] = [
  {
    id: '1',
    name: 'Pengingat Obat Pagi',
    content: 'Halo {nama}, ini pengingat untuk minum obat {obat} pada pukul {jam}. Jangan lupa diminum setelah makan ya!',
    type: 'reminder',
    updatedAt: new Date('2024-03-10')
  },
  {
    id: '2',
    name: 'Tips Kesehatan Mingguan',
    content: 'Selamat pagi! Tips kesehatan minggu ini: {tips}. Tetap jaga kesehatan dan semangat!',
    type: 'education',
    updatedAt: new Date('2024-03-12')
  },
  {
    id: '3',
    name: 'Pengingat Kunjungan Klinik',
    content: 'Halo {nama}, ini pengingat jadwal kontrol Anda di klinik pada {tanggal} pukul {jam}. Jangan lupa membawa kartu berobat.',
    type: 'reminder',
    updatedAt: new Date('2024-03-08')
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Kampanye Vaksinasi Flu',
    message: 'Jangan lupa untuk vaksinasi flu musim ini. Lindungi diri dan keluarga Anda!',
    segment: 'age40plus',
    scheduledAt: new Date('2024-04-01'),
    status: 'scheduled',
    recipientCount: 456
  },
  {
    id: '2',
    title: 'Tips Hidup Sehat',
    message: 'Mulai hari dengan olahraga ringan 15 menit dan minum air putih 2 gelas!',
    segment: 'all',
    scheduledAt: new Date('2024-03-25'),
    status: 'sent',
    recipientCount: 1247
  },
  {
    id: '3',
    title: 'Edukasi Diabetes',
    message: 'Kenali tanda-tanda diabetes: sering haus, sering buang air kecil, cepat lapar. Cek gula darah rutin!',
    segment: 'diabetes',
    scheduledAt: new Date('2024-04-05'),
    status: 'draft',
    recipientCount: 89
  }
];

export const mockReminders: MedicationReminder[] = [
  {
    id: '1',
    userId: '1',
    medicationName: 'Metformin',
    dosage: '500mg',
    frequency: '2x sehari',
    times: ['08:00', '20:00'],
    duration: 30,
    startDate: new Date('2024-03-01'),
    active: true
  },
  {
    id: '2',
    userId: '3',
    medicationName: 'Amlodipine',
    dosage: '5mg',
    frequency: '1x sehari',
    times: ['07:00'],
    duration: 30,
    startDate: new Date('2024-03-01'),
    active: true
  }
];

export const mockConversationData = [
  { day: 'Sen', count: 45 },
  { day: 'Sel', count: 52 },
  { day: 'Rab', count: 48 },
  { day: 'Kam', count: 61 },
  { day: 'Jum', count: 55 },
  { day: 'Sab', count: 38 },
  { day: 'Min', count: 42 }
];
