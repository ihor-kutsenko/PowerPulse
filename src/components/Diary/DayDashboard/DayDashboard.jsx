import StatisticsCard from 'components/StatisticsCard/StatisticsCard';
import Svg from 'components/Svg/Svg';

import styles from './DayDashboard.module.scss';

const DayDashboard = () => {
  return (
    <div className={styles.dashboard_wrapper}>
      <ul className={styles.dashboard_list}>
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
      </ul>
      <div className={styles.warning_wrapper}>
        <Svg iconId={'icon-warning'} className={styles.warning_icon} />
        <p className={styles.warning_text}>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;
