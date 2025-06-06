# Contact Form Setup Instructions

## Current Status
The contact form has been updated to use Formspree for backend processing. The form is now ready for activation.

## Setup Steps

### 1. Create Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account (allows 50 submissions/month)
3. Or choose Formspree Pro ($10/month) for unlimited submissions

### 2. Create Your Form
1. Once logged in, click "New Form"
2. Name your form "Lapis Legal Contact Form"
3. You'll receive a unique form endpoint like: `https://formspree.io/f/YOUR_FORM_ID`

### 3. Update the Contact Form
1. Open `_includes/components/sections/contact/contact-form.html`
2. Replace `YOUR_FORM_ID` with your actual Formspree form ID
3. The line should look like: `action="https://formspree.io/f/xyzabcde"`

### 4. Configure Form Settings in Formspree
1. In your Formspree dashboard, configure:
   - Email notifications to your desired email address
   - Custom email subject line (e.g., "New Contact from Lapis Legal Website")
   - Enable reCAPTCHA for additional spam protection (optional)
   - Add team members who should receive notifications

### 5. Test the Form
1. Submit a test message through your contact form
2. Verify you receive the email notification
3. Check that the redirect to /thank-you/ works correctly

## Current Form Features

### Implemented:
- ✅ Bootstrap form validation
- ✅ Honeypot field for spam protection (`_gotcha`)
- ✅ Thank you page redirect after submission
- ✅ All required fields marked and validated
- ✅ Department selection dropdown
- ✅ Responsive layout

### Form Fields:
- First Name (required)
- Last Name (required)
- Email (required, validated)
- Department (dropdown: Sales, Demo, Support, Partnership)
- Message (required, textarea)

## Optional Enhancements

### 1. Add reCAPTCHA
If you need additional spam protection:
```html
<!-- Add before the submit button -->
<div data-formspree-recaptcha="true"></div>
```

### 2. Custom Success Message
Instead of redirecting, show an inline success message:
```html
<input type="hidden" name="_next" value="{{ site.url }}/contact/?success=true" />
```

### 3. AJAX Submission
For a smoother experience without page reload, add JavaScript:
```javascript
// Add to your site's JS file
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Show success message
      form.reset();
      alert('Thank you! We\'ll be in touch soon.');
    } else {
      alert('Oops! There was a problem submitting your form');
    }
  } catch (error) {
    alert('Oops! There was a problem submitting your form');
  }
});
```

## Troubleshooting

### Form not submitting?
- Check that you've replaced `YOUR_FORM_ID` with your actual Formspree ID
- Ensure JavaScript is enabled in the browser
- Check browser console for errors

### Not receiving emails?
- Check spam folder
- Verify email address in Formspree settings
- Ensure form submission limit hasn't been reached (free tier: 50/month)

### Spam issues?
- Enable reCAPTCHA in Formspree settings
- The honeypot field should catch most bots
- Consider upgrading to Formspree Pro for advanced spam filtering

## Alternative Services

If you prefer not to use Formspree:

1. **Netlify Forms** (if hosting on Netlify)
   - Add `netlify` attribute to form tag
   - No external service needed

2. **FormSubmit**
   - Similar to Formspree, replace action with: `https://formsubmit.co/your@email.com`

3. **Custom Backend**
   - Create your own form handler using AWS Lambda, Vercel Functions, etc.

---
*Last updated: January 6, 2025*