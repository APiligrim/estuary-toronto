import styles from '@components/Banner.module.scss';
import * as U from '@common/utilities';

export interface BannerProps {
  scrollRight?: boolean;
}
export default function Banner({ scrollRight }: BannerProps) {
  return (
    <>
      {scrollRight ? (
        <div className={styles.marqueeContainer} style={{ position: 'relative' }}>
          <div className={styles.marqueeRight} style={{ display: 'flex', paddingLeft: '8px' }}>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
          </div>
          <div className={U.classNames(styles.marqueeRight, styles.marquee2Right)} style={{ display: 'flex', paddingLeft: '8px' }}>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
          </div>
        </div>
      ) : (
        <div className={styles.marqueeContainer} style={{ position: 'relative' }}>
          <div className={styles.marquee} style={{ display: 'flex', paddingLeft: '8px' }}>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
          </div>
          <div className={U.classNames(styles.marquee, styles.marquee2)} style={{ display: 'flex', paddingLeft: '8px' }}>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
            <span className={styles.text}>TORONTO JANUARY 24, 2023 </span>
            <span className={styles.text}>✦ PARTY . ESTUARY . TECH @ CLIO </span>
          </div>
        </div>
      )}
    </>
  );
}
