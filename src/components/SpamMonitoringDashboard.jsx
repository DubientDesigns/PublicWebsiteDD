// Spam Monitoring Dashboard - for development/admin use
import React, { useState, useEffect } from 'react';
import { getSpamStats, clearSpamLogs } from '../utils/spamMonitoring';

const SpamMonitoringDashboard = () => {
  const [stats, setStats] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when specifically enabled
    const showDashboard = process.env.NODE_ENV === 'development' || 
                         localStorage.getItem('show_spam_dashboard') === 'true';
    setIsVisible(showDashboard);
    
    if (showDashboard) {
      const updateStats = () => {
        setStats(getSpamStats());
      };
      
      updateStats();
      const interval = setInterval(updateStats, 30000); // Update every 30 seconds
      
      return () => clearInterval(interval);
    }
  }, []);

  const handleClearLogs = () => {
    if (window.confirm('Are you sure you want to clear spam logs?')) {
      clearSpamLogs();
      setStats(getSpamStats());
    }
  };

  if (!isVisible || !stats) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      border: '1px solid #333',
      fontSize: '12px',
      zIndex: 9999,
      minWidth: '200px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#00ffe8' }}>
        🛡️ Spam Protection Stats
      </h4>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Last 24 Hours:</strong> {stats.last24Hours} attempts
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Total Blocked:</strong> {stats.total}
      </div>
      
      {Object.keys(stats.byType).length > 0 && (
        <div style={{ marginBottom: '10px' }}>
          <strong>By Type:</strong>
          <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
            {Object.entries(stats.byType).map(([type, count]) => (
              <li key={type}>{type}: {count}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button
        onClick={handleClearLogs}
        style={{
          background: '#ef4444',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '11px',
          cursor: 'pointer'
        }}
      >
        Clear Logs
      </button>
      
      <button
        onClick={() => setIsVisible(false)}
        style={{
          background: '#666',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '11px',
          cursor: 'pointer',
          marginLeft: '5px'
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default SpamMonitoringDashboard;