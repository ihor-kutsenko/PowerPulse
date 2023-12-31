import { Formik, Field, Form } from 'formik';

import Button from 'components/Buttons/Button';
import styles from './UserForm.module.scss';

const UserForm = () => {
  return (
    <div className={styles.form__container}>
      <Formik>
        {formik => (
          <Form>
            {/* Top Field Input */}
            <div className={styles.form__topFieldContainer}>
              <div className={styles.form__topFieldWrapper}>
                <label className={styles.labelInput} htmlFor="name">
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
                <label className={styles.labelInput} htmlFor="email">
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
                  <label className={styles.labelInput} htmlFor="height">
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
                  <label className={styles.labelInput} htmlFor="currentWeight">
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
                  <label className={styles.labelInput} htmlFor="desiredWeight">
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
                  <label className={styles.labelInput} htmlFor="birthday">
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
              <div className={styles.radioContainer}>
                {/* Radio blood inputs */}
                <div className={styles.radioBloodContainer}>
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                  <input type="radio" />
                </div>
                {/* Radio sex inputs */}
                <div className={styles.radioSexContainer}>
                  <p>Sex</p>
                  <input type="radio" />
                  <input type="radio" />
                </div>
              </div>
              {/* {level Actively} */}
              <div className={styles.levelActivity__wrapper}>
                <p>Level Activity</p>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
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
