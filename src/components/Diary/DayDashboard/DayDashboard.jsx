import StatisticsCard from 'components/StatisticsCard/StatisticsCard';
import Svg from 'components/Svg/Svg';

import styles from './DayDashboard.module.scss';

const DayDashboard = () => {
  return (
    <div className={styles.dashboard_wrapper}>
      <ul className={styles.dashboard_list}>
        <StatisticsCard
          statisticsName={'Daily calorie intake'}
          statisticsIcon={'icon-fluent-food'}
          statisticsValue={'2200'}
          statisticsPrimary={true}
        />
        <StatisticsCard
          statisticsName={'Daily physical activity'}
          statisticsIcon={'icon-dumbbell'}
          statisticsValue={'110 min'}
          statisticsPrimary={true}
        />
        <StatisticsCard
          statisticsName={'Calories consumed'}
          statisticsIcon={'icon-apple'}
          statisticsValue={'707'}
        />
        <StatisticsCard
          statisticsName={'Calories burned'}
          statisticsIcon={'icon-calories'}
          statisticsValue={'855'}
        />
        <StatisticsCard
          statisticsName={'Calories remaining'}
          statisticsIcon={'icon-bubble'}
          statisticsValue={'1493'}
        />
        <StatisticsCard
          statisticsName={'Sports remaining'}
          statisticsIcon={'icon-runner'}
          statisticsValue={'85 min'}
        />
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
