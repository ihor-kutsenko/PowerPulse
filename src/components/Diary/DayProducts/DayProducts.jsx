import AddItemDiaryBtn from 'components/Buttons/AddItemDiaryBtn/AddItemDiaryBtn';
import { PRODUCTS_ROUTE } from 'routes/constants';
import styles from './DayProducts.module.scss';
import EmptyList from '../EmptyList/EmptyList';

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
        <EmptyList listName={'products'} />
      </div>
    </div>
  );
};

export default DayProducts;
