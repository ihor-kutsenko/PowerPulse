import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './UserMenu.module.scss';

import {
  DIARY_ROUTE,
  PRODUCTS_ROUTE,
  EXERCISES_ROUTE,
  PROFILE_ROUTE,
} from 'routes/constants';
import { logOutUser } from 'redux/auth/authOperations';
import useAuth from 'pages/hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const { user } = useAuth();
  const avatarUser = user.avatarURL;

  const isActive = route => {
    return pathname === route || pathname.includes(`${route}/`)
      ? styles.active
      : '';
  };

  const userAvatar = (
    <img
      src={avatarUser}
      alt="Avatar"
      style={{ borderRadius: '100%', width: '100%', height: '100%' }}
    />
  );
  const avatarLogo = (
    <Svg iconId="icon-avatar" className={styles.icon_avatar} />
  );

  const handleLogout = () => {
    dispatch(logOutUser());
  };

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
        <div className={styles.user_avatar}>
          {avatarUser ? userAvatar : avatarLogo}
        </div>
        <LogoutBtn onClick={handleLogout} className={styles.logout_btn} />
      </div>
    </div>
  );
};

export default UserMenu;
