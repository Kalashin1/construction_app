import { useContext, useState } from "react";
import Layout from "../../layout";
import Header from "./components/header";
import TodosOverview from "./components/todos-overview";
import SidePanel from './components/sidepanel';
import { SidebarContext } from "../../../../App";

const Todos = () => {
  const {
    deviceWidth,
    showProjectMenu,
    showSidebar,
    updateShowProjectMenu,
    updateShowSidebar,
  } = useContext(SidebarContext);
  const [showTodoDropdown, updateShowTodoDropdown] = useState(false);
  return (
    <Layout sidePanel={
      (
        <SidePanel

          closeSidebar={
            deviceWidth && deviceWidth > 560 ?
              () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
              () => updateShowSidebar && updateShowSidebar(!showSidebar)
          }
          links={[0, 1, 2, 3]}
          headerText="Todos"
        />
      )
    }>
      <main onClick={() => updateShowTodoDropdown(false)} className="p-6">
        <Header 
          showTodoDropdown={showTodoDropdown}
          updateShowTodoDropdown={updateShowTodoDropdown}
        />

        <TodosOverview />
      </main>
    </Layout>
  );
};

export default Todos;