import styles from '@components/Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p className={(styles.primary, styles.scrollingText)}>✦ ESTUARY.TECH / PARTY @ CLIO, TORONTO JANUARY 24,2023 ✦</p>
      <p className={(styles.secondary, styles.scrollingText)}>✦ ESTUARY.TECH / PARTY @ CLIO, TORONTO JANUARY 24,2023 ✦</p>
    </div>
  );
}
