'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ParticleBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const container = containerRef.current;
        if (!container) return;

        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 15 : 40;

        const particles: HTMLDivElement[] = [];

        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.width = '3px';
            p.style.height = '3px';
            p.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
            p.style.borderRadius = '50%';
            p.style.pointerEvents = 'none';
            container.appendChild(p);
            particles.push(p);

            // Spawn particles slightly outside the visual boundary
            const startX = (Math.random() > 0.5 ? -10 - Math.random() * 20 : 110 + Math.random() * 20);
            const startY = (Math.random() > 0.5 ? -10 - Math.random() * 20 : 110 + Math.random() * 20);

            p.style.left = `${startX}%`;
            p.style.top = `${startY}%`;

            // Destination region covering the hero text and ring
            const targetX = 25 + Math.random() * 50; // 25% to 75%
            const targetY = 20 + Math.random() * 50; // 20% to 70%

            gsap.fromTo(p,
                { opacity: 0, scale: 0 },
                {
                    left: `${targetX}%`,
                    top: `${targetY}%`,
                    opacity: Math.random() * 0.5 + 0.2,
                    scale: Math.random() * 1.5 + 0.5,
                    duration: 1.8 + Math.random() * 1.2,
                    ease: 'expo.out', // Cinematic rapid arrive and slow settle
                    onComplete: () => {
                        // Transition to secondary continuous floating state
                        gsap.to(p, {
                            y: `+=${Math.random() * 60 - 30}`,
                            x: `+=${Math.random() * 60 - 30}`,
                            opacity: Math.random() * 0.3 + 0.1,
                            duration: Math.random() * 8 + 6,
                            repeat: -1,
                            yoyo: true,
                            ease: 'sine.inOut'
                        });
                    }
                }
            );
        }

        const mouseMoveHandler = (e: MouseEvent) => {
            if (isMobile) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            gsap.to(particles, {
                x: `+=${x}`,
                y: `+=${y}`,
                duration: 2,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden'
            }}
        />
    );
}
