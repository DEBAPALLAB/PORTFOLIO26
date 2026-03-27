import Link from 'next/link';
import styles from './page.module.css';
import { PROJECTS } from '../../../lib/projects';
import ScrollReveal from '../../../components/ScrollReveal';
import CaseStudyNav from '../../../components/CaseStudyNav';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) return { title: 'Not Found' };
  return { 
    title: `${project.titleLine1} ${project.titleLine2} — Case Study`, 
    description: project.subtitle 
  };
}

export default function CaseStudyPage({ params }) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className={styles.main}>
      {/* 1. HEADER */}
      <section className={styles.header}>
        <span className={`${styles.eyebrow} mono`}>CASE STUDY · {project.type}</span>
        <h1 className={styles.title}>
          {project.titleLine1}<br/>{project.titleLine2}
        </h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        
        <div className={styles.headerMeta}>
          <div className={styles.metaCol}>
            <span className={styles.label}>YEAR</span>
            <span className={styles.value}>{project.year}</span>
          </div>
          <div className={styles.metaCol}>
            <span className={styles.label}>ROLE</span>
            <span className={styles.value}>{project.role}</span>
          </div>
          <div className={styles.metaCol}>
            <span className={styles.label}>TAGS</span>
            <div className={styles.tagWrap}>
              {project.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO PANEL */}
      <section className={styles.heroPanel}>
        <div className={styles.visualGhost}>{project.number}</div>
        <div className={styles.visualCorner}></div>
        <span className={styles.visualLabel}>project preview · coming soon</span>
      </section>

      {/* 3. OVERVIEW + ROLE */}
      <ScrollReveal>
        <section className={styles.overviewRole}>
          <div className={styles.overviewLeft}>
            <span className={`${styles.label} mono`}>OVERVIEW</span>
            {project.overview.map((p, i) => (
              <p key={i} className={styles.bodyPara}>{p}</p>
            ))}
          </div>
          <div className={styles.roleRight}>
            <span className={`${styles.label} mono`}>EXPLORATION</span>
            <p className={styles.rolePrimary}>{project.role}</p>
            <p className={styles.bodyParaDim}>
              Focusing on structural integrity and aesthetic clarity to drive user engagement and platform trust.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. CHALLENGE */}
      <ScrollReveal>
        <section className={styles.challengeSection}>
          <div className={styles.titleBlock}>
            <h2 className={styles.sectionTitle}>WHAT</h2>
            <p className={styles.italicSubline}>was the real problem</p>
          </div>
          <div className={styles.contentInset}>
            {project.challenge.map((p, i) => (
              <p key={i} className={styles.bodyParaLarge}>{p}</p>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 5. SOLUTION */}
      <ScrollReveal>
        <section className={styles.solutionSection}>
          <div className={styles.solutionLeft}>
            <h2 className={styles.sectionTitle}>HOW</h2>
            <p className={styles.italicSubline}>the approach</p>
          </div>
          <div className={styles.solutionRight}>
            {project.solution.map((p, i) => (
              <p key={i} className={styles.bodyPara}>{p}</p>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 6. STACK USED */}
      <ScrollReveal>
        <section className={styles.darkSection}>
          <div className={styles.stackHeader}>
            <span className={`${styles.eyebrow} mono`}>CHOSEN STACK</span>
            <h2 className={styles.darkTitle}>TECHNICAL DEFINITION</h2>
          </div>
          <div className={styles.stackGrid}>
            {Object.entries(project.stack).map(([cat, items], idx) => (
              <div key={cat} className={styles.stackCell}>
                <h3 className={styles.catTitle}>{cat}</h3>
                <div className={styles.pillWrap}>
                  {items.map(item => (
                    <span key={item} className={styles.pill}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 7. OUTCOME */}
      <ScrollReveal>
        <section className={styles.outcomeSection}>
          <div className={styles.titleBlock}>
            <h2 className={styles.sectionTitle}>RESULT</h2>
            <p className={styles.italicSubline}>what shipped</p>
          </div>
          <div className={styles.outcomeContent}>
            <div className={styles.outcomeParas}>
              {project.outcome.map((p, i) => (
                <p key={i} className={styles.bodyPara}>{p}</p>
              ))}
            </div>
            <div className={styles.metricGrid}>
              <div className={styles.metric}>
                <span className={styles.metricNum}>40%</span>
                <span className={styles.metricLabel}>FRICTION REDUCTION</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricNum}>99.9%</span>
                <span className={styles.metricLabel}>UPTIME ACHIEVED</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.ctaSection}>
          <span className={styles.ctaEyebrow}>INTERESTED?</span>
          <h2 className={styles.ctaTitle}>LET'S TALK ABOUT<br />YOUR PROJECT</h2>
          <Link href="/#contact" className={styles.ctaButton}>GET IN TOUCH →</Link>
        </section>
      </ScrollReveal>

      {/* 8. NEXT NAV */}
      <CaseStudyNav nextSlug={project.next} nextTitle={project.nextTitle} />
    </main>
  );
}
