import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  if (!user.isLoggedIn) {
    router.push('/login');
    return null;
  }

  return children;
};

export default ProtectedRoute;
