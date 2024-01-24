import { Formik, Field, Form } from 'formik';

import Button from 'components/Buttons/Button';
import RadioButton from './RadioButton.jsx/RadioButton';
import ErrorMessages from './ErrorMessages/ErrorMessages';

import {
  bloodOptions,
  sexOptions,
  levelOptions,
} from './RadioButton.jsx/radioOptions';

import userFormSchema from 'schema/userFormSchema';

import styles from './UserForm.module.scss';

const UserForm = () => {
  const initialValues = {
    name: '',
    email: 'user@example.com',
    height: '',
    currentWeight: '',
    desiredWeight: '',
    birthday: '',
    blood: '',
    sex: '',
    levelActivity: '',
  };
  return (
    <div className={styles.form__container}>
      <Formik initialValues={initialValues} validationSchema={userFormSchema}>
        {formik => (
          <Form>
            {/* Top Field Input */}
            <div className={styles.form__topFieldContainer}>
              <div
                className={`${styles.form__topFieldWrapper} ${
                  formik.touched.name && formik.errors.name
                    ? `${styles.error}`
                    : formik.touched.name && !formik.errors.name
                    ? `${styles.success}`
                    : ''
                }`}
              >
                <label className={styles.form__labelInput} htmlFor="name">
                  Name
                </label>
                <Field
                  className={styles.form__input}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Your name"
                />
                <ErrorMessages nameField="name" />
              </div>
              <div className={styles.form__topFieldWrapper}>
                <label className={styles.form__labelInput} htmlFor="email">
                  Email
                </label>
                <Field
                  className={`${styles.form__input} ${styles.form__inputEmail}`}
                  type="text"
                  name="email"
                  id="email"
                  readOnly
                  disabled
                />
              </div>
            </div>

            {/* Inputs - height, weight, birthday */}
            <div className={styles.input__container}>
              <div className={styles.input__wrapper}>
                <div
                  className={`${styles.input__fieldContainer} ${
                    formik.touched.height && formik.errors.height
                      ? `${styles.error}`
                      : formik.touched.height && !formik.errors.height
                      ? `${styles.success}`
                      : ''
                  }`}
                >
                  <label className={styles.form__labelInput} htmlFor="height">
                    Height
                  </label>
                  <Field
                    className={styles.input__field}
                    type="number"
                    name="height"
                    id="height"
                    placeholder=""
                  />
                  <ErrorMessages nameField="height" />
                </div>
                <div
                  className={`${styles.input__fieldContainer} ${
                    formik.touched.currentWeight && formik.errors.currentWeight
                      ? `${styles.error}`
                      : formik.touched.currentWeight &&
                        !formik.errors.currentWeight
                      ? `${styles.success}`
                      : ''
                  }`}
                >
                  <label
                    className={styles.form__labelInput}
                    htmlFor="currentWeight"
                  >
                    CurrentWeight
                  </label>
                  <Field
                    className={styles.input__field}
                    type="number"
                    name="currentWeight"
                    id="currentWeight"
                    placeholder=""
                  />
                  <ErrorMessages nameField="currentWeight" />
                </div>
              </div>

              <div className={styles.input__wrapper}>
                <div
                  className={`${styles.input__fieldContainer} ${
                    formik.touched.desiredWeight && formik.errors.desiredWeight
                      ? `${styles.error}`
                      : formik.touched.desiredWeight &&
                        !formik.errors.desiredWeight
                      ? `${styles.success}`
                      : ''
                  }`}
                >
                  <label
                    className={styles.form__labelInput}
                    htmlFor="desiredWeight"
                  >
                    DesiredWeight
                  </label>
                  <Field
                    className={styles.input__field}
                    type="number"
                    name="desiredWeight"
                    id="desiredWeight"
                    placeholder=""
                  />
                  <ErrorMessages nameField="desiredWeight" />
                </div>
                <div
                  className={`${styles.input__fieldContainer} ${
                    formik.touched.birthday && formik.errors.birthday
                      ? `${styles.error}`
                      : formik.touched.birthday && !formik.errors.birthday
                      ? `${styles.success}`
                      : ''
                  }`}
                >
                  <label className={styles.form__labelInput} htmlFor="birthday">
                    Birthday
                  </label>
                  <Field
                    className={styles.input__field}
                    type="date"
                    name="birthday"
                    id="birthday"
                    placeholder=""
                  />
                  <ErrorMessages nameField="birthday" />
                </div>
              </div>
            </div>

            {/* Radio inputs */}
            <p className={styles.titleBlood}>Blood</p>
            <div className={styles.radio__wrapper}>
              <div className={styles.radio__container}>
                {/* Radio blood inputs */}
                <div className={styles.radio__bloodContainer}>
                  {bloodOptions.map(option => (
                    <RadioButton
                      key={option.id}
                      id={option.id}
                      name="blood"
                      value={option.value}
                      label={option.label}
                      checked={formik.values.blood === option.value}
                      onChange={() =>
                        formik.setFieldValue('blood', option.value)
                      }
                    />
                  ))}
                </div>
                {/* Radio sex inputs */}
                <div className={styles.radio__sexContainer}>
                  {sexOptions.map(option => (
                    <RadioButton
                      key={option.id}
                      id={option.id}
                      name="sex"
                      value={option.value}
                      label={option.label}
                      checked={formik.values.sex === option.value}
                      onChange={() => formik.setFieldValue('sex', option.value)}
                    />
                  ))}
                </div>
              </div>
              {/* {level Actively} */}
              <div className={styles.radio__levelActivityContainer}>
                {levelOptions.map(option => (
                  <RadioButton
                    key={option.id}
                    id={option.id}
                    name="levelActivity"
                    value={option.value}
                    label={option.label}
                    checked={formik.values.levelActivity === option.value}
                    onChange={() =>
                      formik.setFieldValue('levelActivity', option.value)
                    }
                  />
                ))}
              </div>
            </div>
            <Button className={styles.btn_save} type="submit" text="Save" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
