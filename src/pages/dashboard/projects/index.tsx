import Layout from "../layout";
import HomeCards from "./components/home-cards";
import FilterCards from "./components/filter-cards";
import ProjectLists from "./components/project-lists";
import BreadCrumb from "../components/bread-crumb";
import { SCREENS } from "../../../navigation/constants";
import { useState } from "react";

const Projects = () => {
  const showProjectFilter = sessionStorage.getItem('showProjectFilter');
  const [showExtraFilter, updateShowExtraFilter] = useState(
    showProjectFilter && showProjectFilter === 'yes' ? true: false 
  );
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
        {showExtraFilter && (<FilterCards />)}
        <div className="my-10">
          <ProjectLists 
            showFilter={showExtraFilter}
            updateShowFilter={updateShowExtraFilter}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;