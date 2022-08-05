import { useNavigate } from 'react-router-dom';

import { Todo } from '@usertypes/todos';

import { Wrapper, Item } from './TodoList.style';

const TodoList = ({ todos }: { todos?: Todo[] }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Item sx={{ textAlign: 'center' }} onClick={() => navigate('./')}>
        +
      </Item>
      {todos &&
        todos.length !== 0 &&
        todos.map((todo) => (
          <Item onClick={() => navigate(`./${todo.id}`)}>{todo.title}</Item>
        ))}
    </Wrapper>
  );
};

export default TodoList;
