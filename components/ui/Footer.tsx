'use client';

export default function Footer() {
  const cols = [
    { heading: 'Company', links: ['About Us', 'Careers', 'Press'] },
    { heading: 'Properties', links: ['Villas', 'Apartments', 'Penthouses'] },
    { heading: 'Services', links: ['Property Management', 'Investments', 'Consulting'] },
    { heading: 'Projects', links: ['Latest Developments', 'Upcoming Sites'] },
    { heading: 'Support', links: ['Help Center', 'Contact Us', 'FAQ'] },
    { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
  ];

  return (
    <footer style={{ background: '#0f172a', color: '#fff', padding: '80px 0 40px', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 30, marginBottom: 60 }}>
          {cols.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontSize: 16, fontWeight: 500, marginBottom: 25, color: '#fff' }}>{col.heading}</h4>
              {col.links.map(link => (
                <a key={link} href="#" style={{ display: 'block', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginBottom: 12, fontSize: 14, transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0ea5e9'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 30, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          <div style={{ display: 'flex', gap: 15 }}>
            {['IN', 'IG', 'X'].map(s => (
              <a key={s} href="#" style={{ color: '#fff', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#0ea5e9'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>{s}</a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Aurora Estates. All rights reserved.</p>
          <p style={{ color: 'rgba(255,255,255,0.3)' }}>Designed for Aurora Estates</p>
        </div>
      </div>
    </footer>
  );
}
