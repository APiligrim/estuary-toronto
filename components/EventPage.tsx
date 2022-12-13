import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Navbar from './Navbar';
import styles from '@components/EventPage.module.scss';

export default function EventPage() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <img className={styles.footerLogo} height="150px" src="https://user-images.githubusercontent.com/28320272/207413828-53d3482b-aec8-4ec1-81fb-d718aad549c1.png" />
        </div>
      ) : (
        <>
          <Banner />
          <Navbar />
          <Header />
        </>
      )}
    </div>
  );
}
