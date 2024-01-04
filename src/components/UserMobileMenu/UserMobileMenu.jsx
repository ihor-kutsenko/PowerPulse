import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

import { DIARY_ROUTE, PRODUCTS_ROUTE, EXERCISES_ROUTE } from 'routes/constants';
import styles from './UserMobileMenu.module.scss';

const UserMobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    if (menuIsOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  const menuShownClassName = `${styles.menu__wrapper} ${styles.menu__wrapper_shown}`;
  const menuHiddenClassName = `${styles.menu__wrapper} ${styles.menu__wrapper_hidden}`;
  return (
    <>
      {menuIsOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      <div
        className={`${
          menuIsOpen ? `${menuShownClassName}` : `${menuHiddenClassName}`
        }`}
        onClick={handleBackdropClick}
      >
        <button onClick={closeMenu} className={styles.menu__btnClose}>
          <Svg iconId="icon-close" className={styles.menu__iconClose} />
        </button>
        <nav className={styles.menu__navigation}>
          <Link
            className={styles.menu__navigation_link}
            to={DIARY_ROUTE}
            onClick={closeMenu}
          >
            Diary
          </Link>
          <Link
            className={styles.menu__navigation_link}
            to={PRODUCTS_ROUTE}
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            className={styles.menu__navigation_link}
            to={EXERCISES_ROUTE}
            onClick={closeMenu}
          >
            Exercises
          </Link>
        </nav>
        <LogoutBtn className={styles.menu__btnLogout} whiteIcon={true} />
      </div>
    </>
  );
};

export default UserMobileMenu;
