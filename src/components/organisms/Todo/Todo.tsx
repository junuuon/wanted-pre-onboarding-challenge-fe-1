/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import InputWithLabel from '@components/molecules/InputWithLabel';
import useTodo from '@hooks/useTodos';

import { Wrapper, Header } from './Todo.style';

const Todo = () => {
  const { createTodo, deleteTodo, updateTodo, getTodoById } = useTodo();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleError, setTitleError] = useState('');

  const checkRequired = (input: string) => {
    if (input === '') {
      setTitleError('Title required!');
    } else {
      setTitleError('');
    }
  };

  const fetchTodo = useCallback(async () => {
    if (id) {
      setIsEdit(false);
      setTitleError('');
      try {
        const response = await getTodoById(id);
        setContent(response.data.content);
        setTitle(response.data.title);
      } catch (error) {
        alert(error);
        navigate('/');
      }
    } else {
      setContent('');
      setIsEdit(true);
      setTitle('');
      setTitleError('Title required!');
    }
  }, [getTodoById, id]);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo, id]);

  const handleCreate = async () => {
    try {
      checkRequired(title);
      const response = await createTodo({ title, content });
      navigate(`./${response.data.id}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = async () => {
    if (id) {
      try {
        checkRequired(title);
        await updateTodo(id, { title, content });
        setIsEdit(false);
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleDelete = async () => {
    if (id) {
      try {
        await deleteTodo(id);
        navigate('/');
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
    fetchTodo();
  };

  return (
    <Wrapper>
      <Header>
        {!id ? (
          <Button disabled={!!titleError} onClick={handleCreate}>
            Create
          </Button>
        ) : isEdit ? (
          <>
            <Button disabled={!!titleError} onClick={handleUpdate}>
              Done
            </Button>
            <Button color="error" onClick={handleCancel}>
              Cancel
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
          checkRequired(e.target.value);
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
