import Layout from "../../../../layout";
import BreadCrumb from "../../../../components/bread-crumb";
import { SCREENS } from "../../../../../../navigation/constants";
import { useParams } from "react-router-dom";
import AddendumPage from "./components/addendum";

const AddendumDetail = () => {
  const {project_id} = useParams()
  return (
    <Layout>
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Addendum Details"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: `/detail/${project_id}`, text: 'Project' }}
          thirdLevel={{ link: '', text: 'Addendum Details'}}
        />
        <main className="my-6">
          <AddendumPage />
        </main>
      </section>
    </Layout>
  );
};

export default AddendumDetail;