import StatisticsCard from 'components/StatisticsCard/StatisticsCard';
import Svg from 'components/Svg/Svg';

import styles from './DayDashboard.module.scss';

const DayDashboard = () => {
  let dailyCalorieIntake = 2200;
  let dailyPhysicalActivity = 110;
  let caloriesConsumed = 2300;
  let caloriesBurned = 855;
  let caloriesRemaining = dailyCalorieIntake - caloriesConsumed;
  let sportsRemaining = 30;

  const isCaloriesRemaining =
    caloriesConsumed < dailyCalorieIntake ? `positive` : `negative`;
  const isSportsRemaining = sportsRemaining > 0 ? `positive` : `negative`;

  return (
    <div className={styles.dashboard_wrapper}>
      <ul className={styles.dashboard_list}>
        <StatisticsCard
          statisticsName={'Daily calorie intake'}
          statisticsIcon={'icon-fluent-food'}
          statisticsValue={`${dailyCalorieIntake}`}
          statisticsPrimary={true}
        />
        <StatisticsCard
          statisticsName={'Daily physical activity'}
          statisticsIcon={'icon-dumbbell'}
          statisticsValue={`${dailyPhysicalActivity} min`}
          statisticsPrimary={true}
        />
        <StatisticsCard
          statisticsName={'Calories consumed'}
          statisticsIcon={'icon-apple'}
          statisticsValue={`${caloriesConsumed}`}
        />
        <StatisticsCard
          statisticsName={'Calories burned'}
          statisticsIcon={'icon-calories'}
          statisticsValue={`${caloriesBurned}`}
        />
        <StatisticsCard
          statisticsName={'Calories remaining'}
          statisticsIcon={'icon-bubble'}
          statisticsValue={`${caloriesRemaining}`}
          fulfilledNorm={isCaloriesRemaining}
        />
        <StatisticsCard
          statisticsName={'Sports remaining'}
          statisticsIcon={'icon-runner'}
          statisticsValue={
            isSportsRemaining === 'positive'
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }
          fulfilledNorm={isSportsRemaining}
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
