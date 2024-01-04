import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';

import { SIGN_UP_ROUTE, SIGN_IN_ROUTE } from 'routes/constants';
import styles from './WelcomePage.module.scss';
import style from '../../components/HomeBG/HomeBG.module.scss';

const WelcomePage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Transforming your body shape with Power Pulse
          </h1>
          <div className={styles.navLink_wrapper}>
            <Link
              to={SIGN_UP_ROUTE}
              className={`${styles.navLink} ${styles.sign_up}`}
            >
              Sign Up
            </Link>
            <Link
              to={SIGN_IN_ROUTE}
              className={`${styles.navLink} ${styles.sign_in}`}
            >
              Sign In
            </Link>
          </div>
        </div>

        <HomeBG className={style.home}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default WelcomePage;
