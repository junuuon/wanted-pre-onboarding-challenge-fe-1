import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from 'react';

import {
  ActionMap,
  AuthState,
  AuthResponse,
  AuthContextType,
} from '@usertypes/auth';
import { UserInput } from '@usertypes/users';
import { fetchJSON } from '@utils/api-helper';

const LOCALSTORAGE_ID = 'token';
const INITIALIZE = 'INITIALIZE';

type AuthActionTypes = {
  [INITIALIZE]: {
    token: string;
  };
};

type AuthActions = ActionMap<AuthActionTypes>[keyof ActionMap<AuthActionTypes>];

const initialState: AuthState = {
  token: '',
};

const reducer = (state: { token: string }, action: AuthActions) => {
  if (action.type === INITIALIZE) {
    const { token } = action.payload;
    return {
      ...state,
      token,
    };
  }

  return state;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [token, setToken] = useState('');

  useEffect(() => {
    const newToken = localStorage.getItem(LOCALSTORAGE_ID) || '';
    setToken(newToken);
  }, []);

  useEffect(() => {
    dispatch({
      type: INITIALIZE,
      payload: {
        token: token,
      },
    });
  }, [dispatch, token]);

  const signIn = (body: UserInput) =>
    fetchJSON('POST', '/users/login', '', body).then((response) => {
      localStorage.setItem(LOCALSTORAGE_ID, response.token);
    }) as Promise<AuthResponse>;

  const signUp = (body: UserInput) =>
    fetchJSON('POST', '/users/create', '', body) as Promise<AuthResponse>;

  const signOut = () => localStorage.removeItem(LOCALSTORAGE_ID);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        token,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
