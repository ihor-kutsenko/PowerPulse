import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import style from '../../components/HomeBG/HomeBG.module.scss';
import SignInForm from 'components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div>Sign In Page</div>
        <SignInForm />
        <HomeBG className={style.auth}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default SignInPage;
