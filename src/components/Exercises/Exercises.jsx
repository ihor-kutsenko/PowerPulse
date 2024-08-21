import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Title from 'components/Title/Title';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import ExercisesSubcategoriesList from './ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import ExercisesList from './ExercisesList/ExercisesList';

import { EXERCISES_ROUTE } from 'routes/constants';
import { fetchExercisesCategories } from 'redux/exercises/exercisesOperations';
import useItemsPerPage from 'components/Pagination/PaginationHooks';
// import filters from '../../data/filters.json';

import styles from './Exercises.module.scss';

const Exercises = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState('Body parts');
  const [currentPage, setCurrentPage] = useState(1);
  const [path, setPath] = useState(location.pathname);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    dispatch(
      fetchExercisesCategories({
        type: activeFilter,
        page: currentPage,
        limit: itemsPerPage,
      })
    );
  }, [dispatch, activeFilter, currentPage, itemsPerPage]);

  const handleFilterClick = filter => {
    setActiveFilter(filter);
    setCurrentPage(1);
    navigate(EXERCISES_ROUTE);
  };

  const handleSubcategoryClick = id => {
    setActiveFilter(id);
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
          filter={activeFilter}
          handleFilterClick={handleSubcategoryClick}
          setActiveFilter={setActiveFilter}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <ExercisesList activeFilter={activeFilter} filter={activeFilter} />
      )}
    </>
  );
};

export default Exercises;
