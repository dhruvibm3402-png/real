'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, CameraControls, Html, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const categories = ['Luxury Apartments', 'Villas', 'Commercial', 'Waterfront', 'Sky Residences', 'Plots', 'Retail Spaces', 'Farmhouses', 'Smart Homes', 'Penthouses', 'Affordable Luxury', 'Upcoming Projects'];
const locations = ['Dubai', 'Mumbai', 'Gurugram', 'Bangalore', 'Pune', 'Hyderabad', 'Noida', 'Goa', 'Abu Dhabi', 'Delhi NCR', 'Chennai', 'Ahmedabad'];
const names = ['Aurora Skyline', 'The Palm Court', 'Marina Glass', 'Celeste Business', 'Emerald Heights', 'The Horizon', 'One Boulevard', 'The Whitefield', 'Azure Bay', 'Capital Square', 'Lakefront Signature', 'Solaris Smart'];
const sampleImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&q=80',
];
const suffixes = ['Residences', 'Villas', 'Towers', 'Park', 'Estate', 'Homes', 'Complex'];

const properties = Array.from({ length: 300 }, (_, i) => ({
  id: `prop-${i}`,
  title: `${names[i % names.length]} ${suffixes[i % suffixes.length]}`,
  location: locations[i % locations.length],
  priceRange: `$${(Math.random() * 5 + 1).toFixed(1)}M – $${(Math.random() * 10 + 6).toFixed(1)}M`,
  image: sampleImages[i % sampleImages.length],
  bedrooms: `${Math.floor(Math.random() * 4) + 3} Beds`,
  size: `${Math.floor(Math.random() * 5000) + 2000} sqft`
}));

// Add a font import link for Cormorant Garamond dynamically
function FontInjector() {
  useEffect(() => {
    if (!document.getElementById('cormorant-font')) {
      const link = document.createElement('link');
      link.id = 'cormorant-font';
      link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);
  return null;
}

type View = 'DEFAULT' | 'KITCHEN' | 'LIVING' | 'BATHROOM' | 'BEDROOM';
const CAMERA_POSITIONS: Record<View, [number, number, number]> = {
  DEFAULT: [20, 10, 25],
  KITCHEN: [5, 2, 0],
  LIVING: [-5, 2, 5],
  BATHROOM: [5, 2, 10],
  BEDROOM: [-10, 3, -5]
};

function VillaModel() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[40, 1, 40]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      <mesh position={[0, 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[25, 8, 20]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} opacity={0.9} transparent />
      </mesh>
      <mesh position={[-12.5, 4, 10]} castShadow receiveShadow>
        <boxGeometry args={[1, 8, 20]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
      </mesh>
      <mesh position={[0, 8.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[26, 1, 22]} />
        <meshStandardMaterial color="#c9a84c" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}

function FloatingDetails() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Html position={[10, 5, 10]} center className="pointer-events-none">
        <div className="bg-black/40 backdrop-blur-md border border-[#c9a84c]/30 p-4 text-white w-48 opacity-80 rounded-sm">
          <p className="text-[#c9a84c] text-[9px] tracking-[0.2em] uppercase mb-1">Architecture</p>
          <p className="text-lg font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Modern Organic</p>
        </div>
      </Html>
    </Float>
  );
}

function Scene({ view, setView, isLocked }: { view: View, setView: (v: View) => void, isLocked: boolean }) {
  const controls = useRef<any>(null);

  useEffect(() => {
    if (controls.current) {
      let finalPos = [...CAMERA_POSITIONS[view]];
      if (isLocked && view === 'DEFAULT') {
        finalPos[2] -= 8;
        finalPos[1] -= 2;
      }
      gsap.to(controls.current.camera.position, {
        x: finalPos[0], y: finalPos[1], z: finalPos[2],
        duration: 1.5, ease: 'power3.inOut'
      });
      gsap.to(controls.current.target, {
        x: 0, y: 3, z: 0,
        duration: 1.5, ease: 'power3.inOut'
      });
    }
  }, [view, isLocked]);

  return (
    <>
      <CameraControls ref={controls} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 20, 5]} intensity={1.5} color="#c9a84c" castShadow />
      <VillaModel />
      {!isLocked && <FloatingDetails />}
      <ContactShadows resolution={1024} scale={50} blur={2} opacity={0.5} far={10} color="#000" />
    </>
  );
}

const TOTAL_PANELS = 150;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
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
  const [radiusX, setRadiusX] = useState(680);
  const [view, setView] = useState<View>('DEFAULT');
  const radiusY = 180;

  useEffect(() => {
    setMounted(true);
    const update = () => setRadiusX(window.innerWidth < 768 ? 360 : 680);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const tl = gsap.timeline();
    tl.to('.canvas-anim', { opacity: 1, duration: 1.5, ease: 'power2.out' })
      .to('.hero-text-anim', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }, '-=0.5')
      .to('.ring-anim', { opacity: 1, duration: 2, ease: 'power2.inOut' }, '-=0.5');
  }, [mounted]);

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
        width:42px; height:112px;
        overflow:hidden; border:1px solid rgba(255,255,255,0.18);
        transform-origin:center center; will-change:transform,opacity,filter;
        cursor:pointer; background:#000;
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
        const isL = locked === index;
        const isH = hovered === index;
        const finalScale = (isH || isL) ? scale * 1.1 : scale;
        el.style.transform = `translate(-50%,-50%) translate3d(${x}px,${y}px,0) scale(${finalScale}) rotateY(${rotateY}deg)`;
        el.style.opacity = String(isH || isL ? 1 : opacity);
        el.style.filter = isH || isL ? 'brightness(1.1) blur(0px)' : `blur(${blur}px)`;
        el.style.zIndex = String(isL ? TOTAL_PANELS + 10 : Math.round(zDepth * TOTAL_PANELS));
        el.style.boxShadow = isL ? '0 12px 24px rgba(0,0,0,0.8),0 0 10px rgba(255,255,255,0.1)' : '0 8px 18px rgba(0,0,0,0.4)';
        el.style.border = isL ? '1px solid #c9a84c' : '1px solid rgba(255,255,255,0.18)';
      });
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radiusX, hovered, locked]);

  const activeProp = locked !== null ? properties[locked % properties.length]
    : hovered !== null ? properties[hovered % properties.length] : null;

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden bg-[#050505]" style={{ height: '100svh' }} onClick={() => setLocked(null)}>
      <FontInjector />

      {mounted && (
        <div className="canvas-anim absolute inset-0 z-0 opacity-0 overflow-hidden" onPointerDown={(e) => { if (e.target === e.currentTarget) setView('DEFAULT'); }}>
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene view={view} setView={setView} isLocked={locked !== null} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Main UI Overlay */}
      <div style={{
        position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)',
        zIndex: 20, textAlign: 'center', width: '100%', maxWidth: 720,
        opacity: activeProp ? 0 : 1, transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      }} className="flex flex-col items-center pointer-events-none">
        <div className="relative">
          <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none" />
          <h1 className="hero-text-anim relative text-white text-5xl md:text-7xl lg:text-[84px] font-light leading-[1.05] tracking-tight mb-8 opacity-0 drop-shadow-2xl" style={{ fontFamily: '"Cormorant Garamond", serif', transform: 'translateY(20px)' }}>
            Find Your Next <br /> <span className="italic text-[#c9a84c]">Landmark</span> Property.
          </h1>
          <p className="hero-text-anim relative text-white/60 text-base md:text-lg lg:text-xl font-light mb-12 max-w-lg mx-auto opacity-0 tracking-wide" style={{ transform: 'translateY(20px)' }}>
            Explore curated luxury residences, commercial spaces, villas, and investment-ready developments.
          </p>
          <div className="hero-text-anim relative opacity-0" style={{ transform: 'translateY(20px)' }}>
            <button className="relative px-10 py-5 text-xs font-semibold tracking-[0.25em] uppercase text-white border border-[#c9a84c]/30 hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-500 pointer-events-auto bg-[#050505]/40 backdrop-blur-sm">
              Explore Collection →
            </button>
          </div>
        </div>
      </div>

      {/* Active Property Card */}
      {activeProp && (
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[90%] max-w-[480px] z-30 text-center pointer-events-none transition-all duration-500 shadow-2xl">
          <div className="bg-[#050505]/80 backdrop-blur-xl border border-[#c9a84c]/30 p-8 shadow-2xl pointer-events-auto">
            <div className="w-full aspect-video mb-6 overflow-hidden border border-white/10">
              <img src={activeProp.image} alt={activeProp.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-3xl font-light text-white mb-2" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              {activeProp.title}
            </h2>
            <p className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] mb-6 font-semibold">{activeProp.location}</p>
            <div className="flex gap-4 justify-center items-center mb-8 border-y border-white/10 py-4">
              <span className="text-white/80 text-xs tracking-wider">{activeProp.bedrooms}</span>
              <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
              <span className="text-white/80 text-xs tracking-wider">{activeProp.size}</span>
            </div>
            {locked !== null && (
              <a href="#featured-properties" className="inline-flex items-center justify-center w-full px-8 py-4 text-[10px] font-semibold tracking-[0.25em] uppercase text-[#050505] transition-colors duration-400 bg-[#c9a84c] hover:bg-transparent hover:text-[#c9a84c] border border-[#c9a84c]">
                View Property
              </a>
            )}
          </div>
        </div>
      )}

      {/* Ring Slider */}
      <div className="ring-anim pointer-events-auto absolute left-1/2 top-[72%] w-full h-[420px] -translate-x-1/2 -translate-y-1/2 z-10 opacity-0" style={{ perspective: 1200 }}>
        <div ref={orbitRef} className="absolute w-full h-full" style={{ transformStyle: 'preserve-3d' }} />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 tracking-[4px] text-[10px] text-white/40 uppercase z-20 pointer-events-none">
        Move to Explore · Click to Lock
      </div>
    </section>
  );
}
