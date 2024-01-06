import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';

import styles from './ProfileUserPage.module.scss';

const ProfileUserPage = () => {
  return (
    <Section>
      <Title text="Profile Settings" />
      <div className={styles.wrapper}>
        <UserForm />
        <UserCard />
      </div>
    </Section>
  );
};

export default ProfileUserPage;
