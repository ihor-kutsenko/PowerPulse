import AddItemDiaryBtn from 'components/Buttons/AddItemDiaryBtn/AddItemDiaryBtn';
import EmptyList from '../EmptyList/EmptyList';
import ProductsTable from '../ProductsTable/ProductsTable';
import { PRODUCTS_ROUTE } from 'routes/constants';

import products from '../../../data/dayproducts.json';
import styles from './DayProducts.module.scss';

const DayProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_scroll}>
        <div className={styles.title_wrapper}>
          <h3 className={styles.title}>Products</h3>
          <AddItemDiaryBtn
            titleLink="Add product"
            titleRoute={PRODUCTS_ROUTE}
          />
        </div>
        {products.length === 0 ? (
          <EmptyList listName={'products'} />
        ) : (
          <ProductsTable products={products} />
        )}
      </div>
    </div>
  );
};

export default DayProducts;
