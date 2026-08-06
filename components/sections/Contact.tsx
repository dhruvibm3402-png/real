'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" style={{ background: '#fff', padding: '120px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <h2 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em', color: '#0f172a' }}>Let&apos;s Find Your Dream Property</h2>
            <div style={{ marginBottom: 30 }}>
              {[
                { label: 'Phone', value: '+1 (800) 123-4567' },
                { label: 'Email', value: 'contact@auroraestates.com' },
                { label: 'Office Address', value: '100 Luxury Blvd, Suite 500, Metropolis' },
                { label: 'Business Hours', value: 'Mon - Fri, 9:00 AM - 6:00 PM' },
              ].map(d => (
                <p key={d.label} style={{ marginBottom: 15, fontSize: 15, color: 'rgba(15,23,42,0.7)' }}>
                  <strong style={{ color: '#0f172a', fontWeight: 500 }}>{d.label}:</strong> {d.value}
                </p>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 20, marginBottom: 40 }}>
              {['LinkedIn', 'Instagram', 'Twitter'].map(s => (
                <a key={s} href="#" style={{ color: '#0f172a', textDecoration: 'none', fontSize: 14, textTransform: 'uppercase', fontWeight: 500 }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0ea5e9'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0f172a'}>{s}</a>
              ))}
            </div>
            <div style={{ height: 350, width: '100%', borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185492346468!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1704472800000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0, borderRadius: 4 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <div>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', gap: 16 }}>
                <div style={{ fontSize: 48 }}>✓</div>
                <h3 style={{ fontSize: 28, fontWeight: 400, color: '#0f172a' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(15,23,42,0.6)', fontSize: 15 }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { placeholder: 'Name', type: 'text', required: true },
                  { placeholder: 'Email', type: 'email', required: true },
                  { placeholder: 'Phone', type: 'tel', required: true },
                ].map(f => (
                  <input key={f.placeholder} type={f.type} placeholder={f.placeholder} required={f.required}
                    style={{ width: '100%', padding: 16, border: '1px solid rgba(14,165,233,0.15)', background: 'transparent', fontFamily: 'inherit', fontSize: 15, outline: 'none', borderRadius: 4, transition: 'border-color 0.3s', color: '#0f172a' }}
                    onFocus={e => (e.currentTarget as HTMLInputElement).style.borderColor = '#0ea5e9'}
                    onBlur={e => (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(14,165,233,0.15)'} />
                ))}
                <select required style={{ width: '100%', padding: 16, border: '1px solid rgba(14,165,233,0.15)', background: 'transparent', fontFamily: 'inherit', fontSize: 15, outline: 'none', borderRadius: 4, color: '#0f172a' }}>
                  <option value="" disabled>Property Type</option>
                  <option>Residential</option><option>Commercial</option><option>Investment</option>
                </select>
                <select required style={{ width: '100%', padding: 16, border: '1px solid rgba(14,165,233,0.15)', background: 'transparent', fontFamily: 'inherit', fontSize: 15, outline: 'none', borderRadius: 4, color: '#0f172a' }}>
                  <option value="" disabled>Budget</option>
                  <option>$1M - $5M</option><option>$5M - $10M</option><option>$10M+</option>
                </select>
                <textarea placeholder="Message" rows={5} required
                  style={{ width: '100%', padding: 16, border: '1px solid rgba(14,165,233,0.15)', background: 'transparent', fontFamily: 'inherit', fontSize: 15, outline: 'none', borderRadius: 4, resize: 'none', color: '#0f172a' }}
                  onFocus={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = '#0ea5e9'}
                  onBlur={e => (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(14,165,233,0.15)'} />
                <button type="submit" style={{ padding: '14px 28px', border: '1px solid #0f172a', background: '#0f172a', color: '#fff', fontFamily: 'inherit', fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, borderRadius: 4, cursor: 'pointer', transition: 'background 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#1e293b'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#0f172a'}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
