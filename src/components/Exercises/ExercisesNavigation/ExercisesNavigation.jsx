// import React, { useState } from 'react';

import styles from './ExercisesNavigation.module.scss';

const ExercisesNavigation = ({ activeFilter, handleFilterClick }) => {
  return (
    <ul className={styles.exercises_list}>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeFilter === 'Body parts' ? styles.active : ''
          } `}
          onClick={() => handleFilterClick('Body parts')}
        >
          Body parts
        </button>
      </li>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeFilter === 'Muscles' ? styles.active : ''
          }`}
          onClick={() => handleFilterClick('Muscles')}
        >
          Muscles
        </button>
      </li>
      <li>
        <button
          className={`${styles.exercises_btn} ${
            activeFilter === 'Equipment' ? styles.active : ''
          }`}
          onClick={() => handleFilterClick('Equipment')}
        >
          Equipment
        </button>
      </li>
    </ul>
  );
};

export default ExercisesNavigation;
