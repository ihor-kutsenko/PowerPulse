import { Route, Routes } from 'react-router-dom';

import { appRoutes } from 'routes/routes';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
