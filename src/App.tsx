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
  showLeftSidebar: boolean;
  updateShowLeftSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<Partial<SidebarContextType>>({})

function App() {
  const [showSidebar, updateShowSidebar] = useState(true);
  const [showProjectMenu, updateShowProjectMenu] = useState(false)
  const [showLeftSidebar, updateShowLeftSidebar] = useState(false)
  const deviceWidth = window.innerWidth;
 
  return (
    <SidebarContext.Provider 
      value={{ 
        showSidebar,
        updateShowSidebar, 
        showProjectMenu, 
        updateShowProjectMenu, 
        deviceWidth,
        showLeftSidebar,
        updateShowLeftSidebar
      }}>
        <RouterProvider router={router} />
      </SidebarContext.Provider>
  )
}

export default App
