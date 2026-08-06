'use client';

export default function WhyChooseUs() {
  const items = ['Luxury Portfolio', 'Trusted Developers', 'Verified Properties', 'Investment Guidance', 'Legal Assistance', 'After Sales Support'];

  return (
    <section id="why-us" style={{ background: '#fff', padding: '120px 0', fontFamily: 'Inter, Arial, sans-serif', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px', marginBottom: 60 }}>
        <h2 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center', marginBottom: 60 }}>Why Aurora Estates</h2>
      </div>
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', overflow: 'hidden', position: 'relative', padding: '20px 0', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div style={{ display: 'flex', gap: 30, width: 'max-content', animation: 'marquee 25s linear infinite' }}>
          {[...items, ...items].map((item, i) => (
            <div key={i} style={{ border: '1px solid rgba(14,165,233,0.15)', padding: '40px 60px', textAlign: 'center', borderRadius: 4, background: 'rgba(255,255,255,0.02)', minWidth: 350, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform 0.3s, border-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#0ea5e9'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(14,165,233,0.15)'; }}>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: '#0f172a' }}>{item}</h3>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-50% - 15px)); } }`}</style>
    </section>
  );
}
