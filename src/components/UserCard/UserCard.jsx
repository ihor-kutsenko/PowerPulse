import { useDispatch } from 'react-redux';

import Avatar from './Avatar/Avatar';
import Svg from 'components/Svg/Svg';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import StatisticsCard from 'components/StatisticsCard/StatisticsCard';
import { logOutUser } from 'redux/auth/authOperations';

import styles from './UserCard.module.scss';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { name, avatarURL } = user;

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <div className={styles.avatar_wrapper}>
        <Avatar name={name} avatarURL={avatarURL} />
        <div className={styles.statistics_wrapper}>
          <StatisticsCard
            statisticsName={'Daily calorie intake'}
            statisticsIcon={'icon-fluent-food'}
            statisticsValue={'2200'}
            statisticsPrimary={true}
          />
          <StatisticsCard
            statisticsName={'Daily norm of sports'}
            statisticsValue={'110 min'}
            statisticsIcon={'icon-dumbbell'}
            statisticsPrimary={true}
          />
        </div>
        <div className={styles.warning__wrapper}>
          <Svg iconId={'icon-warning'} className={styles.warning__icon} />
          <p className={styles.warning__text}>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </p>
        </div>
        <LogoutBtn onClick={handleLogout} className={styles.logout_btn} />
      </div>
    </>
  );
};

export default UserCard;
