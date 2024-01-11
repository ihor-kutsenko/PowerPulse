import styles from './RadioButton.module.scss';

const RadioButton = ({ id, name, value, checked, label, onChange }) => {
  return (
    <div className={styles.radio}>
      <input
        className={styles.radio__input}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <label className={styles.radio__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
