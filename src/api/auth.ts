import { fetchAuth } from '@utils/api-helper';

const LOCALSTORAGE_ID = 'token';

export const signIn = (email: string, password: string) =>
  fetchAuth('/users/login', {
    email,
    password,
  }).then((response) => {
    localStorage.setItem(LOCALSTORAGE_ID, response.token);
  });

export const signUp = (email: string, password: string) =>
  fetchAuth('/users/create', {
    email,
    password,
  });

export const signOut = () => localStorage.removeItem(LOCALSTORAGE_ID);
