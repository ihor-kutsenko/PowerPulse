import Title from 'components/Title/Title';
import DayDashboard from './DayDashboard/DayDashboard';
import styles from './Diary.module.scss';

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
        </div>
      </div>
    </>
  );
};

export default Diary;
