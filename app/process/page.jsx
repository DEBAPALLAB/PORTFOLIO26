// filename: app/process/page.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import BlueprintPipeline from '../../components/BlueprintPipeline';
import styles from './page.module.css';

export default function ProcessPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <ScrollReveal>
          <span className={styles.eyebrow}>THE BLUEPRINT</span>
          <h1 className={styles.title}>HOW I BUILD<br />SYSTEMS</h1>
          <p className={styles.description}>
            I treat product development like building a system, not just writing code. 
            Every project is an act of architecture — engineered for speed, clarity, and scale.
          </p>
        </ScrollReveal>
      </div>

      <div className={styles.flowWrapper}>
        <div className={styles.overlayText}>
          EXPLORE THE SYSTEM ARCHITECTURE
        </div>
        <BlueprintPipeline />
      </div>

      <ScrollReveal>
        <div className={styles.principles}>
          <div className={styles.principlesHeader}>
            <span className={styles.eyebrow}>THE MANIFESTO</span>
            <h2 className={styles.title}>PRINCIPLES OF THE BUILD</h2>
            <div className={styles.description}>
              The fundamental truths that govern every decision I make during the build.
            </div>
          </div>
          
          <div className={styles.principlesGrid}>
            {[
              ["01", "Build real things early", "Working prototypes reveal more than static designs. I prioritize code over mocks."],
              ["02", "Systems over pages", "Great products are built as scalable systems, not just a collection of individual screens."],
              ["03", "Speed through clarity", "The clearer the problem definition, the faster and more precise the hand-crafted implementation."],
              ["04", "Design with intent", "Interfaces should communicate logic, guide the user, and delight through subtle motion."],
              ["05", "Iterate relentlessly", "The best products are never finished; they evolve through constant, data-driven improvement."],
            ].map(([idx, t, d]) => (
              <div key={t} className={styles.principleItem}>
                <span className={styles.principleNumber}>{idx}</span>
                <h3 className={styles.principleTitle}>{t}</h3>
                <p className={styles.principleText}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.tools}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>WORKFLOW</span>
            <h2 className={styles.title}>ENGINEERING PARTNERS</h2>
          </div>

          <div className={styles.toolsGrid}>
            {[
              { t: "Thinking Partner", d: "Using AI to explore complex architectures and refine system logic before a single line is written." },
              { t: "Accelerator", d: "Rapidly generating boilerplates and exploring edge cases, allowing me to focus on core innovation." },
              { t: "Deep Logic", d: "Hand-crafted implementation for core performance, security, and unique user experiences." },
              { t: "Constant Iteration", d: "AI-assisted debugging and continuous optimization loops for production-grade software." },
            ].map((tool, i) => (
              <div key={i} className={styles.toolCard}>
                <div className={styles.toolIcon}>
                  0{i + 1}
                </div>
                <div>
                  <h3 className={styles.principleTitle}>{tool.t}</h3>
                  <p className={styles.principleText}>{tool.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.ctaSection}>
          <div className={styles.ctaWatermark}>STAY HUNGRY</div>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>NEXT STEP</span>
            <h2 className={styles.ctaTitle}>LET'S ARCHITECT<br />A NEW REALITY</h2>
            <Link href="/work" className={styles.ctaButton}>VIEW SELECTED WORK →</Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
