# 🛡️ Google reCAPTCHA v2 Setup Guide

This guide will help you activate Google reCAPTCHA v2 protection for your contact form.

## 📋 Prerequisites

- Google account
- Access to your website's code
- 5 minutes of setup time

## 🚀 Step-by-Step Setup

### Step 1: Get reCAPTCHA Keys

1. **Visit Google reCAPTCHA Admin Console**
   - Go to: https://www.google.com/recaptcha/admin
   - Sign in with your Google account

2. **Create a New Site**
   - Click the **"+"** button to add a new site
   - Fill in the details:
     - **Label**: `Dubient Designs Contact Form`
     - **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
     - **Domains**: Add both:
       - `dubientdesigns.com`
       - `localhost` (for testing)
     - **Owners**: Your email address
   - Accept the reCAPTCHA Terms of Service
   - Click **"Submit"**

3. **Copy Your Keys**
   - **Site Key**: Copy this (starts with 6L...)
   - **Secret Key**: Copy this (starts with 6L...)

### Step 2: Activate reCAPTCHA in Your Code

1. **Open the Contact Form File**
   - File: `src/components/ContactSection.jsx`
   - Find line 158: `sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"`

2. **Replace the Site Key**
   ```jsx
   // Change this line:
   sitekey="YOUR_RECAPTCHA_SITE_KEY_HERE"
   
   // To this (with your actual site key):
   sitekey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```

3. **Uncomment the reCAPTCHA Component**
   - Find lines 155-162 (the commented reCAPTCHA section)
   - Remove the `{/* */}` comment wrapper:
   
   ```jsx
   {/* REMOVE THESE COMMENT MARKERS */}
   {/* <div className="recaptcha-container" style={{ marginBottom: '1rem' }}>
     <ReCAPTCHA
       ref={recaptchaRef}
       sitekey="YOUR_SITE_KEY_HERE"
       onChange={handleRecaptchaChange}
       theme="dark"
     />
   </div> */}
   {/* REMOVE THESE COMMENT MARKERS */}
   ```

4. **Uncomment the Validation Code**
   - Find lines 98-102 (the commented validation)
   - Remove the `//` comment markers:
   
   ```jsx
   // REMOVE THESE // MARKERS
   // if (!recaptchaToken) {
   //   setFormErrors({ general: 'Please complete the reCAPTCHA verification' });
   //   setIsSubmitting(false);
   //   return false;
   // }
   ```

### Step 3: Configure Formspree (Your Form Handler)

1. **Log into Formspree**
   - Go to: https://formspree.io/
   - Sign in to your account
   - Find your form: `xrbkwgyo`

2. **Add reCAPTCHA Secret Key**
   - Go to your form settings
   - Find the "Spam Protection" section
   - Add your **Secret Key** (the second key from Google)
   - Enable reCAPTCHA validation

### Step 4: Test Your Setup

1. **Deploy Your Changes**
   ```bash
   git add .
   git commit -m "Activate Google reCAPTCHA v2 protection"
   git push origin main
   ```

2. **Test the Form**
   - Visit your contact form
   - You should see the "I'm not a robot" checkbox
   - Try submitting without checking it (should be blocked)
   - Try submitting with it checked (should work)

## 🔧 Customization Options

### Theme Options
```jsx
<ReCAPTCHA
  theme="dark"    // or "light"
  size="normal"   // or "compact"
/>
```

### Error Messages
You can customize the error message in the code:
```jsx
setFormErrors({ general: 'Please verify you are not a robot' });
```

## 🚨 Troubleshooting

### reCAPTCHA Not Loading
- ✅ Check that your site key is correct
- ✅ Verify your domain is added to reCAPTCHA admin panel
- ✅ Check browser console for errors
- ✅ Disable ad blockers for testing

### Form Still Accepts Submissions Without reCAPTCHA
- ✅ Make sure validation code is uncommented
- ✅ Check that `recaptchaToken` state is being set
- ✅ Verify Formspree has the secret key configured

### "Invalid Site Key" Error
- ✅ Double-check you copied the Site Key (not Secret Key)
- ✅ Ensure no extra spaces in the key
- ✅ Verify domain matches exactly (no www vs www)

## 📊 Monitoring reCAPTCHA

### Google reCAPTCHA Admin Panel
- View submission statistics
- Monitor bot detection rates
- Adjust security levels
- Download detailed reports

### Your Website Analytics
- reCAPTCHA events are tracked in your spam monitoring
- Check browser console in development mode
- Monitor form submission success rates

## 🔒 Security Best Practices

1. **Keep Secret Key Private**
   - Never commit secret keys to your code repository
   - Use environment variables for secret keys
   - Only share with authorized team members

2. **Monitor Regularly**
   - Check reCAPTCHA admin panel weekly
   - Review spam attempt logs
   - Adjust security settings as needed

3. **Update Dependencies**
   - Keep `react-google-recaptcha` package updated
   - Monitor for security updates

## 🆘 Need Help?

If you encounter issues:

1. **Check the browser console** for error messages
2. **Verify all steps** were completed correctly
3. **Test on different browsers** and devices
4. **Contact support** if problems persist

---

**Once activated, your reCAPTCHA protection will be live and blocking bot submissions immediately!** 🛡️