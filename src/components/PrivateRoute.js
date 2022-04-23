import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser, userData, logOut } = useAuth();
  return currentUser && userData
    ? children
    : logOut() && <Navigate to='/login' />;
};
