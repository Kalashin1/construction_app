import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import { SCREENS } from "../../../../../navigation/constants";
import AddProductForm from "./components/product-form";
import { useContext } from "react";
import SidePanel from "../../components/side-panel";
import { useParams } from "react-router-dom";
import { SidebarContext } from "../../../../../App";

const AddProductPage = () => {
  const {
    deviceWidth,
    showProjectMenu,
    showSidebar,
    updateShowProjectMenu,
    updateShowSidebar,
  } = useContext(SidebarContext);
  const {id: shop_id} = useParams();
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
          secondLevel={{ link: SCREENS.SHOP, text: 'Shop' }}
          thirdLevel={{ link: '', text: 'Add Product' }}
        />
        <main className="my-6">
          <AddProductForm />
        </main>
      </section>
    </Layout>
  )
};

export default AddProductPage;