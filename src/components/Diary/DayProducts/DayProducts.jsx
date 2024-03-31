import AddItemDiaryBtn from 'components/Buttons/AddItemDiaryBtn/AddItemDiaryBtn';
import { PRODUCTS_ROUTE } from 'routes/constants';
import styles from './DayProducts.module.scss';

const DayProducts = () => {
  return (
    <div>
      <div>
        <div>
          <h3 className={styles.title}>Products</h3>
          <AddItemDiaryBtn
            titleLink="Add product"
            titleRoute={PRODUCTS_ROUTE}
          />
        </div>
      </div>
    </div>
  );
};

export default DayProducts;
