import React, { useState } from 'react';
import { Send, Filter } from 'lucide-react';
import { mockConversations } from '../../data/mockData';
import { Conversation } from '../../types';
import './Conversations.css';

type FilterType = 'all' | 'waiting' | 'urgent';

const Conversations: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    mockConversations[0]
  );
  const [filter, setFilter] = useState<FilterType>('all');
  const [message, setMessage] = useState('');

  const filteredConversations = mockConversations.filter((conv) => {
    if (filter === 'all') return true;
    return conv.status === filter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'urgent':
        return 'badge-danger';
      case 'waiting':
        return 'badge-warning';
      default:
        return 'badge-success';
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="conversations-page">
      <div className="conversations-container">
        <div className="conversations-sidebar">
          <div className="sidebar-header">
            <h2>Conversations</h2>
            <button className="icon-btn" title="Filter">
              <Filter size={20} />
            </button>
          </div>

          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-tab ${filter === 'waiting' ? 'active' : ''}`}
              onClick={() => setFilter('waiting')}
            >
              Waiting
            </button>
            <button
              className={`filter-tab ${filter === 'urgent' ? 'active' : ''}`}
              onClick={() => setFilter('urgent')}
            >
              Urgent
            </button>
          </div>

          <div className="conversation-list scrollbar">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${
                  selectedConversation?.id === conv.id ? 'active' : ''
                }`}
                onClick={() => setSelectedConversation(conv)}
              >
                <div className="conversation-avatar">
                  {conv.userName.charAt(0)}
                </div>
                <div className="conversation-info">
                  <div className="conversation-header-row">
                    <div className="conversation-name">{conv.userName}</div>
                    <div className="conversation-time">
                      {new Date(conv.timestamp).toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                  <div className="conversation-last-message">
                    {conv.lastMessage}
                  </div>
                  <div className="conversation-footer">
                    <span className={`badge ${getStatusBadge(conv.status)}`}>
                      {conv.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-area">
          {selectedConversation ? (
            <>
              <div className="chat-header">
                <div className="chat-user-info">
                  <div className="chat-avatar">
                    {selectedConversation.userName.charAt(0)}
                  </div>
                  <div>
                    <div className="chat-user-name">
                      {selectedConversation.userName}
                    </div>
                    <div className="chat-user-status">
                      {selectedConversation.assignedTo
                        ? `Assigned to ${selectedConversation.assignedTo}`
                        : 'Active now'}
                    </div>
                  </div>
                </div>
                <span className={`badge ${getStatusBadge(selectedConversation.status)}`}>
                  {selectedConversation.status}
                </span>
              </div>

              <div className="chat-messages scrollbar">
                {selectedConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                  >
                    <div className="message-bubble">
                      <div className="message-content">{msg.content}</div>
                      <div className="message-time">
                        {new Date(msg.timestamp).toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-input-area">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="chat-input"
                />
                <button
                  className="btn btn-primary"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="no-conversation">
              <p>Select a conversation to view messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Conversations;
