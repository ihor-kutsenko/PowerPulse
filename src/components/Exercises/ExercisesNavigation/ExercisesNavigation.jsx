import React, { useState } from 'react';

import styles from './ExercisesNavigation.module.scss';

const ExercisesNavigation = () => {
  const [activeButton, setActiveButton] = useState('Body parts');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <ul className={styles.exercises_list}>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeButton === 'Body parts' ? styles.active : ''
          } `}
          onClick={() => handleButtonClick('Body parts')}
        >
          Body parts
        </button>
      </li>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeButton === 'Muscles' ? styles.active : ''
          }`}
          onClick={() => handleButtonClick('Muscles')}
        >
          Muscles
        </button>
      </li>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeButton === 'Equipment' ? styles.active : ''
          }`}
          onClick={() => handleButtonClick('Equipment')}
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};

export default ExercisesNavigation;
