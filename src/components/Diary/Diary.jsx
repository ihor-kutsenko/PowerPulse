import { useState } from 'react';
import Title from 'components/Title/Title';
import DayDashboard from './DayDashboard/DayDashboard';
import DayProducts from './DayProducts/DayProducts';
import DayExercises from './DayExercises/DayExercises';
import DaySwitch from 'components/DaySwitch/DaySwitch';

import formatDate from 'utils/formatDate';
import styles from './Diary.module.scss';

const Diary = () => {
  const [, setSelectedDate] = useState(null);

  const handleDate = async date => {
    const formattedDate = formatDate(date);
    await setSelectedDate(formattedDate);
  };

  return (
    <>
      <div className={styles.wrapper_diary}>
        <div className={styles.wrapper_calendar}>
          <Title text="Diary" className={styles.title} />
          <div className={styles.calendar}>
            <DaySwitch handleDate={handleDate} />
          </div>
        </div>

        <div className={styles.section_diary}>
          <DayDashboard />
          <div>
            <DayProducts />
            <DayExercises />
          </div>
        </div>
      </div>
    </>
  );
};

export default Diary;
