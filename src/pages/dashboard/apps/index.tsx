import Layout from "../layout";
import Page from "./components/page";

const AppPage = () => {
  return (
    <Layout>
      <main className="p-6">
        <Page />
      </main>
    </Layout>
  )
}

export default AppPage;