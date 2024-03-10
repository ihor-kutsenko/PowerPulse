import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Svg from 'components/Svg/Svg';
import styles from './BasicModalWindow.module.scss';

const modalRoot = document.querySelector('#root-modal');

const BasicModalWindow = ({ children, handleModalToggle }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleModalToggle]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      handleModalToggle();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal_wrapper}>
        <button className={styles.btn_close} onClick={handleModalToggle}>
          <Svg iconId={'icon-close'} className={styles.icon_close} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default BasicModalWindow;
