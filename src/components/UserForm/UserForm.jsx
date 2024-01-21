import { Formik, Field, Form } from 'formik';

import Button from 'components/Buttons/Button';
import RadioButton from './RadioButton.jsx/RadioButton';

import {
  bloodOptions,
  sexOptions,
  levelOptions,
} from './RadioButton.jsx/radioOptions';
import styles from './UserForm.module.scss';

const UserForm = () => {
  const initialValues = {
    name: '',
    email: '',
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
      <Formik initialValues={initialValues}>
        {formik => (
          <Form>
            {/* Top Field Input */}
            <div className={styles.form__topFieldContainer}>
              <div className={styles.form__topFieldWrapper}>
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
              </div>
              <div className={styles.form__topFieldWrapper}>
                <label className={styles.form__labelInput} htmlFor="email">
                  Email
                </label>
                <Field
                  className={styles.form__input}
                  type="text"
                  name="email"
                  id="email"
                  readOnly
                  disabled
                />
              </div>
            </div>

            {/* Iputs - height, weight, birthday */}
            <div className={styles.input__container}>
              <div className={styles.input__wrapper}>
                <div className={styles.input__fieldContainer}>
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
                </div>
                <div className={styles.input__fieldContainer}>
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
                </div>
              </div>

              <div className={styles.input__wrapper}>
                <div className={styles.input__fieldContainer}>
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
                </div>
                <div className={styles.input__fieldContainer}>
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
