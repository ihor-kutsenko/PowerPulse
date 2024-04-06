import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Title from 'components/Title/Title';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesList from './ExercisesList/ExercisesList';

import { EXERCISES_ROUTE } from 'routes/constants';
import filters from '../../data/filters.json';

import styles from './Exercises.module.scss';

const Exercises = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Body parts');

  const [currentPage, setCurrentPage] = useState(1);
  const [path, setPath] = useState(location.pathname);

  const handleFilterClick = filter => {
    setActiveFilter(filter);
    setCurrentPage(1);
    navigate(EXERCISES_ROUTE);
  };

  const handleSubcategoryClick = name => {
    setActiveFilter(name);
    setCurrentPage(1);
    navigate(EXERCISES_ROUTE);
  };

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <>
      <div className={styles.wrapper}>
        <Title
          text={path === EXERCISES_ROUTE ? 'Exercises' : activeFilter}
          className={styles.title}
        />
        <ExercisesCategories
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
      </div>
      {path === EXERCISES_ROUTE ? (
        <ExercisesSubcategoriesList
          exercises={filters}
          filter={activeFilter}
          handleFilterClick={handleSubcategoryClick}
          setActiveFilter={setActiveFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <ExercisesList activeFilter={activeFilter} />
      )}
    </>
  );
};

export default Exercises;
