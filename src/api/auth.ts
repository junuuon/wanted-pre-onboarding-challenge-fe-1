import { AuthResponse } from '@usertypes/auth';
import { fetchJSON } from '@utils/api-helper';

export const login = (email: string, password: string) =>
  fetchJSON('POST', '/users/login', '', {
    email,
    password,
  }) as Promise<AuthResponse>;

export const signUp = (email: string, password: string) =>
  fetchJSON('POST', '/users/create', '', {
    email,
    password,
  }) as Promise<AuthResponse>;
