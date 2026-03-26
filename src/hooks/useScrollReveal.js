import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class "revealed" is added
 * (which triggers the .reveal transition defined in index.css).
 */
export function useScrollReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}
