import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import SignInForm from 'components/SignInForm/SignInForm';
import Title from 'components/Title/Title';
import { SIGN_UP_ROUTE } from 'routes/constants';

import style from '../../components/HomeBG/HomeBG.module.scss';
import styles from '../SignUpPage/SignUpPage.module.scss';

const SignInPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div>
          <div className={styles.wrapperTitle}>
            <Title text="Sign In" className={styles.title} />
            <p className={styles.text}>
              Welcome! Please enter your credentials to login to the platform:
            </p>
          </div>
          <SignInForm />
          <div className={styles.textWrapper}>
            <p className={styles.textHint}>Don’t have an account? </p>
            <Link className={styles.textLink} to={SIGN_UP_ROUTE}>
              Sign Up
            </Link>
          </div>
        </div>
        <HomeBG className={style.auth}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default SignInPage;
