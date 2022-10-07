import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login"></Navigate>}</>;
}

export default PrivateRoute;
