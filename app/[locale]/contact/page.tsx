'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/section-header';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslations } from '@/components/locale-provider';

export default function ContactPage() {
  const t = useTranslations();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const contactLinks = [
    {
      name: t.contact?.email ?? 'Email',
      value: 'businessinery@gmail.com',
      href: 'mailto:businessinery@gmail.com',
      icon: Mail,
    },
    {
      name: t.contact?.linkedin ?? 'LinkedIn',
      value: 'linkedin.com/in/italonery',
      href: 'https://www.linkedin.com/in/italonery/',
      icon: Linkedin,
    },
    {
      name: t.contact?.github ?? 'GitHub',
      value: 'github.com/italonery',
      href: 'https://github.com/italonery',
      icon: Github,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionHeader 
        title={t.contact?.title ?? "Let's Connect"} 
        subtitle={t.contact?.subtitle ?? ''} 
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href?.startsWith?.('http') ? '_blank' : undefined}
              rel={link.href?.startsWith?.('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-lg hover:border-muted-foreground/30 transition-all group"
            >
              <div className="p-3 bg-muted rounded-lg group-hover:bg-blue-500/10 transition-colors">
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{link.name}</p>
                <p className="font-medium group-hover:text-blue-500 transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-6">{t.contact?.formTitle ?? 'Send a Message'}</h3>
          
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <p className="text-lg font-medium">{t.contact?.success ?? 'Message sent successfully!'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact?.name ?? 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target?.value ?? '' })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact?.emailField ?? 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target?.value ?? '' })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact?.message ?? 'Message'}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target?.value ?? '' })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {formState === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {t.contact?.error ?? 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {formState === 'sending' ? (
                  t.contact?.sending ?? 'Sending...'
                ) : (
                  <>
                    {t.contact?.send ?? 'Send Message'}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
