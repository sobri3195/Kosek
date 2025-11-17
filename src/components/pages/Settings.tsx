import React, { useState } from 'react';
import { Save, Link as LinkIcon, Clock, Shield } from 'lucide-react';
import './Settings.css';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    webhookUrl: 'https://api.whatsapp.com/webhook/kosek',
    activeHoursStart: '08:00',
    activeHoursEnd: '20:00',
    autoReplyEnabled: true
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <form onSubmit={handleSave}>
        <div className="settings-sections">
          <div className="card settings-section">
            <div className="section-header">
              <LinkIcon size={20} />
              <h3>WhatsApp Integration</h3>
            </div>

            <div className="form-group">
              <label>Webhook URL</label>
              <input
                type="url"
                value={settings.webhookUrl}
                onChange={(e) => setSettings({ ...settings, webhookUrl: e.target.value })}
                placeholder="https://your-webhook-url.com"
              />
              <p className="form-hint">
                Configure your WhatsApp Business API webhook endpoint
              </p>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={settings.autoReplyEnabled}
                  onChange={(e) => setSettings({ 
                    ...settings, 
                    autoReplyEnabled: e.target.checked 
                  })}
                />
                <span>Enable automatic replies</span>
              </label>
              <p className="form-hint">
                Automatically respond to common health queries
              </p>
            </div>
          </div>

          <div className="card settings-section">
            <div className="section-header">
              <Clock size={20} />
              <h3>Operating Hours</h3>
            </div>

            <p className="section-description">
              Set the active hours for bot operations and staff availability
            </p>

            <div className="time-range-group">
              <div className="form-group">
                <label>Start Time</label>
                <input
                  type="time"
                  value={settings.activeHoursStart}
                  onChange={(e) => setSettings({ 
                    ...settings, 
                    activeHoursStart: e.target.value 
                  })}
                />
              </div>

              <div className="form-group">
                <label>End Time</label>
                <input
                  type="time"
                  value={settings.activeHoursEnd}
                  onChange={(e) => setSettings({ 
                    ...settings, 
                    activeHoursEnd: e.target.value 
                  })}
                />
              </div>
            </div>

            <div className="info-box">
              <p>
                Outside these hours, users will receive an automated message 
                indicating that staff will respond during operating hours.
              </p>
            </div>
          </div>

          <div className="card settings-section">
            <div className="section-header">
              <Shield size={20} />
              <h3>User Roles & Permissions</h3>
            </div>

            <div className="roles-list">
              <div className="role-item">
                <div className="role-info">
                  <div className="role-name">Administrator</div>
                  <div className="role-description">
                    Full access to all features and settings
                  </div>
                </div>
                <span className="badge badge-success">3 users</span>
              </div>

              <div className="role-item">
                <div className="role-info">
                  <div className="role-name">Doctor</div>
                  <div className="role-description">
                    Can view conversations, manage content, and respond to urgent cases
                  </div>
                </div>
                <span className="badge badge-info">8 users</span>
              </div>

              <div className="role-item">
                <div className="role-info">
                  <div className="role-name">Support Staff</div>
                  <div className="role-description">
                    Can view and respond to conversations
                  </div>
                </div>
                <span className="badge badge-info">5 users</span>
              </div>
            </div>

            <button type="button" className="btn btn-secondary">
              Manage User Roles
            </button>
          </div>

          <div className="card settings-section">
            <div className="section-header">
              <h3>Danger Zone</h3>
            </div>

            <div className="danger-actions">
              <div className="danger-action">
                <div>
                  <div className="danger-title">Clear All Conversations</div>
                  <div className="danger-description">
                    This will permanently delete all conversation history
                  </div>
                </div>
                <button type="button" className="btn btn-danger">
                  Clear Data
                </button>
              </div>

              <div className="danger-action">
                <div>
                  <div className="danger-title">Reset System</div>
                  <div className="danger-description">
                    Reset all settings to default values
                  </div>
                </div>
                <button type="button" className="btn btn-danger">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button type="submit" className="btn btn-primary">
            <Save size={18} />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
