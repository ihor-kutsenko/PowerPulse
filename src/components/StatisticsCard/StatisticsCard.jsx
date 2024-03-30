import PropTypes from 'prop-types';

import Svg from 'components/Svg/Svg';
import styles from './StatisticsCard.module.scss';

const StatisticsCard = ({
  statisticsName,
  statisticsIcon,
  statisticsValue,
  statisticsPrimary,
  fulfilledNorm = '',
}) => {
  const statClasses = [
    styles.statistics__wrapper,
    statisticsPrimary && styles.statisticsPrimaryItem,
  ];

  if (fulfilledNorm === 'positive') {
    statClasses.push(styles.statisticItemPositive);
  } else if (fulfilledNorm === 'negative') {
    statClasses.push(styles.statisticItemNegative);
  }

  return (
    <>
      <div className={statClasses.join(' ')}>
        <div className={styles.statistics__titleWrapper}>
          <Svg className={styles.statistics__icon} iconId={statisticsIcon} />
          <p
            className={`${styles.statistics__title} ${
              statisticsPrimary && styles.statisticsPrimaryTitle
            }`}
          >
            {statisticsName}
          </p>
        </div>
        <div className={styles.statistics__value}>{statisticsValue}</div>
      </div>
    </>
  );
};

export default StatisticsCard;

StatisticsCard.propTypes = {
  statisticsName: PropTypes.string.isRequired,
  statisticsIcon: PropTypes.string.isRequired,
  statisticsValue: PropTypes.string.isRequired,
  statisticsPrimary: PropTypes.bool,
};
