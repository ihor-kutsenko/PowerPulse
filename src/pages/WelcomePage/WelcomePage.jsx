import Container from 'components/Container/Container';
import styles from './WelcomePage.module.scss';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';

const WelcomePage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Transforming your body shape with Power Pulse
          </h1>
          <div>
            <button>Sign Up</button>
            <button>Sign In</button>
          </div>
        </div>

        <HomeBG>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default WelcomePage;
