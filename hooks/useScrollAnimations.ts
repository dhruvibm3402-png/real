'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            // Simple fade-ins for accessibility
            gsap.utils.toArray('section').forEach((section: any) => {
                gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: section });
            });
            return;
        }

        // 1. Fade up section titles
        gsap.utils.toArray('h2').forEach((el: any) => {
            // Avoid hero title if it's already animated
            if (el.classList.contains('hero-title')) return;

            gsap.fromTo(el,
                { opacity: 0, y: 30, filter: 'blur(5px)' },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // 2. Fade up paragraphs inside sections
        gsap.utils.toArray('section p').forEach((el: any) => {
            if (el.classList.contains('hero-subtitle')) return;
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // 3. Stagger grids & row containers (Featured Properties, Amenities, Agents, Process Steps, etc.)
        const gridContainers = document.querySelectorAll('.fp-grid, .grid, [style*="gridTemplateColumns"], .process-steps, [style*="justifyContent: space-between"]');
        gridContainers.forEach((grid: any) => {
            // Exclude marquee or continuous slider containers to prevent animation clashes
            if (grid.closest('.marquee') || grid.classList.contains('marquee')) return;

            const cards = gsap.utils.toArray(grid.children);
            if (cards.length === 0) return;

            gsap.fromTo(cards,
                { opacity: 0, y: 40, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );

            // Reveal images inside cards
            const images = grid.querySelectorAll('img');
            if (images.length > 0) {
                gsap.fromTo(images,
                    { scale: 1.08, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power2.out',
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: grid,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        });

        // Refresh ScrollTrigger when components are hydrated
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
}
