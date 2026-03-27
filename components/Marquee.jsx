// filename: components/Marquee.jsx
import styles from './Marquee.module.css';

export default function Marquee({ items }) {
  if (!items) return null;
  const marqueeItems = typeof items === 'string' ? items.split('|') : items;
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.text}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
