import Avatar from './Avatar/Avatar';
import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import styles from './UserCard.module.scss';

const UserCard = () => {
  return (
    <>
      <div className={styles.avatar_wrapper}>
        <Avatar />
        <div className={styles.statistics_wrapper}></div>
        <div className={styles.warning__wrapper}>
          <Svg iconId={'icon-warning'} className={styles.warning__icon} />
          <p className={styles.warning__text}>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </p>
        </div>
        <LogoutBtn className={styles.logout_btn} />
      </div>
    </>
  );
};

export default UserCard;
