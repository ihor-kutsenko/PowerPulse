import { Link } from 'react-router-dom';
import { EXERCISES_ROUTE } from 'routes/constants';
import capitalizedWord from 'utils/capitalizedWord';
import styles from './ExercisesSubcategoriesItem.module.scss';

const ExercisesSubcategoriesItem = ({
  ExercisesSubcategoriesItem,
  onClick,
}) => {
  const { _id, name, filter, imgURL } = ExercisesSubcategoriesItem;
  return (
    <li className={styles.exercises_item} onClick={onClick}>
      <Link to={`${EXERCISES_ROUTE}/${_id.$oid}`}>
        <img src={imgURL} alt={name} className={styles.exercises_img} />
        <div className={styles.container}>
          <h3 className={styles.title}>{capitalizedWord(name)}</h3>
          <p className={styles.text}>{filter}</p>
        </div>
      </Link>
    </li>
  );
};

export default ExercisesSubcategoriesItem;
