import {createBrowserRouter} from 'react-router-dom';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Signup />),
  },
  {
    path: '/login',
    element: (<Login />),
  }
]);

export default router;