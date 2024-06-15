import { lazy } from 'react';

import {
  WELCOME_PAGE_ROUTE,
  SIGN_UP_ROUTE,
  SIGN_IN_ROUTE,
  PROFILE_ROUTE,
  DIARY_ROUTE,
  PRODUCTS_ROUTE,
  EXERCISES_ROUTE,
} from './constants';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));
const ProfileUserPage = lazy(() =>
  import('../pages/ProfileUserPage/ProfileUserPage')
);
const DiaryPage = lazy(() => import('../pages/DiaryPage/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));
const ExercisesPage = lazy(() =>
  import('../pages/ExercisesPage/ExercisesPage')
);

export const publicRoutes = [
  {
    path: WELCOME_PAGE_ROUTE,
    element: <WelcomePage />,
  },
  {
    path: SIGN_UP_ROUTE,
    element: <SignUpPage />,
  },
  {
    path: SIGN_IN_ROUTE,
    element: <SignInPage />,
  },
];

export const privateRoutes = [
  {
    path: PROFILE_ROUTE,
    element: <ProfileUserPage />,
  },
  {
    path: DIARY_ROUTE,
    element: <DiaryPage />,
  },
  {
    path: PRODUCTS_ROUTE,
    element: <ProductsPage />,
  },
  {
    path: EXERCISES_ROUTE,
    element: <ExercisesPage />,
  },
  {
    path: EXERCISES_ROUTE + '/:id',
    element: <ExercisesPage />,
  },
];
