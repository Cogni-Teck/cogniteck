'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.02,
        rootMargin: '0px 0px -60px 0px', // Trigger smoothly as it gets closer
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`${className} transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-6 scale-[0.98] blur-[1px] pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}
