'use client';

const propData = [
  { name: 'The Sapphire Penthouse', location: 'Dubai Marina', beds: '4 Bedrooms', area: '4,500 sqft', price: '$5,200,000', status: 'Ready to Move', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Aurora Signature Villa', location: 'Palm Jumeirah', beds: '6 Bedrooms', area: '12,000 sqft', price: '$18,500,000', status: 'Under Construction', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
  { name: 'Emerald Heights', location: 'Downtown NYC', beds: '3 Bedrooms', area: '2,800 sqft', price: '$3,800,000', status: 'Ready to Move', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
  { name: 'The Obsidian Manor', location: 'Beverly Hills', beds: '7 Bedrooms', area: '15,000 sqft', price: '$22,000,000', status: 'Off-Plan', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80' },
  { name: 'Apex Commercial Hub', location: 'London Financial District', beds: 'Open Plan', area: '30,000 sqft', price: '$45,000,000', status: 'Available', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Coastal Breeze Estate', location: 'Monaco', beds: '5 Bedrooms', area: '8,500 sqft', price: '$14,200,000', status: 'Ready to Move', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80' },
];

export default function FeaturedProperties() {
  return (
    <section id="featured-properties" className="fp-section" style={{ background: '#fff', padding: '80px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .fp-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .fp-wrap { padding: 0 20px !important; }
          .fp-title { font-size: 32px !important; }
          .fp-section { padding: 60px 0 !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .fp-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
      <div className="fp-wrap" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ marginBottom: 60 }}>
          <h2 className="fp-title" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em', color: '#0f172a' }}>Featured Properties</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(15,23,42,0.6)', maxWidth: 600 }}>
            Discover our handpicked collection of luxury apartments, villas, commercial spaces, and investment-ready developments.
          </p>
        </div>
        <div className="fp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {propData.map((p) => (
            <div key={p.name} style={{ border: '1px solid rgba(14,165,233,0.15)', borderRadius: 4, transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}>
              <div style={{ overflow: 'hidden', position: 'relative', paddingTop: '65%' }}>
                <img src={p.img} alt={p.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'}
                  onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = ''} />
              </div>
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 5, color: '#0f172a' }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: 'rgba(15,23,42,0.5)', marginBottom: 20 }}>{p.location}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '15px 0', borderTop: '1px solid rgba(14,165,233,0.15)', borderBottom: '1px solid rgba(14,165,233,0.15)', color: 'rgba(15,23,42,0.6)' }}>
                  <span>{p.beds}</span><span>{p.area}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
                  <span style={{ fontSize: 22, fontWeight: 400, color: '#0f172a' }}>{p.price}</span>
                  <span style={{ fontSize: 12, background: 'rgba(14,165,233,0.1)', color: '#0ea5e9', padding: '4px 10px', borderRadius: 4 }}>{p.status}</span>
                </div>
                <a href="#contact" style={{ display: 'block', padding: '14px 28px', border: '1px solid rgba(14,165,233,0.3)', color: '#0f172a', textDecoration: 'none', fontSize: 13, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, borderRadius: 4, textAlign: 'center', transition: 'all 0.3s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0f172a'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = ''; (e.currentTarget as HTMLAnchorElement).style.color = '#0f172a'; }}>
                  View Property →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
