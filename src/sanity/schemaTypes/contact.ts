// schemas/contact.js
export default {
  name: 'contact',
  title: 'Contact Form Submissions',
  type: 'document',
  fields: [
    { name: 'fullName', title: 'Full Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'subject', title: 'Subject', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
  ],
};
