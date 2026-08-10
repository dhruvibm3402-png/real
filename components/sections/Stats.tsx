'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        const update = () => {
          current += increment;
          if (current < target) { setCount(Math.ceil(current)); requestAnimationFrame(update); }
          else setCount(target);
        };
        requestAnimationFrame(update);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <h3 ref={ref} style={{ fontSize: 40, fontWeight: 300, color: '#0ea5e9', marginBottom: 5 }}>{count}+</h3>;
}

export default function Stats() {
  return (
    <section id="about" style={{ background: '#fff', padding: '80px 0', fontFamily: 'Inter, Arial, sans-serif' }}>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-wrap { padding: 0 20px !important; }
          .stats-title { font-size: 32px !important; }
          .stats-section { padding: 60px 0 !important; }
        }
      `}</style>
      <div className="stats-wrap" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 48px' }}>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ overflow: 'hidden', borderRadius: 4 }}>
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="About Aurora" style={{ width: '100%', maxHeight: 600, objectFit: 'cover', borderRadius: 4 }} />
          </div>
          <div>
            <h2 className="stats-title" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em', color: '#0f172a' }}>Who We Are</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(15,23,42,0.6)' }}>
              Aurora Estates is a premium real estate company specializing in luxury residential, commercial, and investment properties. We combine architectural excellence, market expertise, and personalized service to help clients find exceptional real estate opportunities.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 40, borderTop: '1px solid rgba(14,165,233,0.15)', paddingTop: 40 }}>
              {[{ target: 300, label: 'Properties' }, { target: 25, label: 'Cities' }, { target: 15, label: 'Years' }, { target: 500, label: 'Happy Clients' }].map(s => (
                <div key={s.label}>
                  <Counter target={s.target} />
                  <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(15,23,42,0.5)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
