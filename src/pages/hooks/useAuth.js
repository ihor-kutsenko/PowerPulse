import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectError,
} from 'redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    user,
    isLoggedIn,
    isLoading,
    error,
  };
};

export default useAuth;
