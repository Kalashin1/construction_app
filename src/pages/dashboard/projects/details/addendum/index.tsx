import Layout from "../../../layout";
import BreadCrumb from "../../../components/bread-crumb";
import { SCREENS } from "../../../../../navigation/constants";
import AddAddenDum from "./components/addendum";
import { useParams } from "react-router-dom";

const Addendum = () => {
  const {project_id} = useParams()
  return (
    <Layout>
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Add Addendum"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: `/details/${project_id}`, text: 'Project' }}
          thirdLevel={{ link: '', text: 'Add Addendum'}}
        />
        <main className="my-6">
          <AddAddenDum />
         
        </main>
      </section>
    </Layout>
  );
};

export default Addendum;