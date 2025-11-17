import React, { useState } from 'react';
import { X, Phone, Calendar, AlertCircle, Activity } from 'lucide-react';
import { mockUsers } from '../../data/mockData';
import { User } from '../../types';
import './Users.css';

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getStatusBadge = (status: string) => {
    return status === 'active' ? 'badge-success' : 'badge-secondary';
  };

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>User Management</h1>
        <button className="btn btn-primary">Add New User</button>
      </div>

      <div className="users-table-container card">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>WhatsApp Number</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Registered</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-name-cell">
                    <div className="user-avatar-small">
                      {user.name.charAt(0)}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td>{user.whatsappNumber}</td>
                <td>{user.age}</td>
                <td className="capitalize">{user.gender}</td>
                <td>
                  <span className={`badge ${getStatusBadge(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.registeredAt.toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn-link"
                    onClick={() => setSelectedUser(user)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>User Details</h2>
              <button
                className="icon-btn"
                onClick={() => setSelectedUser(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="user-detail-header">
                <div className="user-avatar-large">
                  {selectedUser.name.charAt(0)}
                </div>
                <div>
                  <h3>{selectedUser.name}</h3>
                  <span className={`badge ${getStatusBadge(selectedUser.status)}`}>
                    {selectedUser.status}
                  </span>
                </div>
              </div>

              <div className="user-detail-section">
                <h4>Basic Information</h4>
                <div className="detail-grid">
                  <div className="detail-item">
                    <Phone size={16} />
                    <div>
                      <div className="detail-label">WhatsApp Number</div>
                      <div className="detail-value">{selectedUser.whatsappNumber}</div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Activity size={16} />
                    <div>
                      <div className="detail-label">Age / Gender</div>
                      <div className="detail-value capitalize">
                        {selectedUser.age} years / {selectedUser.gender}
                      </div>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Calendar size={16} />
                    <div>
                      <div className="detail-label">Registered</div>
                      <div className="detail-value">
                        {selectedUser.registeredAt.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedUser.medicalHistory && selectedUser.medicalHistory.length > 0 && (
                <div className="user-detail-section">
                  <h4>Medical History</h4>
                  <div className="tags">
                    {selectedUser.medicalHistory.map((condition, index) => (
                      <span key={index} className="tag tag-warning">
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedUser.allergies && selectedUser.allergies.length > 0 && (
                <div className="user-detail-section">
                  <h4>
                    <AlertCircle size={16} />
                    Allergies
                  </h4>
                  <div className="tags">
                    {selectedUser.allergies.map((allergy, index) => (
                      <span key={index} className="tag tag-danger">
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="user-detail-section">
                <h4>Recent Activity</h4>
                <div className="activity-timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-title">Sent message</div>
                      <div className="timeline-time">2 hours ago</div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-title">Medication reminder acknowledged</div>
                      <div className="timeline-time">1 day ago</div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-title">Profile updated</div>
                      <div className="timeline-time">3 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedUser(null)}>
                Close
              </button>
              <button className="btn btn-primary">Edit User</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
