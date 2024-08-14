import { useSelector } from 'react-redux';

import {
  selectExercisesCategory,
  selectExercisesItemsCategory,
  selectExercisesTotalRecords,
  selectExercisesGetMore,
  selectExercisesPage,
  selectExercisesIsLoading,
  selectExercisesError,
} from 'redux/exercises/exercisesSelectors';

const useExercise = () => {
  const exercisesCategory = useSelector(selectExercisesCategory);
  const exercisesItemsCategory = useSelector(selectExercisesItemsCategory);
  const exercisesTotalRecords = useSelector(selectExercisesTotalRecords);
  const exercisesGetMore = useSelector(selectExercisesGetMore);
  const exercisesPage = useSelector(selectExercisesPage);
  const exercisesIsLoading = useSelector(selectExercisesIsLoading);
  const exercisesError = useSelector(selectExercisesError);

  return {
    exercisesCategory,
    exercisesItemsCategory,
    exercisesTotalRecords,
    exercisesGetMore,
    exercisesPage,
    exercisesIsLoading,
    exercisesError,
  };
};

export default useExercise;
