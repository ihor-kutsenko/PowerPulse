import { useState } from 'react';

import Title from 'components/Title/Title';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import BodyPartList from './ExercisesSubcategoriesList/BodyPartList';
import MuscleList from './ExercisesSubcategoriesList/MuscleList';
import EquipmentList from './ExercisesSubcategoriesList/EquipmentList';

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
        <ExercisesCategories
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
