'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function WelcomeIntro() {
    const introRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const particlesContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const tl = gsap.timeline({
            onComplete: () => {
                if (introRef.current) introRef.current.style.display = 'none';
            }
        });

        if (prefersReducedMotion) {
            tl.to(introRef.current, { opacity: 0, duration: 1, delay: 1 });
            return;
        }

        // Prepare Particles
        const pContainer = particlesContainerRef.current;
        if (pContainer) {
            const isMobile = window.innerWidth < 768;
            const numParticles = isMobile ? 20 : 60;
            const particles: HTMLDivElement[] = [];

            for (let i = 0; i < numParticles; i++) {
                const p = document.createElement('div');
                p.style.position = 'absolute';
                p.style.width = '2px';
                p.style.height = '2px';
                p.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                p.style.borderRadius = '50%';
                pContainer.appendChild(p);
                particles.push(p);

                // Spawn spread out across the viewport
                const startX = (Math.random() - 0.5) * window.innerWidth * 1.5;
                const startY = (Math.random() - 0.5) * window.innerHeight * 1.5;

                gsap.set(p, { x: startX, y: startY, opacity: 0 });

                // 0.2s: Particles subtly converge
                tl.to(p, {
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 150,
                    opacity: Math.random() * 0.6 + 0.2,
                    duration: 1.8,
                    ease: 'power2.out'
                }, 0.2);

                // 2.1s: Particles gently move outward
                tl.to(p, {
                    x: startX * (Math.random() * 0.5 + 1.2),
                    y: startY * (Math.random() * 0.5 + 1.2),
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.inOut'
                }, 2.1);
            }
        }

        const letters = gsap.utils.toArray('.aurora-letter');

        // 0.2s: Ambient glow begins
        tl.to('.aurora-ambient', { opacity: 0.8, scale: 1.1, duration: 2, ease: 'power2.out' }, 0.2);

        // 0.4s: Light trail starts drawing
        tl.fromTo('.aurora-flare',
            { left: '-10%', opacity: 0, scale: 0.5 },
            { left: '110%', opacity: 1, scale: 1.5, duration: 1.6, ease: 'power1.inOut' },
            0.4
        ).to('.aurora-flare', { opacity: 0, duration: 0.4 }, 2.0);

        // 0.5-1.8s: AURORA progressively reveals
        tl.fromTo(letters,
            { opacity: 0, x: -20, filter: 'blur(15px)' },
            { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.4, stagger: 0.12, ease: 'power3.out' },
            0.5
        );

        // 1.8-2.1s: Complete word gets a subtle glow pulse
        tl.to(letters, { color: '#e0f2fe', textShadow: '0 0 24px rgba(14,165,233,0.7)', duration: 0.3, stagger: 0.05, ease: 'power1.inOut' }, 1.8)
            .to(letters, { color: '#ffffff', textShadow: '0 0 0px rgba(14,165,233,0)', duration: 0.5, stagger: 0.05, ease: 'power1.inOut' }, 2.1);

        // 2.4-2.8s: Welcome screen smoothly fades out & scales slightly toward viewer
        tl.to(introRef.current, { opacity: 0, scale: 1.05, duration: 1, ease: 'power3.inOut' }, 2.4);

    }, { scope: introRef });

    return (
        <div
            ref={introRef}
            style={{ zIndex: 99999, background: '#020408' }}
            className="fixed inset-0 flex items-center justify-center overflow-hidden"
        >
            {/* Particles Container */}
            <div ref={particlesContainerRef} className="absolute top-1/2 left-1/2 w-0 h-0" />

            {/* Aurora Ambient Flow */}
            <div className="aurora-ambient absolute w-[60vw] max-w-[800px] h-[30vh] bg-sky-800/20 blur-[120px] rounded-[100%] opacity-0 mix-blend-screen pointer-events-none" />

            {/* AURORA Text Animation Container */}
            <div className="relative flex items-center" ref={textRef}>
                {'AURORA'.split('').map((char, i) => (
                    <span key={i} className="aurora-letter text-white font-light text-5xl md:text-8xl tracking-[0.3em] md:tracking-[0.6em] inline-block will-change-[filter,opacity,transform]">
                        {char}
                    </span>
                ))}

                {/* Sweeping Light Flare Trail */}
                <div className="aurora-flare absolute top-1/2 -translate-y-1/2 w-[120px] h-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[12px] mix-blend-screen pointer-events-none rounded-full" />
            </div>
        </div>
    );
}
