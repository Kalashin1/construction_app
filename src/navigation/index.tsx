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
import ChatApp from '../pages/dashboard/projects/chat';
import { SCREENS } from './constants';
import Todos from '../pages/dashboard/apps/todos';
import AppPage from '../pages/dashboard/apps';
import FileManager from '../pages/dashboard/apps/files';
import Mail from '../pages/dashboard/apps/mail';
import KanbanBoard from '../pages/dashboard/apps/kanban';
import NumberRanges from '../pages/dashboard/profie/number-ranges';
import BillingDetails from '../pages/dashboard/profie/billing-details';
import Trades from '../pages/dashboard/profie/trades';
import Documents from '../pages/dashboard/profie/documents';
import ForgotPassword from '../pages/auth/forgot-password';
import ResetPassword from '../pages/auth/reset-password';

import UserProfile from '../pages/dashboard/settings/contractors/details/profile';
import UserBillingDetails from '../pages/dashboard/settings/contractors/details/billing-details';
import UserDocuments from '../pages/dashboard/settings/contractors/details/documents';
import ContactPerson from '../pages/dashboard/settings/contractors/details/contact-person';
import Frameworks from '../pages/dashboard/settings/contractors/details/frameworks/';
import TargetSales from '../pages/dashboard/settings/contractors/details/target-sales/';
import Employee from '../pages/dashboard/settings/contractors/details/employees-overview';
import Employees from '../pages/dashboard/profie/employees';
import Contract from '../pages/dashboard/settings/contractors/details/frameworks/contracts';
import DraftDetails from '../pages/dashboard/bills/details';
import AddAddenDum from '../pages/dashboard/projects/details/addendum/';
import AddProductPage from '../pages/dashboard/shop/product/add';


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
    element: (<UserProfile />)
  },
  {
    path: SCREENS.CHAT,
    element: (<ChatApp />)
  },
  {
    path: SCREENS.TODO,
    element: (<Todos />)
  },
  {
    path: SCREENS.APPS,
    element: (<AppPage />)
  },
  {
    path: SCREENS.FILE_MANAGER,
    element: (<FileManager />)
  },
  {
    path: SCREENS.MAIL,
    element: (<Mail />)
  },
  {
    path: SCREENS.KANBAN,
    element: (<KanbanBoard />)
  },
  {
    path: SCREENS.NUMBER_RANGES,
    element: (<NumberRanges />)
  },
  {
    path: SCREENS.BILLING_DETAILS,
    element: (<BillingDetails />)
  },
  {
    path: SCREENS.TRADES,
    element: (<Trades />)
  },
  {
    path: SCREENS.DOCUMENTS,
    element: (<Documents />)
  },
  {
    path: SCREENS.CONTRACTOR_BILLING_DETAILS,
    element: (<UserBillingDetails />)
  },
  {
    path: SCREENS.FRAMEWORKS,
    element: (<Frameworks />)
  },
  {
    path: SCREENS.USER_DOCUMENTS,
    element: (<UserDocuments />)
  },
  {
    path: SCREENS.TARGET_SALES,
    element: (<TargetSales />)
  },
  {
    path: SCREENS.CONTACT_PERSON,
    element: (<ContactPerson />)
  },
  {
    path: SCREENS.DOCUMENTS,
    element: (<Documents />)
  },

  {
    path: SCREENS.FORGOT_PASSWORD,
    element: (<ForgotPassword />)
  },
  {
    path: SCREENS.USER_EMPLOYEES,
    element: (<Employee />)
  },
  {
    path: SCREENS.RESET_PASSWORD,
    element: (<ResetPassword />)
  },
  {
    path: SCREENS.EMPLOYEES,
    element: (<Employees />)
  },
  {
    path: SCREENS.CONTRACT,
    element: (<Contract />)
  },
  {
    path: SCREENS.DRAFT,
    element: (<DraftDetails />)
  },
  {
    path: SCREENS.ADDENDUM,
    element: (<AddAddenDum />)
  },
  {
    path: SCREENS.ADD_PRODUCT,
    element: (<AddProductPage />)
  },
]);

export default router;