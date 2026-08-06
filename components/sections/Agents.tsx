'use client';

export default function Agents() {
  return (
    <section id="investment" style={{ background: '#e0f2fe', padding: '120px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em', color: '#0f172a' }}>Investment Opportunities</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(15,23,42,0.7)' }}>
              Unlock exclusive access to high-yield real estate markets globally. Our investment properties are meticulously vetted to guarantee maximum ROI and capital appreciation. Join a legacy of successful portfolio expansions with Aurora Estates.
            </p>
            <a href="#contact" style={{ display: 'inline-block', marginTop: 30, padding: '14px 28px', border: '1px solid #0ea5e9', background: '#0ea5e9', color: '#fff', textDecoration: 'none', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, borderRadius: 4, transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#0284c7'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#0ea5e9'}>
              View Investments
            </a>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Investment" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: 4 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
