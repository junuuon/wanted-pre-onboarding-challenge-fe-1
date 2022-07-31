import { fetchJSON } from '@utils/api-helper';

export const login = (email: string, password: string) =>
  fetchJSON('POST', '/users/login', '', { email, password });
