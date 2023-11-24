import { Link } from 'react-router-dom';

import Container from 'components/Container/Container';
import SectionUserGateway from 'components/SectionUserGateway/SectionUserGateway';
import HomeBG from 'components/HomeBG/HomeBG';
import style from '../../components/HomeBG/HomeBG.module.scss';

import { WELCOME_PAGE_ROUTE } from 'routes/routes';

const NotFoundPage = () => {
  return (
    <Container>
      <SectionUserGateway>
        <div
          style={{
            paddingTop: 50,
            gap: 50,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          Error 404. Sorry, page wasn`t found.{' '}
          <Link to={WELCOME_PAGE_ROUTE}>Back to the Home page.</Link>
        </div>
        <HomeBG className={style.home}>
          <div></div>
        </HomeBG>
      </SectionUserGateway>
    </Container>
  );
};

export default NotFoundPage;
