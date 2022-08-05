import { Helmet } from 'react-helmet-async';

import TodoComponent from '@components/organisms/Todo';

const Todo = () => {
  return (
    <>
      <Helmet title="Todo" />
      <TodoComponent />
    </>
  );
};

export default Todo;
