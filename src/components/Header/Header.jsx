import { Link } from 'react-router-dom';
import { useState } from 'react';

import Svg from 'components/Svg/Svg';
import UserMenu from 'components/UserMenu/UserMenu';
import BurgerBtn from 'components/Buttons/BurgerBtn/BurgerBtn';
import UserMobileMenu from 'components/UserMobileMenu/UserMobileMenu';

import useAuth from 'hooks/useAuth';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const onClickBurgerBtn = () => {
    setIsOpen({ isOpen: !isOpen });
  };

  return (
    <>
      {isLoggedIn ? (
        <div style={{ borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }}>
          <div className={styles.container}>
            <Link to="/" className={styles.link}>
              <Svg iconId={'icon-logo'} className={styles.logo} />
            </Link>
            <div className={styles.user_container}>
              <UserMenu />
              <BurgerBtn onClick={onClickBurgerBtn} />
              <UserMobileMenu isOpen={isOpen} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.container}>
            <Link to="/" className={styles.link}>
              <Svg iconId={'icon-logo'} className={styles.logo} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
