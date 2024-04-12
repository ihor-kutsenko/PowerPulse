import { nanoid } from 'nanoid';

import Svg from 'components/Svg/Svg';
import capitalizedWord from 'utils/capitalizedWord';
import styles from './ProductsTable.module.scss';

const ProductsTable = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map(
        ({ _id, title, category, calories, weight, groupBloodNotAllowed }) => {
          const recommended = Object.values(groupBloodNotAllowed).some(
            value => !value
          );
          return (
            <li key={nanoid()} className={styles.item}>
              <table className={styles.table}>
                <tbody className={styles.table_body}>
                  <tr className={styles.element}>
                    <th className={styles.title}>Title</th>
                    <td className={styles.value}>{capitalizedWord(title)}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Category</th>
                    <td className={styles.value}>
                      {capitalizedWord(category)}
                    </td>
                  </tr>
                </tbody>

                <tbody className={styles.product_wrapper}>
                  <tr className={styles.element}>
                    <th className={styles.title}>Calories</th>
                    <td className={styles.value}>{calories}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Weight</th>
                    <td className={styles.value}>{weight}</td>
                  </tr>
                  <tr className={styles.element}>
                    <th className={styles.title}>Recommend</th>
                    <td className={styles.value}>
                      <div className={styles.recommend_wrapper}>
                        <span
                          className={
                            recommended
                              ? `${styles.recommend_yes}`
                              : `${styles.recommend_not}`
                          }
                        ></span>
                        {recommended ? 'Yes' : 'No'}
                      </div>
                    </td>
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

export default ProductsTable;
