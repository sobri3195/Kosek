import React, { useState } from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';
import './TopBar.css';

interface TopBarProps {
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onThemeToggle, isDarkMode = false }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search users, conversations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" onClick={onThemeToggle} title="Toggle theme">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="icon-btn notification-btn" title="Notifications">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
