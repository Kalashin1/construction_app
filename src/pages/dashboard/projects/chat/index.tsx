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
          closeSidebar={() => updateShowSidebar(false)}
          showProjectMenu={showProjectMenu}
          updateShowProjectMenu={() => updateShowProjectMenu(!showProjectMenu)}
          CustomSidebarPanel={
            (
              <SidebarPanel
                links={[0,1,2,3,4,5,6,7,8]}
                headerText="Chat"
                closeSidebar={
                  deviceWidth > 560 ?
                  () => updateShowProjectMenu(!showProjectMenu):
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
            () => updateShowProjectMenu(!showProjectMenu)
        }
        deviceWidth={deviceWidth}
        isSidePanelOpen={showSidebar}
      />
      {showProjectMenu ? (
        <main className="main-content relative md:left-48 md:w-9/12 pb-8 min-h-screen" onClick={
          deviceWidth < 560 ?
            () => updateShowSidebar(false) :
            () => { }
        }>
          <Chat />
        </main>
      ) : (
        <main className="main-content relative pb-8 min-h-screen" onClick={
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