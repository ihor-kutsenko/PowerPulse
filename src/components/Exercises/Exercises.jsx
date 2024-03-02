import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { EXERCISES_ROUTE } from 'routes/constants';

import Title from 'components/Title/Title';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesList from './ExercisesList/ExercisesList';

import filters from '../../data/filters.json';
import styles from './Exercises.module.scss';

const Exercises = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [path, setPath] = useState(location.pathname);

  const handleFilterClick = (filter, bodyPart) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    navigate(EXERCISES_ROUTE);
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className={styles.wrapper}>
        <Title text="Exercises" className={styles.title} />
        <ExercisesCategories
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </div>
      {path === EXERCISES_ROUTE ? (
        <ExercisesSubcategoriesList
          exercises={filters}
          filter={activeFilter}
          handleFilterClick={handleFilterClick}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <ExercisesList />
      )}
    </>
  );
};

export default Exercises;
