import styles from '@components/App.module.scss';

import * as React from 'react';
import * as Requests from '@common/requests';
import * as Utilities from '@common/utilities';

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
    <App title="Estuary Party in Toronto" description="Estuary party Toronto" url="">
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
