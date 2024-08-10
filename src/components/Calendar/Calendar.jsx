import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, forwardRef } from 'react';

import Svg from 'components/Svg/Svg';
import DatePickerStyles from './DatePickerStyles';
import useAuth from 'pages/hooks/useAuth';
import styles from './Calendar.module.scss';

const CustomInput = forwardRef(
  ({ value, onClick, onChange, onKeyDown, error }, ref) => {
    const handleChange = e => {
      onChange(e.target.value);
    };

    let inputStyle = styles.datePicker;
    if (error) {
      inputStyle += ` ${styles.datePickerError}`;
    } else if (!error && value) {
      inputStyle += ` ${styles.datePickerSuccess}`;
    } else {
      inputStyle += ` ${styles.datePickerDefault}`;
    }

    return (
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <input
          ref={ref}
          className={inputStyle}
          value={value}
          onClick={e => {
            onClick();
            onClick(e);
          }}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          readOnly
          style={{ backgroundColor: 'black', color: 'white' }}
        />
      </div>
    );
  }
);

const Calendar = ({ onBirthdayChange }) => {
  const { user } = useAuth();

  const initialDate = user?.profileSettings?.birthday
    ? new Date(user.profileSettings.birthday)
    : new Date('2000-01-01');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [validationError, setValidationError] = useState(null);

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const dayClassName = date => {
    if (date.toDateString() === new Date().toDateString()) {
      return `${styles.currentDate}`;
    }
    return null;
  };

  const handleCalendarChange = date => {
    const today = new Date();

    if (today.getFullYear() - date.getFullYear() < 18) {
      setValidationError('You must be at least 18 years old.');
    } else {
      setValidationError(null);
      setSelectedDate(date);
    }
    onBirthdayChange(date);
    toggleCalendar();
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setCalendarOpen(false);
    }
  };

  const handleIconClick = () => {
    const inputElement = document.querySelector(`.${styles.datePicker}`);
    inputElement.click();
  };

  const calendarClass = validationError
    ? `${styles.customCalendar} ${styles.error}`
    : styles.customCalendar;

  return (
    <div>
      <style>{DatePickerStyles}</style>
      <div className={styles.containerCalendar}>
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          dateFormat="dd.MM.yyyy"
          selected={selectedDate}
          onChange={handleCalendarChange}
          onClickCapture={toggleCalendar}
          maxDate={new Date()}
          calendarClassName={calendarClass}
          dayClassName={dayClassName}
          customInput={
            <CustomInput
              onKeyDown={handleKeyDown}
              error={validationError}
              success={!validationError}
            />
          }
        />
        <Svg
          className={styles.iconCalendar}
          iconId="icon-calendar-white"
          onClick={handleIconClick}
        />
        {validationError && (
          <div className={styles.textCalendarError}>{validationError}</div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
