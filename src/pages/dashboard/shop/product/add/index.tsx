import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import { SCREENS } from "../../../../../navigation/constants";
import AddProductForm from "./components/product-form";

const AddProductPage = () => {
  return (
    <Layout>
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Add Product"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.SHOP, text: 'Shop' }}
          thirdLevel={{ link: '', text: 'Add Addendum' }}
        />
        <main className="my-6">
          <AddProductForm />
        </main>
      </section>
    </Layout>
  )
};

export default AddProductPage;