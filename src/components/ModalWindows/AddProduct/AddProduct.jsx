import { Formik, Form, Field } from 'formik';
import AddProductInputSchema from 'schema/addProductInputSchema';
import styles from './AddProduct.module.scss';
import ErrorMessages from 'components/UserForm/ErrorMessages/ErrorMessages';

const AddProduct = () => {
  const initialValues = {
    amount: '',
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={AddProductInputSchema}
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
                  value={'banana'}
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
              Calories: <span className={styles.text_value}>50</span>
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
              <button className={styles.btn_cancel} type="button">
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
