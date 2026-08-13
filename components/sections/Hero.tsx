'use client';

import { useEffect, useRef, useState } from 'react';

const categories = [
  'Luxury Apartments', 'Villas', 'Commercial', 'Waterfront', 'Sky Residences',
  'Plots', 'Retail Spaces', 'Farmhouses', 'Smart Homes', 'Penthouses',
  'Affordable Luxury', 'Upcoming Projects',
];

const locations = [
  'Dubai', 'Mumbai', 'Gurugram', 'Bangalore', 'Pune', 'Hyderabad',
  'Noida', 'Goa', 'Abu Dhabi', 'Delhi NCR', 'Chennai', 'Ahmedabad',
];

const names = [
  'Aurora Skyline', 'The Palm Court', 'Marina Glass', 'Celeste Business',
  'Emerald Heights', 'The Horizon', 'One Boulevard', 'The Whitefield',
  'Azure Bay', 'Capital Square', 'Lakefront Signature', 'Solaris Smart',
];

const sampleImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=300&q=80',
];

const suffixes = ['Residences', 'Villas', 'Towers', 'Park', 'Estate', 'Homes', 'Complex'];
const statuses = ['Ready to Move', 'Under Construction', 'New Launch', 'Sold Out'];

const properties = Array.from({ length: 300 }, (_, i) => ({
  id: `prop-${i}`,
  title: `${names[i % names.length]} ${suffixes[i % suffixes.length]}`,
  category: categories[i % categories.length],
  location: locations[i % locations.length],
  priceRange: `$${(Math.random() * 5 + 1).toFixed(1)}M – $${(Math.random() * 10 + 6).toFixed(1)}M`,
  image: sampleImages[i % sampleImages.length],
  status: statuses[i % statuses.length],
}));

const TOTAL_PANELS = 36;

export default function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0.0005);
  const targetVelocityRef = useRef(0.0005);
  const isDraggingRef = useRef(false);
  const lastDragXRef = useRef(0);
  const panelEls = useRef<HTMLDivElement[]>([]);

  const [locked, setLocked] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [radiusX, setRadiusX] = useState(580);
  const [radiusY, setRadiusY] = useState(150);

  useEffect(() => {
    const update = () => {
      const isMobile = window.innerWidth < 768;
      setRadiusX(isMobile ? window.innerWidth * 0.45 : 580);
      setRadiusY(isMobile ? window.innerWidth * 0.30 : 150);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Build panels once
  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    orbit.innerHTML = '';
    panelEls.current = [];

    for (let i = 0; i < TOTAL_PANELS; i++) {
      const prop = properties[i % properties.length];
      const panel = document.createElement('div');
      panel.style.cssText = `
        position:absolute; left:50%; top:50%;
        width:86px; height:200px;
        overflow:hidden; border:1px solid rgba(255,255,255,0.18);
        transform-origin:center center; will-change:transform,opacity,filter;
        cursor:pointer;
      `;
      const img = document.createElement('img');
      img.src = prop.image;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;pointer-events:none;';
      panel.appendChild(img);

      panel.addEventListener('mouseenter', () => setHovered(i));
      panel.addEventListener('mouseleave', () => setHovered(null));
      panel.addEventListener('click', (e) => {
        e.stopPropagation();
        setLocked(prev => prev === i ? null : i);
      });

      orbit.appendChild(panel);
      panelEls.current.push(panel);
    }
  }, []);

  // Mouse velocity
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) {
        const norm = (e.clientX / window.innerWidth) * 2 - 1;
        targetVelocityRef.current = 0.0005 + norm * 0.002;
      } else {
        const delta = e.clientX - lastDragXRef.current;
        lastDragXRef.current = e.clientX;
        rotationRef.current += delta * 0.002;
      }
    };
    const onDown = (e: MouseEvent) => { isDraggingRef.current = true; lastDragXRef.current = e.clientX; };
    const onUp = () => { isDraggingRef.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  // Render loop
  useEffect(() => {
    const rx = radiusX;
    const render = () => {
      if (!isDraggingRef.current) {
        velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.05;
        rotationRef.current += velocityRef.current;
      }
      panelEls.current.forEach((el, index) => {
        const angle = (index / TOTAL_PANELS) * Math.PI * 2 + rotationRef.current;
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * radiusY;
        const zDepth = (Math.sin(angle) + 1) / 2;
        const scale = 0.5 + 0.6 * zDepth;
        const opacity = 0.25 + 0.75 * zDepth;
        const blur = (1 - zDepth) * 1.5;
        const rotateY = -Math.cos(angle) * 35;
        const isH = hovered === index;
        const isL = locked === index;
        const finalScale = (isH || isL) ? scale * 1.1 : scale;
        el.style.transform = `translate(-50%,-50%) translate3d(${x}px,${y}px,0) scale(${finalScale}) rotateY(${rotateY}deg)`;
        el.style.opacity = String(isH || isL ? 1 : opacity);
        el.style.filter = isH || isL ? 'brightness(1.1) blur(0px)' : `blur(${blur}px)`;
        el.style.zIndex = String(isL ? TOTAL_PANELS + 10 : Math.round(zDepth * TOTAL_PANELS));
        el.style.boxShadow = isL ? '0 12px 24px rgba(0,0,0,0.8),0 0 10px rgba(255,255,255,0.1)' : '0 8px 18px rgba(0,0,0,0.4)';
        el.style.border = isL ? '1px solid rgba(255,255,255,0.6)' : '1px solid rgba(255,255,255,0.18)';
      });
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radiusX, radiusY, hovered, locked]);

  const activeProp = locked !== null ? properties[locked % properties.length]
    : hovered !== null ? properties[hovered % properties.length]
      : null;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh', background: '#0a0e1a' }}
      onClick={() => setLocked(null)}
    >
      {/* Center copy */}
      {!activeProp && (
        <div className="hero-text-container" style={{
          position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, textAlign: 'center', width: '100%', maxWidth: 720, padding: '0 20px'
        }}>
          <h1 className="hero-title" style={{
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-1px', marginBottom: 20, color: '#fff',
          }}>
            Find Your Next Landmark Property.
          </h1>
          <p className="hero-subtitle" style={{ lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', maxWidth: 620, margin: '0 auto' }}>
            Explore 300+ curated luxury residences, commercial spaces, villas, and investment-ready developments.
          </p>
        </div>
      )}

      {/* Center property info */}
      {activeProp && (
        <div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          zIndex: 20, textAlign: 'center', width: '90%', maxWidth: 500, padding: '24px',
          background: 'rgba(10, 14, 26, 0.7)', backdropFilter: 'blur(10px)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ width: '100%', aspectRatio: '16/9', margin: '0 auto 16px', borderRadius: 8, overflow: 'hidden' }}>
            <img src={activeProp.image} alt={activeProp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, letterSpacing: '-1px', color: '#fff' }}>
            {activeProp.title}
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            {activeProp.location} · {activeProp.category}
          </p>
          {locked !== null && (
            <a href="#featured-properties" style={{
              background: 'transparent', border: '1px solid #0ea5e9', padding: '12px 24px',
              fontSize: 13, textTransform: 'uppercase', fontWeight: 600, color: '#0ea5e9',
              textDecoration: 'none', display: 'inline-block',
            }}>
              View Property +
            </a>
          )}
        </div>
      )}

      {/* Ring */}
      <div style={{
        position: 'absolute', left: '50%', top: '72%', width: '100%', height: 420,
        transform: 'translate(-50%,-50%)', perspective: 1200, zIndex: 10,
      }}>
        <div ref={orbitRef} style={{ position: 'absolute', width: '100%', height: '100%', transformStyle: 'preserve-3d' }} />
      </div>


      <style>{`
        .hero-title { font-size: 76px; }
        .hero-subtitle { font-size: 20px; }
        .hero-bottom-text { font-size: 11px; }
        @media (max-width: 768px) {
          .hero-title { font-size: 40px !important; margin-bottom: 12px !important; }
          .hero-subtitle { font-size: 15px !important; }
          .hero-bottom-text { font-size: 9px !important; letter-spacing: 2px !important; }
          .hero-text-container { top: 15% !important; }
        }
      `}</style>
    </section>
  );
}
