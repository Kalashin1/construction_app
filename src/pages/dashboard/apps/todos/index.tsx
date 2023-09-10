import Layout from "../../layout";
import Header from "./components/header";
import TodosOverview from "./components/todos-overview";

const Todos = () => {
  return (
    <Layout>
      <main className="p-6">
        <Header />

        <TodosOverview />
      </main>
    </Layout>
  );
};

export default Todos;