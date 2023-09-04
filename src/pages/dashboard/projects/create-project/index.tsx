import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";
import CreateCard from "./components/create-card";

const CreateProjectPage = () => {
  return (
    <Layout>
      <div className="py-10 px-6">
        <div className="p-6">
          <BreadCrumb
            pageName="Projects"
            firstLevel={{ link: SCREENS.PROJECTS, text: 'Project' }}
            secondLevel={{ link: SCREENS.CREATE_PROJECT, text: 'Create Project' }}
          />
        </div>

        <div className="p-6">
          <CreateCard

          />
        </div>
      </div>
    </Layout>
  );
};

export default CreateProjectPage;