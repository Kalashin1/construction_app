import Layout from "../layout";
import HomeCards from "./components/home-cards";
import ProjectLists from "./components/project-lists";

const Projects = () => {
  return (
    <Layout>
      <div className="py-10 px-6">
        <HomeCards />

        <div className="my-10">
          <ProjectLists />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;