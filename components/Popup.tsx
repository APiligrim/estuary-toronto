import Link from 'next/link';
import React from 'react';
import Button from './Button';
import styles from './Popup.module.scss';

export default function Popup(props) {
  return props.trigger ? (
    <div className={styles.container}>
      <section className={styles.letter}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className={styles.close} onClick={() => props.setTrigger(false)}>
            X
          </button>
        </div>

        <div className={styles.letterMessage}>
          <p className={styles.letterText}>Dear friends, developers, innovators and creators,</p>
          <p className={styles.letterText}>
            You are cordially invited to an exclusive party celebrating the success of{' '}
            <a href="https://estuary.tech/" style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold' }}>
              Estuary
            </a>
            , the easiest way to put and get your data from Filecoin, the largest decentralized storage network in the world. Our success cannot be built without our community of
            innovators and leaders in tech. This event is designed to bring together like-minded individuals who share a passion for Web3 and its limitless potential.
          </p>
          <p className={styles.letterText}>
            Please fill out{' '}
            <a href="/apply" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'green' }}>
              an application <b style={{ textDecoration: 'none', color: 'green' }}> by Jan 17th</b>
            </a>{' '}
            to reserve your spot. If your application has been accepted by our team, you will receive confirmation within 48 hours. This event is invite-only, so please feel free
            to extend this application to any of your colleagues or fellow industry professionals who you think would be interested in attending. We look forward to seeing you
            there!
          </p>
          <p className={styles.letterText} style={{ textDecoration: 'none', color: 'green' }}>
            Estuary
          </p>

          <Button href="/apply" style={{ marginBottom: '16px', width: '200px', fontFamily: 'Arial' }}>
            Apply for an Invite
          </Button>
        </div>
      </section>
    </div>
  ) : (
    <></>
  );
}
