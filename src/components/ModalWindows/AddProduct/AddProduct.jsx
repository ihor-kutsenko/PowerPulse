import { Formik, Form, Field } from 'formik';

import AddProductInputSchema from 'schema/addProductInputSchema';
import ErrorMessages from 'components/UserForm/ErrorMessages/ErrorMessages';
import capitalizedWord from 'utils/capitalizedWord';
import styles from './AddProduct.module.scss';

const AddProduct = ({
  product,
  handleModalProduct,
  handleModalSuccess,
  handleSelectedProduct,
}) => {
  const initialValues = {
    amount: '',
  };

  const calculateCalories = amount =>
    Math.round((amount * product.calories) / 100);

  const handleAddToDiary = values => {
    const productToDiary = {
      product: product._id,
      amount: values.amount,
      calories: calculateCalories(values.amount),
    };
    handleModalProduct();
    handleModalSuccess();
    handleSelectedProduct(productToDiary);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={AddProductInputSchema}
        onSubmit={handleAddToDiary}
      >
        {formik => (
          <Form>
            <div className={styles.input_container}>
              <label htmlFor="title">
                <Field
                  className={styles.input_product}
                  id="title"
                  type="text"
                  name="title"
                  value={capitalizedWord(product.title)}
                  disabled
                />
              </label>

              <div
                className={`${styles.input__gramsWrapper} ${
                  formik.errors.amount
                    ? `${styles.error}`
                    : !formik.errors.amount
                    ? `${styles.success}`
                    : ''
                }`}
              >
                <Field
                  className={styles.input_grams}
                  id="title"
                  type="text"
                  name="amount"
                  placeholder="grams"
                  autoFocus
                />
                <ErrorMessages nameField="amount" component="div" />
              </div>
            </div>

            <p className={styles.text}>
              Calories:{' '}
              <span className={styles.text_value}>
                <Field name="amount">
                  {({ field }) => calculateCalories(field.value)}
                </Field>
              </span>
            </p>

            <div className={styles.btn_wrapper}>
              <button
                className={styles.btn_add}
                type="submit"
                disabled={!formik.isValid}
              >
                {' '}
                Add to diary
              </button>
              <button
                className={styles.btn_cancel}
                type="button"
                onClick={handleModalProduct}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
