import { Navigate } from 'react-router-dom';
import { useGoogleAuth } from '../Context/GoogleAuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser, googleSignOut } = useGoogleAuth();
  return currentUser ? children : googleSignOut() && <Navigate to='/login' />;
};
