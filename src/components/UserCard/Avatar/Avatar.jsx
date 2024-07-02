import { useDispatch } from 'react-redux';

import Svg from 'components/Svg/Svg';

import { uploadAvatar } from 'redux/avatar/avatarOperations';
import { setAvatarURL } from 'redux/auth/authSlice';

import styles from './Avatar.module.scss';

const Avatar = ({ name, avatarURL }) => {
  const dispatch = useDispatch();

  const avatarLogo = (
    <Svg iconId={'icon-avatar'} className={styles.iconAvatar} />
  );

  const userAvatar = (
    <img
      src={avatarURL}
      alt="Avatar"
      style={{ borderRadius: '100%', width: '100%', height: '100%' }}
    />
  );

  const handleChangeAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      dispatch(setAvatarURL(objectURL));
    }

    dispatch(uploadAvatar(file));
  };

  return (
    <>
      <div className={styles.avatar__wrapper}>
        <div className={styles.avatar__logo}>
          {avatarURL ? userAvatar : avatarLogo}
        </div>
        <form>
          <input
            type="file"
            name="file"
            id="inputFile"
            style={{ display: 'none' }}
            onChange={handleChangeAvatar}
          />
          <label htmlFor="inputFile" style={{ cursor: 'pointer' }}>
            <Svg iconId={'icon-add-avatar'} className={styles.icon_upload} />
          </label>
        </form>
        <p className={styles.text_userName}>{name}</p>
        <p className={styles.text_user}>User</p>
      </div>
    </>
  );
};

export default Avatar;
