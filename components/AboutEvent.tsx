import styles from '@components/AboutEvent.module.scss';

export default function AboutEvent() {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.heading2} >The Party</h2> */}
      {/* <p className={styles.caption} style={{ marginTop: '80px' }}>
        Join us at an invite only mixer party hosted by Estuary. This party will bring together innovators, artists, and enthusiasts from the Web3 space.
      </p> */}

      <div>
        <h2 className={styles.heading2}>About Estuary</h2>
        <p className={styles.caption}>
          Launched with alpha phase in 2021, Estuary provides a reliable way to upload public data onto Filecoin and pin it to IPFS. As of today, Estuary has over 600+ users and
          over 1.22 PiB of sealed data.
        </p>
      </div>
    </div>
  );
}
