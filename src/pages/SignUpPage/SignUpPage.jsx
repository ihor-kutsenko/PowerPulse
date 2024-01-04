import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import Title from 'components/Title/Title';
import { SIGN_IN_ROUTE } from 'routes/constants';

import style from '../../components/HomeBG/HomeBG.module.scss';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div>
          <div className={styles.wrapperTitle}>
            <Title text="Sign Up" className={styles.title} />
            <p className={styles.text}>
              Thank you for your interest in our platform. To complete the
              registration process, please provide us with the following
              information.
            </p>
          </div>

          <SignUpForm />
          <div className={styles.textWrapper}>
            <p className={styles.textHint}>Already have account? </p>
            <Link className={styles.textLink} to={SIGN_IN_ROUTE}>
              Sign In
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

export default SignUpPage;
