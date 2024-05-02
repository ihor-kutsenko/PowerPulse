import { forwardRef, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Svg from 'components/Svg/Svg';
import DatePickerStyles from './DatePickerStyles';
import styles from './DaySwitch.module.scss';

const CustomInput = forwardRef(
  ({ value, onClick, onChange, onKeyDown }, ref) => {
    const handleChange = e => {
      onChange(e.target.value);
    };

    return (
      <div>
        <input
          ref={ref}
          className={styles.calendar_input}
          value={value}
          onClick={e => {
            onClick(e);
          }}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          readOnly
        />
      </div>
    );
  }
);

const DaySwitch = ({ handleDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const userRegistrationDate = new Date('01-05-2024');

  useEffect(() => {
    handleDate(selectedDate);
  }, [selectedDate, handleDate]);

  const handleKeyDown = event => {
    if (event.key === 'Escape' && calendarOpen) {
      setCalendarOpen(false);
    }
  };

  const handlePrevDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setHours(0, 0, 0, 0);
    if (prevDate > userRegistrationDate) {
      prevDate.setDate(prevDate.getDate() - 1);
      setSelectedDate(prevDate);
    }
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (nextDate <= new Date()) {
      setSelectedDate(nextDate);
    }
  };

  const handleCalendarChange = date => {
    setSelectedDate(date);
  };

  const currentDayClassName = date => {
    if (date.toDateString() === new Date().toDateString()) {
      return `${styles.currentDate}`;
    }
    return null;
  };

  const handleIconClick = () => {
    const inputElement = document.querySelector(`.${styles.calendar_input}`);
    inputElement.click();
  };

  return (
    <div>
      <style>{DatePickerStyles}</style>
      <div className={styles.daySwitch}>
        <div className={styles.input_wrapper} onClick={handleIconClick}>
          <DatePicker
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            onChange={handleCalendarChange}
            onKeyDown={handleKeyDown}
            minDate={userRegistrationDate}
            maxDate={new Date()}
            calendarClassName={styles.customCalendar}
            dayClassName={currentDayClassName}
            customInput={<CustomInput />}
            onClickOutside={() => setCalendarOpen(false)}
          />
          <div>
            <Svg className={styles.icon_calendar} iconId={'icon-calendar'} />
          </div>
        </div>
        <div className={styles.icon_wrapper}>
          <Svg
            className={`${styles.icon_chevron} ${styles.icon_left}`}
            iconId={'icon-chevron'}
            onClick={handlePrevDay}
          />
          <Svg
            className={styles.icon_chevron}
            iconId={'icon-chevron'}
            onClick={handleNextDay}
          />
        </div>
      </div>
    </div>
  );
};

export default DaySwitch;
