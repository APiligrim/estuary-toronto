import styles from '@components/StayTunedBanner.module.scss';

export default function StayTunedBanner() {
  return (
    <div className={styles.banner}>
      <p className={styles.scrollingText} style={{ paddingRight: '28px', whiteSpace: 'nowrap' }}>
        ✦ STAY TUNED ✦
      </p>
    </div>
  );
}
