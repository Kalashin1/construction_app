import Layout from "../layout";
import Heading from "./components/heading";
import SidebarHeading from "./components/sidebar-Heading";

const Shop = () => {
  return (
    <Layout>
      <main className="p-6 grid grid-cols-6">
        <div className="col-span-4">
          <Heading />
        </div>
        <div className="col-span-2">
          <SidebarHeading />
        </div>
      </main>
    </Layout>
  );
};

export default Shop;