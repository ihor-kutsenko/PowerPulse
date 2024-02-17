import { useState } from 'react';

import ExercisesItem from '../ExercisesItem/ExercisesItem';
import Pagination from 'components/Pagination/Pagination';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';
import styles from './ExercisesList.module.scss';

const EquipmentList = ({ exercises, handleFilterClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = useItemsPerPage();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const filteredExercises = exercises.filter(
    exercise => exercise.filter === 'Equipment'
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
          <ExercisesItem
            key={item._id.$oid}
            exercisesItem={item}
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

export default EquipmentList;
