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
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '32px 48px', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
      boxSizing: 'border-box', transition: 'background 0.3s, border-bottom 0.3s',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(14,165,233,0.2)' : 'none',
      fontFamily: 'Inter, Arial, sans-serif',
    }}>
      <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.5, color: '#fff' }}>AURORA ESTATES</span>

      <div style={{ display: 'flex', gap: 32 }}>
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
        style={{ color: '#fff', fontWeight: 500, textTransform: 'uppercase', textDecoration: 'none', fontSize: 13, letterSpacing: 1 }}
        onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
        onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
        Book Consultation
      </a>
    </nav>
  );
}
