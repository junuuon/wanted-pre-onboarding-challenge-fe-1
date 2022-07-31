import AuthLayout from '@components/templates/AuthLayout';
import SignIn from '@pages/auth/SignIn';

const routes = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
