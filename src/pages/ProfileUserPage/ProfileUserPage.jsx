import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import UserCard from 'components/UserCard/UserCard';

import styles from './ProfileUserPage.module.scss';

const ProfileUserPage = () => {
  return (
    <Section>
      <Title text="Profile Settings" />
      <div className={styles.wrapper}>
        <div></div>
        <UserCard />
      </div>
    </Section>
  );
};

export default ProfileUserPage;
