import { NavLink } from 'react-router-dom';
import Svg from 'components/Svg/Svg';

import styles from './AddItemDiaryBtn.module.scss';

const AddItemDiaryBtn = ({ titleLink, titleRoute }) => {
  return (
    <>
      <NavLink className={styles.add_link} to={titleRoute}>
        {titleLink}
        <Svg className={styles.icon_right} iconId={'icon-arrow-right'} />
      </NavLink>
    </>
  );
};

export default AddItemDiaryBtn;
