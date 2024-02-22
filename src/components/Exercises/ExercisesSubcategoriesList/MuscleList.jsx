import { useState } from 'react';

import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Pagination from 'components/Pagination/Pagination';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';
import styles from './ExercisesList.module.scss';

const MuscleList = ({ exercises, handleFilterClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useItemsPerPage();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const filteredExercises = exercises.filter(
    exercise => exercise.filter === 'Muscles'
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExercises.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <PaginationContainer>
      <ul className={styles.exercises_list}>
        {currentItems.map(item => (
          <ExercisesSubcategoriesItem
            key={item._id.$oid}
            ExercisesSubcategoriesItem={item}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </ul>
      {itemsPerPage < filteredExercises.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredExercises.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

export default MuscleList;
