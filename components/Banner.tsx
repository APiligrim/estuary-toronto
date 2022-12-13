import styles from '@components/Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p className={(styles.primary, styles.scrollingText)}>✦ PARTY.ESTUARY.TECH @ CLIO, TORONTO JANUARY 24,2023 ✦</p>
      <p className={(styles.secondary, styles.scrollingText)}>✦ PARTY.ESTUARY.TECH @ CLIO, TORONTO JANUARY 24,2023 ✦</p>
    </div>
  );
}
