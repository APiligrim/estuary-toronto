import styles from '@components/EventInformation.module.scss';

export default function EventInformation() {
  return (
    <div style={{ background: 'var(--color-green)', zIndex: '3', position: 'sticky' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '24px' }}>
        <p style={{ textAlign: 'center', fontFamily: 'Mono', fontSize: '16px', maxWidth: '60%' }}>
          Join us at an invite only mixer party hosted by Estuary. <br /> This party will bring together innovators, artists, and enthusiasts from the Web3 space.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Date</h2> <p className={styles.caption}>January 24, 2022</p>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Time</h2> <p className={styles.caption}>7pm-10pm EST</p>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Venue</h2>
            <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
              <p className={styles.caption}>CLIO, Toronto</p>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <div>
            <h2 className={styles.heading2}>Dresscode</h2> <p className={styles.caption}>Smart Casual </p>
          </div>
        </div>
      </div>
    </div>
  );
}
