import Layout from "../layout";
import BreadCrumb from "../components/bread-crumb";
import AccountSettings from "./components/account-setting";
import { SCREENS } from "../../../navigation/constants";

const Profile = () => {
  return (
    <Layout>
      <main className="p-6">
        <BreadCrumb
          pageName="Your Profile"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard'}}
          secondLevel={{ link: '', text: '' }}
        />

        <section>
          <AccountSettings />
        </section>
      </main>
    </Layout>
  );
};

export default Profile;