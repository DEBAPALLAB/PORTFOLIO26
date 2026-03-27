// filename: components/ScrollIndicator.jsx
"use client";
import { useEffect, useState } from 'react';
import styles from './ScrollIndicator.module.css';

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollValue = (currentScroll / totalScroll);
      setProgress(scrollValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (p) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: totalHeight * p, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const p = (e.clientY - rect.top) / rect.height;
        scrollTo(p);
      }}>
        <div 
          className={styles.bar} 
          style={{ transform: `scaleY(${progress})` }} 
        />
      </div>
      <div className={styles.dots}>
        {[0, 0.5, 1].map((p, i) => (
          <div 
            key={i}
            className={`${styles.dot} ${Math.abs(progress - p) < 0.2 ? styles.dotActive : ''}`} 
            onClick={() => scrollTo(p)}
          />
        ))}
      </div>
    </div>
  );
}
