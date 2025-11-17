# Kosek - WhatsApp Health Bot Dashboard

A modern, responsive React dashboard for managing a WhatsApp-based health assistant bot. Built for healthcare administrators and medical professionals to monitor and manage patient interactions, health content, and automated campaigns.

## 🌟 Features

### 1. **Overview Dashboard**
- Real-time statistics (active users, conversations, reminders, urgent cases)
- Interactive charts showing daily conversations and health topic trends
- Recent activity feed with color-coded notifications

### 2. **User Management**
- Comprehensive user list with filtering and search
- Detailed user profiles showing:
  - Basic information (name, age, gender, WhatsApp number)
  - Medical history and allergies
  - Recent activity timeline
- User status tracking (active/inactive)

### 3. **Conversations**
- Real-time conversation view with filtering (All, Waiting, Urgent)
- Chat interface with message history
- Status indicators for conversation priority
- Assign conversations to doctors
- Direct messaging capability

### 4. **Content & Flow Management**
- **FAQ Management**: Create and edit frequently asked questions
- **Message Templates**: Design reusable templates for reminders and education
- **Chat Flows**: Configure conversation flows for the bot

### 5. **Campaigns & Broadcast**
- Create targeted health campaigns
- Segment users by:
  - All users
  - Age groups (40+)
  - Health conditions (Diabetes, Hypertension)
- Schedule broadcasts
- Track campaign status (Draft, Scheduled, Sent)

### 6. **Settings**
- WhatsApp API integration configuration
- Operating hours management
- Auto-reply settings
- User roles and permissions (Admin, Doctor, Support)
- System management tools

### 7. **Additional Features**
- 🌓 Dark/Light mode support
- 📱 Fully responsive design (desktop, tablet, mobile)
- 🎨 Modern, healthcare-themed UI with soft green/teal accents
- 🔔 Notification system
- 🔍 Global search functionality

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router v6** - Navigation
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **CSS Variables** - Theming system

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx        # Main navigation sidebar
│   │   ├── TopBar.tsx         # Top bar with search and theme toggle
│   │   └── *.css
│   ├── pages/
│   │   ├── Overview.tsx       # Dashboard homepage
│   │   ├── Users.tsx          # User management
│   │   ├── Conversations.tsx  # Chat interface
│   │   ├── Content.tsx        # FAQ, templates, flows
│   │   ├── Campaigns.tsx      # Campaign management
│   │   ├── Settings.tsx       # System settings
│   │   └── *.css
│   └── common/
│       └── StatCard.tsx       # Reusable stat card component
├── data/
│   └── mockData.ts           # Mock data for development
├── types/
│   └── index.ts              # TypeScript type definitions
├── App.tsx                   # Main app component
├── index.tsx                 # Entry point
└── index.css                 # Global styles and theme
```

## 🎨 Design System

### Color Palette
- **Primary**: `#10b981` (Emerald green)
- **Secondary**: `#14b8a6` (Teal)
- **Success**: `#10b981`
- **Warning**: `#f59e0b`
- **Danger**: `#ef4444`
- **Info**: `#3b82f6`

### Theme Support
The dashboard supports both light and dark themes with automatic preference detection and manual toggle.

## 🔧 Configuration

### WhatsApp Integration
Configure your WhatsApp Business API credentials in the Settings page:
1. Navigate to Settings
2. Enter your Webhook URL
3. Configure operating hours
4. Enable/disable auto-reply

### User Roles
Three predefined roles:
- **Administrator**: Full system access
- **Doctor**: Manage conversations, content, view analytics
- **Support**: View and respond to conversations

## 📊 Mock Data

The application includes comprehensive mock data for demonstration:
- Sample users with medical histories
- Conversation threads
- FAQ entries
- Message templates
- Campaign examples

## 🚧 Future Enhancements

- [ ] Real-time WebSocket integration
- [ ] Advanced analytics and reporting
- [ ] Export functionality (PDF, Excel)
- [ ] Multi-language support
- [ ] Voice message support
- [ ] Integration with EHR systems
- [ ] AI-powered symptom analysis
- [ ] Video consultation scheduling

## 📝 License

This project is part of the Kosek Health Bot system.

## 👥 Support

For issues, questions, or contributions, please contact the development team.

---

**Built with ❤️ for better healthcare accessibility**
