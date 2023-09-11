import { useState } from "react";
import Sidebar from "../../components/sidebar";
import SidebarPanel from "./comonents/sidepanel";
import ChatAppWrapper from "./comonents/app-wrapper";
import Chat from "./comonents/chat";


const ChatApp = () => {
  const [showSidebar, updateShowSidebar] = useState(true);
  const [showProjectMenu, updateShowProjectMenu] = useState(true);
  const deviceWidth = window.innerWidth;

  return (
    <>
      {showSidebar && (
        <Sidebar
          closeSidebar={
            deviceWidth > 560 ?
            () => updateShowSidebar(true):
            () => updateShowProjectMenu(!showProjectMenu)
          }
          showProjectMenu={deviceWidth > 560 ? true : showProjectMenu}
          updateShowProjectMenu={
            deviceWidth < 560 ?
              () => updateShowProjectMenu(!showProjectMenu) :
              () => updateShowProjectMenu(true)
          }
          CustomSidebarPanel={
            (
              <SidebarPanel
                links={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                headerText="Chat"
                closeSidebar={
                  deviceWidth > 560 ?
                    () => updateShowProjectMenu(!showProjectMenu) :
                    () => updateShowSidebar(!showSidebar)
                }
              />
            )
          }
        />
      )}
      <ChatAppWrapper
        toggleSidebar={
          deviceWidth < 560 ?
            () => updateShowSidebar(!showSidebar) :
            () => updateShowProjectMenu(true)
        }
        deviceWidth={deviceWidth}
        isSidePanelOpen={showSidebar}
      />
      {
        deviceWidth > 560 && (
          <main className="main-content relative md:left-48 md:w-9/12 pb-8 min-h-screen" onClick={
            deviceWidth < 560 ?
              () => updateShowSidebar(false) :
              () => { }
          }>
            <Chat />
          </main>
        )
      }
      {showProjectMenu &&  deviceWidth < 560 ? (
        <main className="main-content relative md:left-48 md:w-9/12 pb-8 min-h-screen" onClick={
          deviceWidth < 560 ?
            () => updateShowSidebar(false) :
            () => { }
        }>
          <Chat />
        </main>
      ) : (
        <main className="main-content md:hidden relative pb-8 min-h-screen" onClick={
          deviceWidth < 560 ?
            () => updateShowSidebar(false) :
            () => { }
        }>
          <Chat />
        </main>
      )
      }
    </>
  );
};

export default ChatApp;