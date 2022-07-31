import { ReactNode, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }: { children: ReactNode }) => {
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  const authCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      navigate('/auth/sign-in');
    }
  }, [navigate]);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return authorized ? <>{children}</> : <></>;
};

export default AuthGuard;
