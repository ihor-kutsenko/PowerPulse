import { nanoid } from 'nanoid';

import Svg from 'components/Svg/Svg';
import capitalizedWord from 'utils/capitalizedWord';
import styles from './ExercisesTable.module.scss';

const ExercisesTable = ({ exercises }) => {
  return (
    <ul className={styles.list}>
      {exercises.map(
        ({ _id, bodyPart, equipment, name, target, burnedCalories, time }) => {
          return (
            <li key={nanoid()} className={styles.item}>
              <table className={styles.table}>
                <tbody className={styles.table_body}>
                  <tr className={styles.element}>
                    <th className={styles.title}>Body Part</th>
                    <td className={styles.value}>
                      {capitalizedWord(bodyPart)}
                    </td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Equipment</th>
                    <td className={styles.value}>
                      {capitalizedWord(equipment)}
                    </td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Name</th>
                    <td className={styles.value}>{capitalizedWord(name)}</td>
                  </tr>
                </tbody>

                <tbody className={styles.product_wrapper}>
                  <tr className={styles.element}>
                    <th className={styles.title}>Target</th>
                    <td className={styles.value}>{target}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Burned Calories</th>
                    <td className={styles.value}>{burnedCalories}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Time</th>
                    <td className={styles.value}>{time}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={`${styles.title} ${styles.title_trash}`}>
                      Trash
                    </th>
                    <td className={styles.value_trash}>
                      <Svg
                        className={styles.icon_trash}
                        iconId={'icon-trash'}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ExercisesTable;
