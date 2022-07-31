import AuthLayout from '@components/templates/AuthLayout';
import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';

const routes = [
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
