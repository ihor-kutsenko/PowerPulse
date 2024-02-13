import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import Svg from 'components/Svg/Svg';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import style from '../../components/HomeBG/HomeBG.module.scss';
import styles from './NotFoundPage.module.scss';

import { WELCOME_PAGE_ROUTE } from 'routes/constants';

const NotFoundPage = () => {
  return (
    <Container>
      <div className={styles.container_left}>
        <Link to="/">
          <Svg iconId={'icon-logo-white'} className={styles.logo} />
        </Link>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </p>
        <Link to={WELCOME_PAGE_ROUTE} className={styles.link}>
          Go Home
        </Link>
      </div>
      <div className={styles.container_right}>
        <SectionUserGateway>
          <HomeBG className={style.home}>
            <div></div>
          </HomeBG>
        </SectionUserGateway>
      </div>
    </Container>
  );
};

export default NotFoundPage;
