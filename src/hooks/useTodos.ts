import { useContext } from 'react';

import { TodoContext } from '@contexts/TodoContext';

const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context)
    throw new Error('AuthContext must be placed within AuthProvider');

  return context;
};

export default useTodo;
