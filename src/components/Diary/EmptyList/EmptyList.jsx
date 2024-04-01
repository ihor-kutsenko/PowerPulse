import styles from './EmptyList.module.scss';

const EmptyList = ({ listName }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Not found {listName}</p>
    </div>
  );
};

export default EmptyList;
