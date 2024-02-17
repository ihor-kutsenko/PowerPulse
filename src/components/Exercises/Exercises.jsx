import { useState } from 'react';

import Title from 'components/Title/Title';
import ExercisesNavigation from './ExercisesNavigation/ExercisesNavigation';
import BodyPartList from './ExercisesList/BodyPartList';
import MuscleList from './ExercisesList/MuscleList';
import EquipmentList from './ExercisesList/EquipmentList';

import filters from '../../data/filters.json';
import styles from './Exercises.module.scss';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Title text="Exercises" className={styles.title} />
        <ExercisesNavigation
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </div>
      {activeFilter === 'Body parts' && (
        <BodyPartList
          exercises={filters}
          handleFilterClick={handleFilterClick}
        />
      )}
      {activeFilter === 'Muscles' && (
        <MuscleList exercises={filters} handleFilterClick={handleFilterClick} />
      )}
      {activeFilter === 'Equipment' && (
        <EquipmentList
          exercises={filters}
          handleFilterClick={handleFilterClick}
        />
      )}
    </>
  );
};

export default Exercises;
