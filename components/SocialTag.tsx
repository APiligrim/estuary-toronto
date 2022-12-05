import styles from './SocialTag.module.scss';

export default function SocialTag() {
  return (
    <div className={styles.copy}>
      <span>
        <a target="_blank" href="https://twitter.com/Estuary_Tech" style={{ paddingLeft: '8px', textDecoration: 'none', fontFamily: 'Mono', color: 'black', cursor: 'pointer' }}>
          Stay Tuned on ✦ Twitter ✦
        </a>
      </span>
    </div>
  );
}
