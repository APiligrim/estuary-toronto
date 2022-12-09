import * as U from '@common/utilities';
import styles from '@components/Apply.module.scss';
import rstyles from '@components/RichText.module.scss';
import App from '@root/components/App';
import Banner from '@root/components/Banner';
import Button from '@root/components/Button';
import Input from '@root/components/Input';
import Textarea from '@root/components/Textarea';
import React from 'react';

const markdown = null;
const code = null;
const curl = null;

function ApplyPage(props) {
  const [state, setState] = React.useState({
    name: '',
    twitter: '',
    linkedin: '',
    email: '',
    message: '',
    success: false,
    loading: false,
  });

  return (
    <App
      title="Estuary.Tech Party: Get an Invite"
      description="Fill out this form to receive an invite to the Estuary.Tech/Party."
      url="https://docs.estuary.tech/get-invite-key"
      curl={curl}
      markdown={markdown}
      code={code}
      active="get-an-invite"
    >
      <Banner />
      <div className={styles.formContainer}>
        {state.success ? (
          <div className={U.classNames(styles.group, rstyles.block, styles.successContainer)}>
            <h1 style={{ marginTop: 22 }}>Thank you!</h1>
            <p style={{ color: 'white' }}>Thank you for submitting this form! We will respond to you within 48 hours if you have been invited :-) </p>
          </div>
        ) : (
          <div className={styles.gridContainer}>
            <div className={styles.graphicContainer}>
              <div className={styles.imageContainer}>
                <a href="/" style={{ height: ' 100%', width: '100%', position: 'sticky', top: '0' }}>
                  {' '}
                  <img className={styles.imageGraphic} src="https://user-images.githubusercontent.com/28320272/206462622-c35f7a1f-6472-4358-afb4-00849760977c.png" />
                </a>
              </div>
            </div>
            <div className={U.classNames(styles.group, rstyles.block)} style={{ gridColumn: 'span 2/5' }}>
              <div className={styles.eventInformation}>
                <h1 className={styles.mainHeading}>Request an Invitation</h1>

                <div className={styles.eventDetailsGrid} style={{ marginBottom: '48px' }}>
                  <div className={styles.eventDetailsColumn}>
                    <h4 className={styles.eventDetailHeading}>Date</h4>
                    <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
                      <p className={styles.caption}>January 24th, 2023</p>
                    </a>
                  </div>

                  <div className={styles.eventDetailsColumn}>
                    <h4 className={styles.eventDetailHeading}>Time</h4>
                    <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
                      <p className={styles.caption}>7pm-10pm EST</p>
                    </a>
                  </div>
                  <div className={styles.eventDetailsColumn}>
                    <h4 className={styles.eventDetailHeading}>Venue</h4>
                    <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
                      <p className={styles.caption}>CLIO, Toronto</p>
                    </a>
                  </div>
                  <div className={styles.eventDetailsColumn}>
                    <h4 className={styles.eventDetailHeading}>Dresscode</h4>
                    <a style={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }} href={'https://cliotoronto.com/spaces/'}>
                      <p className={styles.caption}>Smart Casual</p>
                    </a>
                  </div>
                </div>

                <p className={styles.eventInformationCaption} style={{ fontSize: '16px', fontFamily: 'Mono' }}>
                  {' '}
                  Please fill out this form to apply to be invited. You will receive confirmation within 48 hours if your application has been accepted.
                </p>

                <div className={styles.title} style={{ marginTop: 48 }}>
                  Full Name
                </div>
                <Input
                  style={{ marginTop: 8 }}
                  value={state.name}
                  placeholder="ex: John Doe"
                  onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                  name="name"
                />
                <div className={styles.title}>E-mail</div>
                <Input
                  style={{ marginTop: 8 }}
                  value={state.email}
                  placeholder="ex: estuary.tech@protocol.ai"
                  onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                  name="email"
                />
                <div className={styles.title}>Twitter (optional)</div>
                <Input
                  style={{ marginTop: 8 }}
                  value={state.twitter}
                  placeholder="ex:  @estuary_tech"
                  onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                  name="twitter"
                />
                <div className={styles.title}>Linkedin</div>

                <Input
                  style={{ marginTop: 8 }}
                  value={state.linkedin}
                  placeholder="ex: @estuary"
                  onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                  name="linkedin"
                />

                <div className={styles.title}>Tell us about yourself and why you are interested in joining the party</div>
                <Textarea
                  style={{ marginTop: 8 }}
                  value={state.message}
                  onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
                  name="message"
                  maxLength={5000}
                />

                <div className={styles.action}>
                  <Button
                    loading={state.loading}
                    onClick={async () => {
                      if (U.isEmpty(state.name)) {
                        alert('You must provide your full name.');
                        return;
                      }

                      if (U.isEmpty(state.email)) {
                        alert('You must provide an e-mail, or we will not be able to reach you');
                        return;
                      }

                      if (U.isEmpty(state.message)) {
                        alert('You must provide a message');
                        return;
                      }

                      setState({ ...state, loading: true });
                      try {
                        fetch('/api/request-invite', {
                          method: 'POST',
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            name: state.name,
                            email: state.email,
                            twitter: state.twitter,
                            linkedin: state.linkedin,
                            message: state.message,
                          }),
                        });
                      } catch (e) {
                        console.log(e);
                      }

                      setState({
                        ...state,
                        success: true,
                        loading: true,
                        message: '',
                      });
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ApplyPage;
