'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'Properties', href: '#featured-properties' },
  { label: 'Projects', href: '#latest-projects' },
  { label: 'Investment', href: '#investment' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 24px', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        boxSizing: 'border-box', transition: 'background 0.3s, border-bottom 0.3s',
        background: scrolled || mobileOpen ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(14,165,233,0.2)' : 'none',
        fontFamily: 'Inter, Arial, sans-serif',
      }}>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.5, color: '#fff' }}>AURORA ESTATES</span>

        {/* Desktop links */}
        <div className="mobile-hide" style={{ display: 'flex', gap: 32 }}>
          {links.map(l => (
            <button key={l.label} onClick={() => handleNav(l.href)}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', padding: 0, position: 'relative', paddingBottom: 2 }}
              onMouseEnter={e => { const span = (e.currentTarget as HTMLButtonElement).querySelector('span') as HTMLSpanElement; if(span) span.style.width='100%'; }}
              onMouseLeave={e => { const span = (e.currentTarget as HTMLButtonElement).querySelector('span') as HTMLSpanElement; if(span) span.style.width='0%'; }}>
              {l.label}
              <span style={{ position:'absolute', bottom:0, left:0, width:'0%', height:1, background:'#0ea5e9', transition:'width 0.3s ease' }} />
            </button>
          ))}
        </div>

        <a href="#contact" onClick={e => { e.preventDefault(); handleNav('#contact'); }}
          className="mobile-hide"
          style={{ color: '#fff', fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none', fontSize: 13, letterSpacing: 1 }}>
          Book Consultation
        </a>

        {/* Hamburger */}
        <button
          className="mobile-show"
          onClick={() => setMobileOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexDirection: 'column', gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 24, height: 2, background: '#fff', borderRadius: 2,
              transition: 'transform 0.3s, opacity 0.3s',
              transform: mobileOpen
                ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)'
                : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 62, left: 0, width: '100%', zIndex: 49,
          background: 'rgba(10,10,10,0.97)', padding: '20px 24px 30px',
          display: 'flex', flexDirection: 'column', gap: 0,
          fontFamily: 'Inter, Arial, sans-serif',
          borderBottom: '1px solid rgba(14,165,233,0.2)',
        }}>
          {links.map(l => (
            <button key={l.label} onClick={() => handleNav(l.href)}
              style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.07)', color: '#fff', fontSize: 16, cursor: 'pointer', fontFamily: 'inherit', padding: '16px 0', textAlign: 'left' }}>
              {l.label}
            </button>
          ))}
          <a href="#contact" onClick={e => { e.preventDefault(); handleNav('#contact'); }}
            style={{ marginTop: 20, padding: '14px 0', textAlign: 'center', border: '1px solid #0ea5e9', color: '#0ea5e9', textDecoration: 'none', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
            Book Consultation
          </a>
        </div>
      )}
    </>
  );
}
