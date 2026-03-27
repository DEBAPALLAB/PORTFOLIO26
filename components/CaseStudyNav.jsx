// filename: components/CaseStudyNav.jsx
import Link from 'next/link';
import styles from './CaseStudyNav.module.css';

export default function CaseStudyNav({ nextSlug, nextTitle }) {
  return (
    <Link href={`/work/${nextSlug}`} className={styles.section}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>NEXT PROJECT →</span>
      </div>
      <div className={styles.right}>
        <h2 className={styles.title}>{nextTitle}</h2>
      </div>
    </Link>
  );
}
