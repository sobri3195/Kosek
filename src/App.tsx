import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import Overview from './components/pages/Overview';
import Users from './components/pages/Users';
import Conversations from './components/pages/Conversations';
import Content from './components/pages/Content';
import Campaigns from './components/pages/Campaigns';
import Settings from './components/pages/Settings';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/users" element={<Users />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/content" element={<Content />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
