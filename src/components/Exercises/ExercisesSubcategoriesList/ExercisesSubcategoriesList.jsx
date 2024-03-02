import { useNavigate } from 'react-router-dom';

import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Pagination from 'components/Pagination/Pagination';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';

import styles from './ExercisesSubcategoriesList.module.scss';
import { EXERCISES_ROUTE } from 'routes/constants';

const ExercisesSubcategoriesList = ({
  exercises,
  filter,
  handleFilterClick,
  currentPage,
  setCurrentPage,
}) => {
  const navigate = useNavigate();

  const itemsPerPage = useItemsPerPage();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const filteredExercises = exercises.filter(
    exercise => exercise.filter === filter
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredExercises.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handleSubcategoryClick = id => {
    navigate(`${EXERCISES_ROUTE}/${id}`);
  };
  return (
    <PaginationContainer>
      <ul className={styles.exercises_list}>
        {currentItems.map(item => (
          <ExercisesSubcategoriesItem
            key={item._id.$oid}
            ExercisesSubcategoriesItem={item}
            handleFilterClick={handleFilterClick}
            onClick={() => handleSubcategoryClick(item._id.$oid)}
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

export default ExercisesSubcategoriesList;
