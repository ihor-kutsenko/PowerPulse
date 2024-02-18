import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Svg from 'components/Svg/Svg';
import styles from './BasicModalWindow.module.scss';

const modalRoot = document.querySelector('#root-modal');

const BasicModalWindow = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      onClose();
      document.body.style.overflow = 'visible';
    }
  };
  document.body.style.overflow = 'hidden';

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal_wrapper}>
        <button className={styles.btn_close} onClick={onClose}>
          <Svg iconId={'icon-close'} className={styles.icon_close} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default BasicModalWindow;
