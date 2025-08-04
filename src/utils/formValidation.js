// Enhanced form validation and rate limiting utilities

// Rate limiting storage (client-side)
const RATE_LIMIT_KEY = 'dubient_form_submissions';
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const MAX_SUBMISSIONS = 3; // Max 3 submissions per 5 minutes

export const checkRateLimit = () => {
  if (typeof window === 'undefined') return true;
  
  try {
    const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    const now = Date.now();
    
    // Clean old submissions
    const recentSubmissions = submissions.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );
    
    // Check if rate limit exceeded
    if (recentSubmissions.length >= MAX_SUBMISSIONS) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow submission if check fails
  }
};

export const recordSubmission = () => {
  if (typeof window === 'undefined') return;
  
  try {
    const submissions = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]');
    const now = Date.now();
    
    // Add current submission
    submissions.push(now);
    
    // Clean old submissions and save
    const recentSubmissions = submissions.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW
    );
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch (error) {
    console.error('Failed to record submission:', error);
  }
};

// Enhanced form validation
export const validateForm = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.firstName?.trim()) {
    errors.firstName = 'First name is required';
  } else if (formData.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }
  
  if (!formData.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  } else if (formData.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Phone validation
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Service validation
  if (!formData.service?.trim()) {
    errors.service = 'Please select a service';
  }
  
  // Message validation
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (formData.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }
  
  // Spam detection patterns
  const spamPatterns = [
    /viagra|cialis|pharmacy/i,
    /click here|visit now/i,
    /make money|earn \$|guaranteed/i,
    /free trial|limited time/i,
    /seo services|link building/i
  ];
  
  const fullText = `${formData.firstName} ${formData.lastName} ${formData.email} ${formData.message}`.toLowerCase();
  
  for (const pattern of spamPatterns) {
    if (pattern.test(fullText)) {
      errors.spam = 'Message contains suspicious content';
      break;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Check for suspicious behavior
export const detectSuspiciousBehavior = (formData, timeToFill) => {
  const suspiciousIndicators = [];
  
  // Too fast submission (less than 5 seconds)
  if (timeToFill < 5000) {
    suspiciousIndicators.push('Form filled too quickly');
  }
  
  // Identical first and last name
  if (formData.firstName === formData.lastName) {
    suspiciousIndicators.push('Identical first and last name');
  }
  
  // Email domain issues
  const emailDomain = formData.email?.split('@')[1]?.toLowerCase();
  const suspiciousDomains = ['tempmail.org', '10minutemail.com', 'guerrillamail.com'];
  if (emailDomain && suspiciousDomains.includes(emailDomain)) {
    suspiciousIndicators.push('Temporary email domain');
  }
  
  // Excessive capitalization
  const hasExcessiveCaps = /[A-Z]{5,}/.test(formData.message || '');
  if (hasExcessiveCaps) {
    suspiciousIndicators.push('Excessive capitalization');
  }
  
  return suspiciousIndicators;
};