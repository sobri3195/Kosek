import React, { useState } from 'react';
import { Plus, Edit2, Trash2, MessageSquare, FileText } from 'lucide-react';
import { mockFAQs, mockTemplates } from '../../data/mockData';
import './Content.css';

type TabType = 'faq' | 'templates' | 'flows';

const Content: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('faq');

  return (
    <div className="content-page">
      <div className="page-header">
        <h1>Content & Flows Management</h1>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add New
        </button>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          <MessageSquare size={18} />
          FAQ
        </button>
        <button
          className={`tab ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          <FileText size={18} />
          Templates
        </button>
        <button
          className={`tab ${activeTab === 'flows' ? 'active' : ''}`}
          onClick={() => setActiveTab('flows')}
        >
          <FileText size={18} />
          Chat Flows
        </button>
      </div>

      {activeTab === 'faq' && (
        <div className="content-section">
          <div className="faq-list">
            {mockFAQs.map((faq) => (
              <div key={faq.id} className="card faq-item">
                <div className="faq-header">
                  <div>
                    <span className="badge badge-info">{faq.category}</span>
                    <h3 className="faq-question">{faq.question}</h3>
                  </div>
                  <div className="faq-actions">
                    <button className="icon-btn" title="Edit">
                      <Edit2 size={18} />
                    </button>
                    <button className="icon-btn" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="faq-answer">{faq.answer}</p>
                <div className="faq-footer">
                  <span className="text-muted">
                    Last updated: {faq.updatedAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'templates' && (
        <div className="content-section">
          <div className="template-grid">
            {mockTemplates.map((template) => (
              <div key={template.id} className="card template-item">
                <div className="template-header">
                  <h3>{template.name}</h3>
                  <span className={`badge badge-${
                    template.type === 'reminder' ? 'info' :
                    template.type === 'education' ? 'success' : 'warning'
                  }`}>
                    {template.type}
                  </span>
                </div>
                <div className="template-content">
                  {template.content}
                </div>
                <div className="template-footer">
                  <span className="text-muted">
                    {template.updatedAt.toLocaleDateString()}
                  </span>
                  <div className="template-actions">
                    <button className="btn btn-secondary">
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button className="icon-btn">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'flows' && (
        <div className="content-section">
          <div className="flows-container card">
            <h3>Chat Flow Builder</h3>
            <p className="text-muted">
              Design conversation flows for your health bot
            </p>
            
            <div className="flow-list">
              <div className="flow-item">
                <div className="flow-info">
                  <div className="flow-name">Initial Greeting Flow</div>
                  <div className="flow-description">
                    Welcome message and main menu options
                  </div>
                </div>
                <div className="flow-actions">
                  <button className="btn btn-secondary">
                    <Edit2 size={16} />
                    Edit Flow
                  </button>
                </div>
              </div>

              <div className="flow-item">
                <div className="flow-info">
                  <div className="flow-name">Symptom Checker Flow</div>
                  <div className="flow-description">
                    Guided questionnaire for symptom assessment
                  </div>
                </div>
                <div className="flow-actions">
                  <button className="btn btn-secondary">
                    <Edit2 size={16} />
                    Edit Flow
                  </button>
                </div>
              </div>

              <div className="flow-item">
                <div className="flow-info">
                  <div className="flow-name">Medication Query Flow</div>
                  <div className="flow-description">
                    Help users with medication-related questions
                  </div>
                </div>
                <div className="flow-actions">
                  <button className="btn btn-secondary">
                    <Edit2 size={16} />
                    Edit Flow
                  </button>
                </div>
              </div>
            </div>

            <div className="flow-diagram">
              <div className="diagram-placeholder">
                <FileText size={48} />
                <p>Select a flow to view and edit the conversation diagram</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
