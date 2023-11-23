import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage/SignInPage'));

export const WELCOME_PAGE_ROUTE = '/';
export const SIGN_UP_ROUTE = '/sign-up';
export const SIGN_IN_ROUTE = '/sign-in';

export const appRoutes = [
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
