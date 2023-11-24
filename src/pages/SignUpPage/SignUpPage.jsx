import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import style from '../../components/HomeBG/HomeBG.module.scss';

const SignUpPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div>Sign Up Page</div>
        <HomeBG className={style.auth}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default SignUpPage;
