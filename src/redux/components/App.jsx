import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Layout from '../components/Layout/Layout';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route index path="/login" element={<LoginPage />}></Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />}></Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Route>
          <Route path="*" element={<LoginPage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
