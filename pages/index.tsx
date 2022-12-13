import styles from '@components/App.module.scss';
import * as React from 'react';

import App from '@components/App';
import EventPage from '@root/components/EventPage';

function Home(props) {
  // NOTE(jim):
  // Fetch example
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const json = await response.json();
      console.log(json);
    }

    fetchData();
  }, []);

  return (
    <App
      title="Party.Estuary.Tech in Toronto"
      description="You are cordially invited to an exclusive party celebrating the success of Estuary, the easiest way to put and get your data from Filecoin, the largest decentralized storage network in the world"
      url="https://party.estuary.tech/"
    >
      <div className={styles.center}>
        <EventPage />
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
