import useAuth from 'pages/hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { PROFILE_ROUTE } from './constants';

const RestrictedRoutes = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={PROFILE_ROUTE} replace /> : children;
};

export default RestrictedRoutes;
