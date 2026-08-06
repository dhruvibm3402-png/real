'use client';

export default function Testimonials() {
  return (
    <section id="latest-projects" style={{ background: '#fff', padding: '120px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <h2 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center', marginBottom: 60 }}>Latest Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30 }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, gridRow: 'span 2', height: 830 }}
            onMouseEnter={e => { const img = (e.currentTarget as HTMLDivElement).querySelector('img') as HTMLImageElement; if(img) img.style.transform='scale(1.05)'; const ov = (e.currentTarget as HTMLDivElement).querySelector('.ov') as HTMLDivElement; if(ov) ov.style.opacity='1'; }}
            onMouseLeave={e => { const img = (e.currentTarget as HTMLDivElement).querySelector('img') as HTMLImageElement; if(img) img.style.transform=''; const ov = (e.currentTarget as HTMLDivElement).querySelector('.ov') as HTMLDivElement; if(ov) ov.style.opacity='0'; }}>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" alt="Zenith Tower" style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s' }} />
            <div className="ov" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', justifyContent:'space-between', padding:40, color:'#fff', opacity:0, transition:'opacity 0.3s' }}>
              <div><h3 style={{ fontSize:28, fontWeight:400 }}>The Zenith Tower</h3><p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', marginTop:10 }}>Downtown Dubai • Residential</p></div>
              <a href="#contact" style={{ display:'inline-block', padding:'14px 28px', border:'1px solid #0f172a', background:'#0f172a', color:'#fff', textDecoration:'none', fontSize:13, fontWeight:500, textTransform:'uppercase', letterSpacing:1, borderRadius:4 }}>Explore Project</a>
            </div>
          </div>
          {[
            { img:'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80', title:'Oasis Villas', sub:'Bali • Luxury Villas' },
            { img:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', title:'Harbor Executive', sub:'New York • Commercial' },
          ].map(p => (
            <div key={p.title} style={{ position:'relative', overflow:'hidden', borderRadius:4, height:400 }}
              onMouseEnter={e => { const img = (e.currentTarget as HTMLDivElement).querySelector('img') as HTMLImageElement; if(img) img.style.transform='scale(1.05)'; const ov = (e.currentTarget as HTMLDivElement).querySelector('.ov') as HTMLDivElement; if(ov) ov.style.opacity='1'; }}
              onMouseLeave={e => { const img = (e.currentTarget as HTMLDivElement).querySelector('img') as HTMLImageElement; if(img) img.style.transform=''; const ov = (e.currentTarget as HTMLDivElement).querySelector('.ov') as HTMLDivElement; if(ov) ov.style.opacity='0'; }}>
              <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s' }} />
              <div className="ov" style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', flexDirection:'column', justifyContent:'space-between', padding:40, color:'#fff', opacity:0, transition:'opacity 0.3s' }}>
                <div><h3 style={{ fontSize:28, fontWeight:400 }}>{p.title}</h3><p style={{ fontSize:14, color:'rgba(255,255,255,0.7)', marginTop:10 }}>{p.sub}</p></div>
                <a href="#contact" style={{ display:'inline-block', padding:'14px 28px', border:'1px solid #0f172a', background:'#0f172a', color:'#fff', textDecoration:'none', fontSize:13, fontWeight:500, textTransform:'uppercase', letterSpacing:1, borderRadius:4 }}>Explore Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
