import Title from 'components/Title/Title';
import DayDashboard from './DayDashboard/DayDashboard';
import DayProducts from './DayProducts/DayProducts';
import styles from './Diary.module.scss';
import DayExercises from './DayExercises/DayExercises';

const Diary = () => {
  return (
    <>
      <div className={styles.wrapper_diary}>
        <div className={styles.wrapper_calendar}>
          <Title text="Diary" className={styles.title} />
          <div>Calendar</div>
        </div>

        <div className={styles.section_diary}>
          <DayDashboard />
          <DayProducts />
          <DayExercises />
        </div>
      </div>
    </>
  );
};

export default Diary;
