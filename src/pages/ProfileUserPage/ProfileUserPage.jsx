import { useEffect, useState } from 'react';

import Section from 'components/Section/Section';
import Title from 'components/Title/Title';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import useAuth from 'pages/hooks/useAuth';

import styles from './ProfileUserPage.module.scss';

const ProfileUserPage = () => {
  const { user } = useAuth();
  const avatar = user.avatarURL;
  const [, setAvatarURL] = useState(avatar);

  useEffect(() => {
    setAvatarURL(avatar);
  }, [avatar]);

  return (
    <Section>
      <Title text="Profile Settings" />
      <div className={styles.wrapper}>
        <UserForm user={user} />
        <UserCard user={user} />
      </div>
    </Section>
  );
};

export default ProfileUserPage;
