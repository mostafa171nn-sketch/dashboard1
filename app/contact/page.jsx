'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from '../../components/ContactForm';
import api from '../../lib/api';

export default function Contact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // Extract name and email from form
      const nameParts = formData.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Create new user from contact form
      const newUser = {
        name: formData.name,
        email: formData.email,
        role: 'User', // Default role for new contacts
        status: 'Active',
      };

      // Add user to the API
      await api.addUser(newUser);

      setSuccess(true);
      
      // Navigate to dashboard after short delay
      setTimeout(() => {
        router.push('/');
      }, 2000);

    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error submitting contact form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Contact Us
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Have a question or want to work together? Send us a message!
        </p>
      </div>

      {/* Contact Form */}
      <div className="animate-fade-in stagger-1 opacity-0">
        <ContactForm 
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
          success={success}
        />
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in stagger-2 opacity-0">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700/50">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Email</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">support@admin.com</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700/50">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Location</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">New York, NY 10001</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700/50">
          <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-800 dark:text-white mb-1">Hours</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>
    </div>
  );
}

