import { ReactNode, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestGuard = ({ children }: { children: ReactNode }) => {
  const [unauthorized, setUnauthorized] = useState(false);
  const navigate = useNavigate();

  const authCheck = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUnauthorized(false);
      navigate('/');
    } else {
      setUnauthorized(true);
    }
  }, [navigate]);

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return unauthorized ? <>{children}</> : <></>;
};

export default GuestGuard;
