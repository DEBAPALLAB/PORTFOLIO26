// filename: components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  const year = 2025;
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.mono}>© {year} ALL RIGHTS RESERVED / </span>
        <span className={styles.gold}>DEBAPALLAB DAS</span>
      </div>
      <div className={styles.right}>
        <p className={styles.tagline}>quietly confident · precisely built</p>
      </div>
    </footer>
  );
}
