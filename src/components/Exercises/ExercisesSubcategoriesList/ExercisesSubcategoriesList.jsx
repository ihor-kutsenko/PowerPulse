import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import Pagination from 'components/Pagination/Pagination';
import PaginationContainer from 'components/Pagination/PaginationContainer';
import useItemsPerPage from 'components/Pagination/PaginationHooks';

import { EXERCISES_ROUTE } from 'routes/constants';
import useExercise from 'hooks/useExercise';
import {
  fetchExercisesCategories,
  fetchExercisesItemsCategories,
} from 'redux/exercises/exercisesOperations';

import styles from './ExercisesSubcategoriesList.module.scss';

const ExercisesSubcategoriesList = ({
  filter,
  handleFilterClick,
  currentPage,
  setCurrentPage,
  setActiveFilter,
}) => {
  const { exercisesCategory, exercisesTotalRecords } = useExercise();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsPerPage = useItemsPerPage();

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    dispatch(
      fetchExercisesCategories({
        type: filter,
        page: newPage,
        limit: itemsPerPage,
      })
    );
  };

  const handleSubcategoryClick = id => {
    dispatch(
      fetchExercisesItemsCategories({
        id: id,
        page: 1,
        limit: 100,
      })
    );
    navigate(`${EXERCISES_ROUTE}/${id}`);
  };

  return (
    <PaginationContainer>
      <ul className={styles.exercises_list}>
        {exercisesCategory.map(item => (
          <ExercisesSubcategoriesItem
            key={item._id}
            ExercisesSubcategoriesItem={item}
            handleFilterClick={handleFilterClick}
            onClick={() => handleSubcategoryClick(item._id)}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </ul>
      {itemsPerPage < exercisesTotalRecords && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={exercisesTotalRecords}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

export default ExercisesSubcategoriesList;
