import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import { SCREENS } from "../../../../../navigation/constants";
import { useContext } from "react";
import { SidebarContext } from "../../../../../App";
import SidePanel from "../../components/side-panel";
import { useParams } from "react-router-dom";
import AddMultipleComponent from "./components/add-multiple-components";


const MultipleProductUpload = () => {
  const {
    deviceWidth,
    showProjectMenu,
    showSidebar,
    updateShowProjectMenu,
    updateShowSidebar,
  } = useContext(SidebarContext);
  const {shop_id} = useParams();
  return (
    <Layout
      sidePanel={(
        <SidePanel

          closeSidebar={
            deviceWidth && deviceWidth > 560 ?
              () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
              () => updateShowSidebar && updateShowSidebar(!showSidebar)
          }
          links={[{ icon: 'fas fa-house text-pink-600', text: 'Products', to: `/products/${shop_id}` }]}
          secondLinks={[{ icon: 'fas fa-cog', text: 'Settings', to: '' }]}
          headerText="Shop"
        />
      )}
    >
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Add Product"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: `/shop/${shop_id}`, text: 'Shop' }}
          thirdLevel={{ link: '', text: 'Upload Multiple Products' }}
        />
        <main className="my-6">
          {shop_id && (<AddMultipleComponent shop_id={shop_id} />)}
        </main>
      </section>
    </Layout>
  )
};

export default MultipleProductUpload;