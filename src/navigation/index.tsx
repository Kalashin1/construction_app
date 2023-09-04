import {createBrowserRouter} from 'react-router-dom';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';
import Projects from '../pages/dashboard/projects';
import Contractors from '../pages/dashboard/settings/contactors';
import Support from '../pages/dashboard/settings/support';
import Bills from '../pages/dashboard/projects/bills';
import Performance from '../pages/dashboard/projects/performance';
import Reports from '../pages/dashboard/projects/reports';
import Shortage from '../pages/dashboard/projects/shortages';
import Shop from '../pages/dashboard/shop';
import { SCREENS } from './constants';

const router = createBrowserRouter([
  {
    path: SCREENS.HOME,
    element: (<Signup />),
  },
  {
    path: SCREENS.LOGIN,
    element: (<Login />),
  },
  {
    path: SCREENS.DASHBOARD,
    element: (<Dashboard/>),
  },
  {
    path: SCREENS.PROJECTS,
    element: (<Projects />),
  },
  {
    path: SCREENS.CONTRACTORS,
    element: (<Contractors />),
  },
  {
    path: SCREENS.SUPPORT,
    element: (<Support />),
  },
  {
    path: SCREENS.BILLS,
    element: (<Bills />)
  },
  {
    path: SCREENS.PERFORMANCE,
    element: (<Performance />)
  },
  {
    path: SCREENS.REPORTS,
    element: (<Reports />)
  },
  {
    path: SCREENS.SHORTAGES,
    element: (<Shortage />)
  },
  {
    path: SCREENS.SHOP,
    element: (<Shop />)
  },
]);

export default router;