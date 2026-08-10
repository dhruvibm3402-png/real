'use client';

const services = [
  {
    title: 'Luxury Property Sales',
    desc: 'Curated residential penthouses and villas in the world\'s most prestigious addresses.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><rect x="6" y="20" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M2 22L24 4L46 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="18" y="30" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="2"/><circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Commercial Properties',
    desc: 'Premium Grade-A office towers, retail flagships, and mixed-use developments.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><rect x="4" y="10" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M4 18H44" stroke="currentColor" strokeWidth="2"/><rect x="10" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="21" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="32" y="24" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M16 10V6M32 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Property Investment',
    desc: 'Vetted high-yield portfolios with transparent ROI projections and capital appreciation.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><polyline points="4,36 16,22 24,28 36,14 44,20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="34,14 44,14 44,24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="22" r="3" fill="currentColor"/><circle cx="24" cy="28" r="3" fill="currentColor"/><circle cx="36" cy="14" r="3" fill="currentColor"/></svg>,
  },
  {
    title: 'NRI Services',
    desc: 'Fully remote end-to-end assistance — from property discovery to legal documentation.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/><ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="2"/><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2"/><line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Property Management',
    desc: 'Comprehensive estate care — maintenance, tenant relations, and financial reporting.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="2"/><path d="M28 28L42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M16 20H24M20 16V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="6" y="36" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Consultation',
    desc: 'Data-driven market analysis, portfolio strategy, and bespoke advisory sessions.',
    icon: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}><path d="M8 8H40C41.1 8 42 8.9 42 10V32C42 33.1 41.1 34 40 34H14L6 42V10C6 8.9 6.9 8 8 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><line x1="14" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="14" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
];

export default function Amenities() {
  return (
    <section id="services" style={{ background: '#080c14', padding: '80px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .am-grid { grid-template-columns: 1fr !important; }
          .am-wrap { padding: 0 20px !important; }
          .am-title { font-size: 32px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .am-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div className="am-wrap" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 className="am-title" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em', color: '#f0f4ff' }}>Our Services</h2>
        </div>
        <div className="am-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden' }}>
          {services.map((s) => (
            <div key={s.title} style={{ position: 'relative', background: '#0d1220', padding: '44px 40px 40px', display: 'flex', flexDirection: 'column', gap: 0, overflow: 'hidden', transition: 'background 0.35s' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#111827'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#0d1220'}>
              <div style={{ width: 48, height: 48, marginBottom: 28, color: '#0ea5e9', flexShrink: 0 }}>{s.icon}</div>
              <div style={{ flex: 1, marginBottom: 32 }}>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: '#f0f4ff', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.45)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(14,165,233,0.7)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#38bdf8'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(14,165,233,0.7)'}>
                Explore
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
