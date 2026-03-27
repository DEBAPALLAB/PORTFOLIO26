// filename: components/Nav.jsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => { if (window.innerWidth > 900) setIsOpen(false); };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Stack', href: '/#stack' },
    { name: 'Process', href: '/process' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/#contact' },
  ];

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.sc : ''}`}>
        <Link href="/" className={styles.nlogo}>
          <span className={styles.ndot} />
          <span style={{ color: 'var(--gold)' }}>DEV</span>
          <span style={{ color: 'var(--rule2)', margin: '0 .15rem' }}>·</span>
          LUCIDE TECH
        </Link>
        
        <ul className={styles.nlinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className={`${styles.burger} ${isOpen ? styles.active : ''}`} onClick={toggle}>
          <span />
          <span />
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
        <div className={styles.mobileMeta}>
          © 2025 · Debapallab Das
        </div>
      </div>
    </>
  );
}
