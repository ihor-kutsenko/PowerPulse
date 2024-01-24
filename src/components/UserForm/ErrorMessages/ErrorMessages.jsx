import { ErrorMessage } from 'formik';
import styles from './ErrorMessages.module.scss';

const ErrorMessages = ({ nameField }) => {
  return (
    <>
      <ErrorMessage
        className={styles.errorMessage}
        name={nameField}
        component="div"
      />
    </>
  );
};

export default ErrorMessages;
