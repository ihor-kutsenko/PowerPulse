import styles from './ProductsNotFound.module.scss';

const ProductsNotFound = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span className={styles.warningText}>
            Sorry, no results were found{' '}
          </span>
          for the product filters you selected. You may want to consider other
          search options to find the product you want. Our range is wide and you
          have the opportunity to find more options that suit your needs.
        </p>
        <p className={styles.text}>
          <span className={styles.warningText}>
            Try changing the search parameters.
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductsNotFound;
