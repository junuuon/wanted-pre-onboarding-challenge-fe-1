import AuthLayout from '@components/templates/AuthLayout';
import TodoLayout from '@components/templates/TodoLayout';
import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';

import Todo from '@components/organisms/Todo';

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
  {
    path: '/',
    element: <TodoLayout />,
    children: [
      {
        path: ':id',
        element: <Todo />,
      },
      {
        path: '/',
        element: <Todo />,
      },
    ],
  },
];

export default routes;
