// filename: app/not-found.jsx
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.ghost}>404</div>
      <div className={styles.content}>
        <span className={`${styles.eyebrow} mono`}>PAGE NOT FOUND</span>
        <p className={styles.text}>
          This page doesn't exist. <br/>
          <span className={styles.italic}>But the work does.</span>
        </p>
        <Link href="/" className={styles.backLink}>
          ← GO BACK
        </Link>
      </div>
    </main>
  );
}
