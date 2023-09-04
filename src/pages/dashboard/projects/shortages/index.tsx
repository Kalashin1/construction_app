import Layout from "../../layout";
import ProjectLists from "./components/project-lists";
import BreadCrumb from "../../components/bread-crumb";
import { SCREENS } from "../../../../navigation/constants";

const Projects = () => {
  return (
    <Layout>
      <div className="py-4 px-6">
        <div className="p-2 md:p-6 mb-2">
          <BreadCrumb
            pageName="Shortages Order Overview"
            firstLevel={{link: SCREENS.PROJECTS, text: 'Projects'}}
            secondLevel={{link: SCREENS.SHORTAGES, text: 'Shortages'}}
          />
        </div>

        <div className="my-10">
          <ProjectLists />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;