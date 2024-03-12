import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState, useEffect } from 'react';

import Svg from 'components/Svg/Svg';

import formatTimeTimer from 'utils/formatTimeTimer';
import styles from './Timer.module.scss';

const Timer = ({
  time,
  burnedCalories,
  dynamicCalories,
  setDynamicCalories,
  exerciseTime,
  setExerciseTime,
}) => {
  const [key, setKey] = useState(0);
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [restTime, setRestTime] = useState('');

  const handleToggleTimer = () => {
    setIsTimerPlaying(prevState => !prevState);
    setKey(prevKey => prevKey + 1);
  };

  const handleBurnedCalories = ({ remainingTime }) => {
    const duration = Number(time) * 60;
    const exTime = Number(duration - remainingTime);
    setExerciseTime(exTime);
    const dynamicBurnedCalories = Math.floor(
      (exerciseTime * burnedCalories) / duration
    );
    setDynamicCalories(dynamicBurnedCalories);
  };

  useEffect(() => {
    if (isTimerPlaying) {
      const timer = setInterval(() => {
        setRestTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isTimerPlaying]);

  return (
    <div>
      <CountdownCircleTimer
        key={key}
        size={124}
        isPlaying={isTimerPlaying}
        duration={time * 60}
        colors="#e6533c"
        strokeWidth={4}
        trailColor=" rgba(239, 237, 232, 0.3)"
        initialRemainingTime={time * 60 + restTime}
        onUpdate={remainingTime => {
          handleBurnedCalories({ remainingTime });
        }}
      >
        {({ remainingTime }) => <div>{formatTimeTimer(remainingTime)}</div>}
      </CountdownCircleTimer>
      <div className={styles.btn_wrapper}>
        <button className={styles.btn_timer} onClick={handleToggleTimer}>
          <Svg
            iconId={isTimerPlaying ? 'Pause' : 'Polygon'}
            className={styles.icon_timer}
          />
        </button>
        <p className={styles.text}>
          Burned calories:
          <span className={styles.calories}>{dynamicCalories}</span>
        </p>
      </div>
    </div>
  );
};

export default Timer;
