import { Link } from 'react-router-dom';

import Svg from 'components/Svg/Svg';
import UserMenu from 'components/UserMenu/UserMenu';
import BurgerBtn from 'components/Buttons/BurgerBtn/BurgerBtn';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <Svg iconId={'icon-logo'} className={styles.logo} />
      </Link>
      <div className={styles.user_container}>
        <UserMenu />
        <BurgerBtn />
      </div>
    </div>
  );
};

export default Header;
