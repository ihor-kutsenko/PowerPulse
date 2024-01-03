import styles from './UserMenu.module.scss';
import { Link } from 'react-router-dom';

import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

const UserMenu = () => {
  const avatarLogo = (
    <Svg iconId="icon-avatar" className={styles.icon_avatar} />
  );
  return (
    <div className={styles.user_container}>
      <nav className={styles.user_navigation}>
        <Link className={styles.user_link}>Diary</Link>
        <Link className={styles.user_link}>Products</Link>
        <Link className={styles.user_link}>Exercises</Link>
      </nav>
      <div className={styles.user_data}>
        <Link>
          <Svg iconId="icon-settings" className={styles.icon_settings} />
        </Link>
        <div className={styles.user_avatar}>{avatarLogo}</div>
        <LogoutBtn className={styles.logout_btn} />
      </div>
    </div>
  );
};

export default UserMenu;
