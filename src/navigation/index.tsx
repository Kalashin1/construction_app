import {createBrowserRouter} from 'react-router-dom';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Signup />),
  },
  {
    path: '/login',
    element: (<Login />),
  },
  {
    path: '/dashboard',
    element: (<Dashboard/>),
  },
]);

export default router;