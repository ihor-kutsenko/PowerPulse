import useAuth from 'pages/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { WELCOME_PAGE_ROUTE } from './constants';

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to={WELCOME_PAGE_ROUTE} replace />;
};

export default PrivateRoutes;
