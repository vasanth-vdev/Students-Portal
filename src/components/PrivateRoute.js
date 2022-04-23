import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser, userData, logOut } = useAuth();
  console.log(userData);
  return currentUser && userData
    ? userData.userType === 'teacher'
      ? (window.location.href = 'https://psgteacherszone.netlify.app/')
      : children
    : logOut() && <Navigate to='/login' />;
};
