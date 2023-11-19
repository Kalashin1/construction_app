import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../App";
import Layout from "../layout";
import Cart from "./components/cart";
import Categories from "./components/categories";
import FloatingActionButton from "./components/floating-action-button";
import Heading from "./components/heading";
import Products from "./components/products";
import SidePanel from "./components/side-panel";
import SidebarHeading from "./components/sidebar-Heading";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [showCart, updateShowCart] = useState(false);
  const {id: shop_id} = useParams();
  const {
    deviceWidth,
    showProjectMenu,
    showSidebar,
    updateShowProjectMenu,
    updateShowSidebar,
  } = useContext(SidebarContext);

  useEffect(() => {
    if (window.innerWidth > 560) updateShowCart(true);
  }, [])

  const isMobile = window.innerWidth < 560;
  return (
    <Layout
      sidePanel={(
        <SidePanel

          closeSidebar={
            deviceWidth && deviceWidth > 560 ?
              () => updateShowProjectMenu && updateShowProjectMenu(!showProjectMenu) :
              () => updateShowSidebar && updateShowSidebar(!showSidebar)
          }
          links={[{icon: 'fas fa-house text-pink-600', text: 'Products', to: `/products/${shop_id}`}]}
          secondLinks={[{icon: 'fas fa-cog', text: 'Settings', to: ''}]}
          headerText="Shop"
        />
      )}
    >
      <main className="md:grid md:grid-cols-6 relative">
        <div className="col-span-4 p-2 md:p-6">
          <div className="m-2">
            <Heading />
          </div>
          <Categories />
          <Products />
        </div>
        {showCart && (
          <div className="md:col-span-2 fixed md:static bottom-0 w-full h-full md:w-11/12"
            style={{ background: isMobile ? 'rgba(0, 0, 0, .7)' : 'trasparent' }}>
            <div className="hidden md:block">
              <SidebarHeading />
            </div>
            <div className="relative top-64 md:-top-8">
              <Cart closeCart={() => isMobile ? updateShowCart(false) : () => { }} />
            </div>
          </div>
        )}
        {!showCart && (<FloatingActionButton action={() => updateShowCart(true)} />)}
      </main>
    </Layout >
  );
};

export default Shop;