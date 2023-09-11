import {createBrowserRouter} from 'react-router-dom';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';
import Projects from '../pages/dashboard/projects';
import Contractors from '../pages/dashboard/settings/contractors';
import Support from '../pages/dashboard/settings/support';
import Bills from '../pages/dashboard/bills';
import Performance from '../pages/dashboard/projects/performance';
import Reports from '../pages/dashboard/projects/reports';
import Shortage from '../pages/dashboard/projects/shortages';
import Shop from '../pages/dashboard/shop';
import CreateProjectPage from '../pages/dashboard/projects/create-project';
import OPSAdministration from '../pages/dashboard/bills/ops';
import ProjectDetails from '../pages/dashboard/projects/details';
import Profile from '../pages/dashboard/profie';
import ContractorDetails from '../pages/dashboard/settings/contractors/details';
import ChatApp from '../pages/dashboard/projects/chat';
import { SCREENS } from './constants';
import Todos from '../pages/dashboard/apps/todos';

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
  {
    path: SCREENS.CREATE_PROJECT,
    element: (<CreateProjectPage />)
  },
  {
    path: SCREENS.OPS_ADMINISTRATION,
    element: (<OPSAdministration />)
  },
  {
    path: SCREENS.DETAIL,
    element: (<ProjectDetails />)
  },
  {
    path: SCREENS.PROFILE,
    element: (<Profile />)
  },
  {
    path: SCREENS.CONTRACTOR_DETAILS,
    element: (<ContractorDetails />)
  },
  {
    path: SCREENS.CHAT,
    element: (<ChatApp />)
  },
  {
    path: SCREENS.TODO,
    element: (<Todos />)
  },
]);

export default router;