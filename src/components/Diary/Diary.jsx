import Title from 'components/Title/Title';
import DayDashboard from './DayDashboard/DayDashboard';
import DayProducts from './DayProducts/DayProducts';
import DayExercises from './DayExercises/DayExercises';
import styles from './Diary.module.scss';

const Diary = () => {
  return (
    <>
      <div className={styles.wrapper_diary}>
        <div className={styles.wrapper_calendar}>
          <Title text="Diary" className={styles.title} />
          <div className={styles.calendar}>Calendar</div>
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
