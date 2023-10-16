/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './navigation';
import { User } from './types';
import { useGetUserFromToken } from './pages/dashboard/hooks/getUser';
import { SCREENS } from './navigation/constants';


export type SidebarContextType = {
  showSidebar: boolean;
  updateShowSidebar: Dispatch<SetStateAction<boolean>>;
  showProjectMenu: boolean;
  updateShowProjectMenu: Dispatch<SetStateAction<boolean>>;
  deviceWidth: number;
  showLeftSidebar: boolean;
  updateShowLeftSidebar: Dispatch<SetStateAction<boolean>>;
  showDashboardDropdown: boolean;
  updateShowDashboardDropdown: Dispatch<SetStateAction<boolean>>;
  showNotifications: boolean
  updateShowNotifications: Dispatch<SetStateAction<boolean>>;
}

type UserPayload = User

export type UserAuthContextType = {
  user: UserPayload | null
  getUser: (abtCnt?: AbortController | null, token?: string) => Promise<[Error | null, UserPayload | null]>
  setCurrentUser: Dispatch<SetStateAction<UserPayload>>
}

export const SidebarContext = createContext<Partial<SidebarContextType>>({});

export const UserAuthContext = createContext<Partial<UserAuthContextType>>({});

function App() {
  const [showSidebar, updateShowSidebar] = useState(true);
  const [showProjectMenu, updateShowProjectMenu] = useState(false)
  const [showLeftSidebar, updateShowLeftSidebar] = useState(false)
  const [showDashboardDropdown, updateShowDashboardDropdown] = useState(false);
  const [showNotifications, updateShowNotifications] = useState(false);
  const deviceWidth = window.innerWidth;


  const [currentUser, setCurrentUser] = useState<UserPayload | null>();
  const token = sessionStorage.getItem('userToken');

  const { getUser } = useGetUserFromToken(token!)

  useEffect(() => {
    const setUp = async () => {
      if (!token) {
        if (location.pathname !== SCREENS.LOGIN) {
          if (location.pathname !== SCREENS.HOME)
            location.assign('/login');
        }
      }
      const [error, _user] = await getUser()
      if (error) {
        setCurrentUser(null)
        console.log(location.pathname)
        if (location.pathname !== SCREENS.LOGIN) {
          if (location.pathname !== SCREENS.HOME)
            location.assign('/login');
        }
      } else if (_user) {
        sessionStorage.setItem('userToken', _user.token);
        setCurrentUser(_user)
      }
    }

    setUp()
  }, [])

  return (
    <UserAuthContext.Provider value={{
      user: currentUser,
      //  @ts-ignore
      getUser,
      //  @ts-ignore
      setCurrentUser
    }}>
      <SidebarContext.Provider
        value={{
          showSidebar,
          updateShowSidebar,
          showProjectMenu,
          updateShowProjectMenu,
          deviceWidth,
          showLeftSidebar,
          updateShowLeftSidebar,
          showDashboardDropdown,
          showNotifications,
          updateShowDashboardDropdown,
          updateShowNotifications
        }}>
        <RouterProvider router={router} />
      </SidebarContext.Provider>
    </UserAuthContext.Provider>
  )
}

export default App
