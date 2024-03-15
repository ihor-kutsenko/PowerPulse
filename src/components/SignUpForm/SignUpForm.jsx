import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';

import Svg from 'components/Svg/Svg';
import Button from 'components/Buttons/Button';
import signUpSchema from 'schema/signUpSchema';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form className={styles.form}>
            <div className={styles.formWrapper}>
              <div
                className={`${styles.fieldWrapper} ${
                  formik.touched.name && formik.errors.name
                    ? `${styles.error}`
                    : formik.touched.name && !formik.errors.name
                    ? `${styles.success}`
                    : ''
                }`}
              >
                <Field
                  className={styles.field}
                  type="name"
                  name="name"
                  placeholder="Name"
                />
                <div className={styles.messageWrapper}>
                  <Svg
                    data-status="error"
                    className={styles.svgError}
                    iconId={'icon-error'}
                  />

                  <ErrorMessage
                    className={styles.errorMessage}
                    name="name"
                    component="div"
                  />
                </div>

                {formik.touched.name && !formik.errors.name && (
                  <div className={styles.messageWrapper}>
                    <Svg
                      data-status="success"
                      className={styles.svgSuccess}
                      iconId={'icon-success'}
                    />
                    <div className={styles.successMessage}>Success name</div>
                  </div>
                )}
              </div>

              <div
                className={`${styles.fieldWrapper} ${
                  formik.touched.email && formik.errors.email
                    ? `${styles.error}`
                    : formik.touched.email && !formik.errors.email
                    ? `${styles.success}`
                    : ''
                }`}
              >
                <Field
                  className={styles.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <div className={styles.messageWrapper}>
                  <Svg
                    data-status="error"
                    className={styles.svgError}
                    iconId={'icon-error'}
                  />

                  <ErrorMessage
                    className={styles.errorMessage}
                    name="email"
                    component="div"
                  />
                </div>

                {formik.touched.email && !formik.errors.email && (
                  <div className={styles.messageWrapper}>
                    <Svg
                      data-status="success"
                      className={styles.svgSuccess}
                      iconId={'icon-success'}
                    />
                    <div className={styles.successMessage}>Success email</div>
                  </div>
                )}
              </div>

              <div
                className={`${styles.fieldWrapper} ${
                  formik.touched.password && formik.errors.password
                    ? `${styles.error}`
                    : formik.touched.password && !formik.errors.password
                    ? `${styles.success}`
                    : ''
                }`}
              >
                <Field
                  className={styles.field}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />

                <div className={styles.messageWrapper}>
                  <Svg
                    data-status="error"
                    className={styles.svgError}
                    iconId={'icon-error'}
                  />

                  <ErrorMessage
                    className={styles.errorMessage}
                    name="password"
                    component="div"
                  />
                </div>

                {formik.touched.password && !formik.errors.password && (
                  <div className={styles.messageWrapper}>
                    <Svg
                      data-status="success"
                      className={styles.svgSuccess}
                      iconId={'icon-success'}
                    />
                    <div className={styles.successMessage}>
                      Success password
                    </div>
                  </div>
                )}
                <button
                  className={styles.buttonEye}
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Svg className={styles.svgEye} iconId={'icon-eye'} />
                  ) : (
                    <Svg className={styles.svgEye} iconId={'icon-eye-off'} />
                  )}
                </button>
              </div>
            </div>
            <Button type="submit" text="Sign Up" className={styles.button} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
