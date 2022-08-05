import { useParams, useNavigate } from 'react-router-dom';

import { createTodo, deleteTodo, getTodoById, updateTodo } from '@api/todos';
import useAuth from '@hooks/useAuth';
import { Button } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Wrapper, Header } from './Todo.style';

import InputWithLabel from '@components/molecules/InputWithLabel';

const Todo = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');

  const checkRequired = () => {
    if (title === '') {
      setTitleError('Title required!');
    } else {
      setTitleError('');
    }
  };

  useEffect(() => {
    if (id) {
      const fetchTodo = async () => {
        try {
          const response = await getTodoById(token, id);
          setContent(response.data.content);
          setTitle(response.data.title);
        } catch (error) {
          alert(error);
        }
      };
      fetchTodo();
    } else {
      setIsEdit(true);
      setTitle('');
      setContent('');
    }
  }, [id]);

  const handleCreate = async () => {
    checkRequired();
    try {
      const response = await createTodo(token, { title, content });
      navigate(`./${response.data.id}`);
      setIsEdit(false);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async () => {
    checkRequired();
    if (id) {
      try {
        await updateTodo(token, id, { title, content });
        setIsEdit(false);
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleDelete = async () => {
    if (id) {
      try {
        await deleteTodo(token, id);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        {!id ? (
          <Button onClick={handleCreate}>Create</Button>
        ) : isEdit ? (
          <>
            <Button onClick={handleUpdate}>Done</Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEdit(true)}>Edit</Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </Header>
      <InputWithLabel
        disabled={!isEdit}
        error={!!titleError}
        fullWidth
        helperText={titleError}
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setTitle(e.target.value);
          checkRequired();
        }}
        label="Title"
        required={isEdit}
        value={title}
        variant="outlined"
      />
      <InputWithLabel
        disabled={!isEdit}
        fullWidth
        onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setContent(e.target.value);
          checkRequired();
        }}
        label="Content"
        minRows={5}
        multiline
        value={content}
        variant="outlined"
      />
    </Wrapper>
  );
};

export default Todo;
