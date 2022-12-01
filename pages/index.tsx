import styles from '@components/App.module.scss';

import * as React from 'react';
import * as Requests from '@common/requests';
import * as Utilities from '@common/utilities';

import App from '@components/App';

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
    <App title="Example" description="This is a website template" url="">
      <div className={styles.center}>
        <p className={styles.paragraph}>From here, you can start any project you like.</p>
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
