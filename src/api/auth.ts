import { UserInput } from '@usertypes/users';
import { fetchAuth } from '@utils/api-helper';

const LOCALSTORAGE_ID = 'token';

export const signIn = (body: UserInput) =>
  fetchAuth('/users/login', body).then((response) => {
    localStorage.setItem(LOCALSTORAGE_ID, response.token);
  });

export const signUp = (body: UserInput) => fetchAuth('/users/create', body);

export const signOut = () => localStorage.removeItem(LOCALSTORAGE_ID);
