import { useState } from 'react';

import Title from 'components/Title/Title';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList';

import filters from '../../data/filters.json';
import styles from './Exercises.module.scss';

const Exercises = () => {
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterClick = filter => {
    setActiveFilter(filter);
    setCurrentPage(1);
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
      <ExercisesSubcategoriesList
        exercises={filters}
        filter={activeFilter}
        handleFilterClick={handleFilterClick}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Exercises;
