import { Link, useLocation } from 'react-router-dom';

import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './UserMenu.module.scss';

import {
  DIARY_ROUTE,
  PRODUCTS_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from 'routes/constants';

const UserMenu = () => {
  const { pathname } = useLocation();
  const isActive = route => {
    return pathname === route || pathname.includes(`${route}/`)
      ? styles.active
      : '';
  };

  const avatarLogo = (
    <Svg iconId="icon-avatar" className={styles.icon_avatar} />
  );
  return (
    <div className={styles.user_container}>
      <nav className={styles.user_navigation}>
        <Link
          className={`${styles.user_link} ${isActive(DIARY_ROUTE)}`}
          to={DIARY_ROUTE}
        >
          Diary
        </Link>
        <Link
          className={`${styles.user_link} ${isActive(PRODUCTS_ROUTE)}`}
          to={PRODUCTS_ROUTE}
        >
          Products
        </Link>
        <Link
          className={`${styles.user_link} ${isActive(EXERCISES_ROUTE)}`}
          to={EXERCISES_ROUTE}
        >
          Exercises
        </Link>
      </nav>
      <div className={styles.user_data}>
        <Link to={PROFILE_ROUTE}>
          <Svg iconId="icon-settings" className={styles.icon_settings} />
        </Link>
        <div className={styles.user_avatar}>{avatarLogo}</div>
        <LogoutBtn className={styles.logout_btn} />
      </div>
    </div>
  );
};

export default UserMenu;
