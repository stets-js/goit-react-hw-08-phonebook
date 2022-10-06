import { Outlet } from 'react-router-dom';

function PrivateRoute() {
  return <Outlet />;
  //<>{!isAutorized ? <Navigate to="/"></Navigate> : <Outlet />}</>;
}

export default PrivateRoute;
