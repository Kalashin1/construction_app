import { useContext } from "react";
import { SidebarContext } from "../../../../App";
import Layout from "../../layout";
import SidebarPanel from "./components/sidepanel";
import MailPageHeader from "./components/mail-page-header";
import MailOverview from "./components/mail-overview";

const Mail = () => {
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
            headerText="Mail"
          />
        )
      }
    >
      <main className="p-6">
        <MailPageHeader />
        <MailOverview />
      </main>
    </Layout>
  );
};

export default Mail;