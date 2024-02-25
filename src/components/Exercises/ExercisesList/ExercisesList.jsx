import exercises from '../../../data/exercises.json';
import ExercisesItem from '../ExercisesItem/ExercisesItem';

const ExercisesList = () => {
  return (
    <div>
      <div>
        {exercises.map(exercise => (
          <ExercisesItem key={exercise._id.$oid} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;
