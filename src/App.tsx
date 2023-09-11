import { createContext, Dispatch, SetStateAction, useState } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './navigation';


export type SidebarContextType = {
  showSidebar: boolean;
  updateShowSidebar: Dispatch<SetStateAction<boolean>>;
  showProjectMenu: boolean; 
  updateShowProjectMenu: Dispatch<SetStateAction<boolean>>;
  deviceWidth: number;
}

export const SidebarContext = createContext<Partial<SidebarContextType>>({})

function App() {
  const [showSidebar, updateShowSidebar] = useState(true);
  const [showProjectMenu, updateShowProjectMenu] = useState(false)
  const deviceWidth = window.innerWidth;
 
  return (
    <SidebarContext.Provider 
      value={{ showSidebar, updateShowSidebar, showProjectMenu, updateShowProjectMenu, deviceWidth}}>
        <RouterProvider router={router} />
      </SidebarContext.Provider>
  )
}

export default App
