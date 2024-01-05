import Svg from 'components/Svg/Svg';
import styles from './Avatar.module.scss';

const Avatar = () => {
  const avatarLogo = (
    <Svg iconId={'icon-avatar'} className={styles.iconAvatar} />
  );
  return (
    <>
      <div className={styles.avatar__wrapper}>
        <div className={styles.avatar__logo}>{avatarLogo}</div>
        <form>
          <input
            type="file"
            name="file"
            id="inputFile"
            style={{ display: 'none' }}
          />
          <label htmlFor="inputFile" style={{ cursor: 'pointer' }}>
            <Svg iconId={'icon-add-avatar'} className={styles.icon_upload} />
          </label>
        </form>
        <p className={styles.text_userName}>User name</p>
        <p className={styles.text_user}>User</p>
      </div>
    </>
  );
};

export default Avatar;
