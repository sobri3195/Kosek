import React from 'react';
import { Users, MessageSquare, Bell, AlertTriangle } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import StatCard from '../common/StatCard';
import { mockStats, mockHealthTopics, mockConversationData } from '../../data/mockData';
import './Overview.css';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

const Overview: React.FC = () => {
  return (
    <div className="overview-page">
      <div className="page-header">
        <h1>Overview</h1>
        <p className="page-subtitle">Welcome to Kosek Health Bot Dashboard</p>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Active Users"
          value={mockStats.totalUsers.toLocaleString()}
          icon={Users}
          color="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Today's Conversations"
          value={mockStats.todayConversations}
          icon={MessageSquare}
          color="info"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Reminders"
          value={mockStats.activeReminders}
          icon={Bell}
          color="success"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Urgent Cases"
          value={mockStats.urgentCases}
          icon={AlertTriangle}
          color="danger"
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      <div className="charts-grid">
        <div className="card chart-card">
          <h3 className="chart-title">Daily Conversations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockConversationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--surface)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="var(--primary-color)" 
                strokeWidth={2}
                dot={{ fill: 'var(--primary-color)' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card chart-card">
          <h3 className="chart-title">Top Health Topics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockHealthTopics}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {mockHealthTopics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--surface)', 
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="recent-activity card">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon success">
              <MessageSquare size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">New conversation from Budi Santoso</div>
              <div className="activity-time">2 minutes ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon warning">
              <AlertTriangle size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">Urgent case requires attention</div>
              <div className="activity-time">15 minutes ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon info">
              <Users size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">5 new users registered</div>
              <div className="activity-time">1 hour ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon success">
              <Bell size={16} />
            </div>
            <div className="activity-content">
              <div className="activity-title">342 medication reminders sent today</div>
              <div className="activity-time">2 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
