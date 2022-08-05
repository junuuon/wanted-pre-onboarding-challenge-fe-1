import { UserInput } from './users';

export interface AuthResponse {
  message: string;
  token: string;
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthState = {
  token: string;
};

export type AuthContextType = {
  token: string;

  signIn: (body: UserInput) => Promise<AuthResponse>;
  signOut: () => void;
  signUp: (body: UserInput) => Promise<AuthResponse>;
};
