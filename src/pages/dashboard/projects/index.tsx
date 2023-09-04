import Layout from "../layout";
import HomeCards from "./components/home-cards";
import ProjectLists from "./components/project-lists";
import BreadCrumb from "../components/bread-crumb";
import { SCREENS } from "../../../navigation/constants";

const Projects = () => {
  return (
    <Layout>
      <div className="py-10 px-6">
        <div className="p-6">
          <BreadCrumb
            pageName="Projects"
            firstLevel={{link: SCREENS.PROJECTS, text: 'Project'}}
            secondLevel={{link: '', text: ''}}
          />
        </div>
        <HomeCards />

        <div className="my-10">
          <ProjectLists />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;