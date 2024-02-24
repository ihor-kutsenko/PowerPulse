import Svg from 'components/Svg/Svg';

const ExercisesItem = ({ exercise }) => {
  return (
    <div>
      <div>
        <p>workout</p>
        <button>
          Start
          <Svg iconId={'icon-arrow-right'} />
        </button>
      </div>
      <div>
        <Svg iconId={'icon-run'} />
        <h3>{exercise.name}</h3>
      </div>
      <ul>
        <li>
          Burned calories:
          <span>{exercise.burnedCalories}</span>
        </li>
        <li>
          Body pat:
          <span>{exercise.bodyPart}</span>
        </li>
        <li>
          Target:
          <span>{exercise.target}</span>
        </li>
      </ul>
    </div>
  );
};

export default ExercisesItem;
