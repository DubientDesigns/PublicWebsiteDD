// Spam monitoring and analytics utilities

// Track spam attempts for analytics
export const trackSpamAttempt = (type, details = {}) => {
  if (typeof window === 'undefined') return;
  
  const spamEvent = {
    type, // 'honeypot', 'rate_limit', 'validation', 'suspicious_behavior'
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    ...details
  };
  
  // Store locally for debugging (optional)
  try {
    const spamLog = JSON.parse(localStorage.getItem('spam_attempts') || '[]');
    spamLog.push(spamEvent);
    
    // Keep only last 50 attempts
    if (spamLog.length > 50) {
      spamLog.splice(0, spamLog.length - 50);
    }
    
    localStorage.setItem('spam_attempts', JSON.stringify(spamLog));
  } catch (error) {
    console.error('Failed to log spam attempt:', error);
  }
  
  // Send to analytics (Google Analytics 4 example)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'spam_attempt', {
      event_category: 'security',
      event_label: type,
      custom_parameters: details
    });
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.warn('🛡️ Spam attempt blocked:', spamEvent);
  }
};

// Get spam statistics
export const getSpamStats = () => {
  if (typeof window === 'undefined') return null;
  
  try {
    const spamLog = JSON.parse(localStorage.getItem('spam_attempts') || '[]');
    const last24Hours = Date.now() - (24 * 60 * 60 * 1000);
    
    const recentAttempts = spamLog.filter(
      attempt => new Date(attempt.timestamp).getTime() > last24Hours
    );
    
    const stats = {
      total: spamLog.length,
      last24Hours: recentAttempts.length,
      byType: {}
    };
    
    // Count by type
    recentAttempts.forEach(attempt => {
      stats.byType[attempt.type] = (stats.byType[attempt.type] || 0) + 1;
    });
    
    return stats;
  } catch (error) {
    console.error('Failed to get spam stats:', error);
    return null;
  }
};

// Clear spam logs (for privacy)
export const clearSpamLogs = () => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem('spam_attempts');
    console.log('Spam logs cleared');
  } catch (error) {
    console.error('Failed to clear spam logs:', error);
  }
};

// Email notification utility (for server-side integration)
export const formatSpamAlert = (spamEvent) => {
  return {
    subject: `🛡️ Spam Attempt Blocked - ${spamEvent.type}`,
    body: `
Spam Protection Alert

Type: ${spamEvent.type}
Time: ${spamEvent.timestamp}
URL: ${spamEvent.url}
User Agent: ${spamEvent.userAgent}

Details: ${JSON.stringify(spamEvent, null, 2)}

This is an automated security notification from your website's spam protection system.
    `.trim()
  };
};