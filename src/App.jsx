import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { publicRoutes, privateRoutes } from 'routes/routes';
import RestrictedRoutes from 'routes/RestrictedRoutes';
import { refreshUser } from 'redux/auth/authOperations';
import useAuth from 'pages/hooks/useAuth';
import PrivateRoutes from 'routes/PrivateRoutes';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {publicRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<RestrictedRoutes> {element}</RestrictedRoutes>}
              />
            ))}
          </Route>
          <Route path="/" element={<SharedLayout />}>
            {privateRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<PrivateRoutes> {element}</PrivateRoutes>}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
