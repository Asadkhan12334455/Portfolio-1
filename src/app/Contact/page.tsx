'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    // Validate form fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setStatusMessage('All fields are required.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api', { // Make sure the API endpoint is correct
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); // Clear form
      } else {
        setStatusMessage(result.error || 'Something went wrong, please try again.');
      }
    } catch (error) {
      setStatusMessage('Failed to send message, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const button = document.getElementById('contact-button');
      if (button) {
        button.classList.add('animate-bounce');
        setTimeout(() => button.classList.remove('animate-bounce'), 1000);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="bg-black text-white py-28 px-5">
      <h2 className="text-4xl font-bold text-center mb-8 animate-pulse text-red-500">
        Contact <span className="text-white">Me</span>
      </h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-4 text-lg bg-gray-900 border-2 border-red-500 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 text-lg bg-gray-900 border-2 border-red-500 rounded-lg"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 text-lg bg-gray-900 border-2 border-red-500 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 text-lg bg-gray-900 border-2 border-red-500 rounded-lg"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 text-lg bg-gray-900 border-2 border-red-500 rounded-lg mt-4 resize-none"
          rows={5}
        ></textarea>

        <button
          id="contact-button"
          type="submit"
          className="mt-6 px-6 py-3 text-lg font-semibold bg-red-500 hover:bg-red-600 rounded-lg transition-transform transform hover:scale-110"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center">
          <p
            className={`text-lg font-semibold ${
              statusMessage.includes('success') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {statusMessage}
          </p>
        </div>
      )}

      <p className="mt-10 text-center text-xl font-semibold text-gray-300">
        Let's build something amazing together! 🚀 Drop me a message now!
      </p>
    </section>
  );
}