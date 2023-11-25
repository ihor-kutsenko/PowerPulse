import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import style from '../../components/HomeBG/HomeBG.module.scss';
import SignUpForm from 'components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div>Sign Up Page</div>
        <SignUpForm />
        <HomeBG className={style.auth}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default SignUpPage;
