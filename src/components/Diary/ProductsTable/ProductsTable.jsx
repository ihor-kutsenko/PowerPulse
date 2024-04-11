import { nanoid } from 'nanoid';

import Svg from 'components/Svg/Svg';
import styles from './ProductsTable.module.scss';

const ProductsTable = ({ products }) => {
  return (
    <ul className={styles.list}>
      {products.map(
        ({ _id, title, category, calories, amount, recommended }) => {
          return (
            <li key={nanoid()}>
              <table>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{category}</td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <th>Calories</th>
                    <td>{calories}</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{amount}</td>
                  </tr>
                  <tr>
                    <th>Recommend</th>
                    <td>{recommended}</td>
                  </tr>
                  <tr>
                    <th>Trash</th>
                    <td>
                      <Svg iconId={'icon-trash'} />
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
