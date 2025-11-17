import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Send, Calendar } from 'lucide-react';
import { mockCampaigns } from '../../data/mockData';
import { Campaign } from '../../types';
import './Campaigns.css';

const Campaigns: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    segment: 'all' as Campaign['segment'],
    scheduledAt: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'badge-info';
      case 'sent':
        return 'badge-success';
      case 'draft':
        return 'badge-warning';
      default:
        return 'badge-secondary';
    }
  };

  const getSegmentLabel = (segment: Campaign['segment']) => {
    const labels = {
      all: 'All Users',
      age40plus: 'Age 40+',
      hypertension: 'Hypertension',
      diabetes: 'Diabetes'
    };
    return labels[segment];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating campaign:', formData);
    setShowCreateForm(false);
    setFormData({
      title: '',
      message: '',
      segment: 'all',
      scheduledAt: ''
    });
  };

  return (
    <div className="campaigns-page">
      <div className="page-header">
        <h1>Campaigns & Broadcast</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowCreateForm(true)}
        >
          <Plus size={18} />
          Create Campaign
        </button>
      </div>

      <div className="campaigns-grid">
        {mockCampaigns.map((campaign) => (
          <div key={campaign.id} className="card campaign-card">
            <div className="campaign-header">
              <h3>{campaign.title}</h3>
              <span className={`badge ${getStatusBadge(campaign.status)}`}>
                {campaign.status}
              </span>
            </div>

            <p className="campaign-message">{campaign.message}</p>

            <div className="campaign-details">
              <div className="campaign-detail-item">
                <span className="detail-label">Segment</span>
                <span className="detail-value">{getSegmentLabel(campaign.segment)}</span>
              </div>
              <div className="campaign-detail-item">
                <span className="detail-label">Recipients</span>
                <span className="detail-value">{campaign.recipientCount?.toLocaleString()}</span>
              </div>
              <div className="campaign-detail-item">
                <span className="detail-label">Scheduled</span>
                <span className="detail-value">
                  {campaign.scheduledAt.toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="campaign-actions">
              {campaign.status === 'draft' && (
                <button className="btn btn-primary">
                  <Send size={16} />
                  Schedule
                </button>
              )}
              <button className="btn btn-secondary">
                <Edit2 size={16} />
                Edit
              </button>
              <button className="icon-btn">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCreateForm && (
        <div className="modal-overlay" onClick={() => setShowCreateForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Campaign</h2>
              <button
                className="icon-btn"
                onClick={() => setShowCreateForm(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Campaign Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Monthly Health Tips"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Target Segment</label>
                  <select
                    value={formData.segment}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      segment: e.target.value as Campaign['segment']
                    })}
                  >
                    <option value="all">All Users</option>
                    <option value="age40plus">Age 40+</option>
                    <option value="hypertension">Hypertension Patients</option>
                    <option value="diabetes">Diabetes Patients</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your campaign message here..."
                    rows={5}
                    required
                  />
                  <div className="form-hint">
                    {formData.message.length} characters
                  </div>
                </div>

                <div className="form-group">
                  <label>Schedule Date & Time</label>
                  <input
                    type="datetime-local"
                    value={formData.scheduledAt}
                    onChange={(e) => setFormData({ ...formData, scheduledAt: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Calendar size={16} />
                  Schedule Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
