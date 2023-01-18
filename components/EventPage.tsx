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

  const navItems = [];

  return (
    <div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <div>
            <img style={{ marginBottom: '16px' }} height="150px" src="https://user-images.githubusercontent.com/28320272/207926159-43254cac-1828-4a54-95d0-04ed040f932a.png" />
            <p
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'Mono',
              }}
            >
              loading
            </p>
          </div>
        </div>
      ) : (
        <div>
          <Banner />
          <Navbar navItems={navItems} />
          <Header />
          <Banner scrollRight={true} />
        </div>
      )}
    </div>
  );
}
