import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Buttons/Button';
import RadioButton from './RadioButton.jsx/RadioButton';
import ErrorMessages from './ErrorMessages/ErrorMessages';

import {
  bloodOptions,
  sexOptions,
  levelOptions,
} from './RadioButton.jsx/radioOptions';

import useAuth from 'pages/hooks/useAuth';
import { updateProfileSettings } from 'redux/auth/authOperations';
import userFormSchema from 'schema/userFormSchema';

import styles from './UserForm.module.scss';

const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const { name, profileSettings, isLoading } = user;
  const {
    height = 0,
    currentWeight = 0,
    desiredWeight = 0,
    blood = 0,
    sex = '',
    levelActivity = 0,
  } = profileSettings || {};

  const birthdayDate = profileSettings
    ? new Date(profileSettings.birthday)
    : new Date('2022-01-01');

  const formattedBirthday = `${birthdayDate.getFullYear()}-${String(
    birthdayDate.getMonth() + 1
  ).padStart(2, '0')}-${String(birthdayDate.getDate()).padStart(2, '0')}`;

  const initialValues = {
    name,
    email: user.email,
    height,
    currentWeight,
    desiredWeight,
    birthday: formattedBirthday,
    blood,
    sex: sex.toString(),
    levelActivity,
  };

  const handleSubmit = values => {
    const data = {
      name: values.name,
      profileSettings: {
        height: values.height,
        currentWeight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        birthday: new Date(values.birthday).toISOString(),
        blood: values.blood,
        sex: values.sex,
        levelActivity: values.levelActivity,
      },
    };
    dispatch(updateProfileSettings(data));
  };

  return (
    <div className={styles.form__container}>
      <Formik
        initialValues={initialValues}
        validationSchema={userFormSchema}
        onSubmit={handleSubmit}
      >
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
                  <Calendar
                    minDate={new Date('1900-01-01')}
                    selected={formik.values.birthday}
                    onBirthdayChange={date =>
                      formik.setFieldValue('birthday', date)
                    }
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
            <Button
              className={styles.btn_save}
              type="submit"
              text="Save"
              disabled={
                isLoading ||
                !formik.isValid ||
                !formik.dirty ||
                !formik.values.blood ||
                !formik.values.sex ||
                !formik.values.levelActivity
              }
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
