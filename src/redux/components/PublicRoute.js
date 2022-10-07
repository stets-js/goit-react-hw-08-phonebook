import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/contacts"></Navigate> : <Outlet />}</>;
}

export default PublicRoute;
