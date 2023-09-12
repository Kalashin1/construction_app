import { useContext } from "react";
import { SidebarContext } from "../../../../App";
import Layout from "../../layout";
import SidebarPanel from "./components/sidebar-panel";
import KanbanHeader from "./components/kanban-header";
import KanbanBody from "./components/kanban-body";

const KanbanBoard = () => {
  const {
    deviceWidth,
    showProjectMenu,
    updateShowProjectMenu,
    showSidebar,
    updateShowSidebar,
  } = useContext(SidebarContext);
  return (
    <Layout
      sidePanel={
        (
          <SidebarPanel

            closeSidebar={
              deviceWidth && deviceWidth > 560 ?
                () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
                () => updateShowSidebar && updateShowSidebar(!showSidebar)
            }
            links={[0, 1, 2, 3]}
            headerText="Kanban"
          />
        )
      }
    >
      <main className="w-full">
        <KanbanHeader />
        <KanbanBody />
      </main>
    </Layout>
  );
};

export default KanbanBoard;