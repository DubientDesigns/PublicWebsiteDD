// Email obfuscation utility to protect against bots
// This creates a simple ROT13-like encoding that's easy to decode with JavaScript
// but harder for basic scrapers to detect

export const obfuscateEmail = (email) => {
  // Simple character shifting - shifts each character by 1 in ASCII
  return btoa(email.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 1)
  ).join(''));
};

export const deobfuscateEmail = (obfuscatedEmail) => {
  try {
    // Decode base64 and shift characters back
    return atob(obfuscatedEmail).split('').map(char => 
      String.fromCharCode(char.charCodeAt(0) - 1)
    ).join('');
  } catch (error) {
    console.error('Failed to deobfuscate email:', error);
    return '';
  }
};

// React component for obfuscated email links
export const ObfuscatedEmailLink = ({ 
  obfuscatedEmail, 
  children, 
  className = '', 
  ...props 
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const email = deobfuscateEmail(obfuscatedEmail);
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children || deobfuscateEmail(obfuscatedEmail)}
    </a>
  );
};

// Pre-obfuscated email for contact@dubientdesigns.com
export const OBFUSCATED_CONTACT_EMAIL = obfuscateEmail('contact@dubientdesigns.com');
export const OBFUSCATED_CONTACT_EMAIL_DISPLAY = obfuscateEmail('Contact@DubientDesigns.com');

// Component for displaying obfuscated email text (non-clickable)
export const ObfuscatedEmailText = ({ obfuscatedEmail, className = '' }) => {
  return (
    <span className={className}>
      {deobfuscateEmail(obfuscatedEmail)}
    </span>
  );
};