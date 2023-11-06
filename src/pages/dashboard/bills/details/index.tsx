import { useParams } from "react-router-dom";
import { SCREENS } from "../../../../navigation/constants";
import BreadCrumb from "../../components/bread-crumb";
import Layout from "../../layout";
import { useEffect, useState } from "react";
import { getDraftById } from "../helper";
import { notify, NotificationComponent } from "../../components/notification/toast";
import { Draft } from "../../../../types";
import DraftDetails from "./components/draft-details";

const DraftPage = () => {
  const { id } = useParams();
  const [draft, setDraft] = useState<Draft|null>(null) 
  useEffect(() => {
    const setUp = async () => {
      const [error, _draft] = await getDraftById(id!);
      if (error) {
        notify(
          (<NotificationComponent message={'error fetching draft!'} />),
          {
            className: `bg-red-700 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(error);
      }

      if (_draft){
        setDraft(_draft)
      }
    }
    setUp()
  }, [id])

  console.log(draft)
  return (
    <Layout>
      <main className="p-4 md:p-8">
        <div className="px-8">
          <BreadCrumb
            pageName="Outgoing Invoices"
            firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
            secondLevel={{ link: SCREENS.BILLS, text: 'Dratfs' }}
            thirdLevel={{ link: `/draft/${id}`, text: id?.slice(0, 6) ?? '' }}
          />

        </div>


        <section className="p-4 md:p-8">
          {draft && (<DraftDetails draft={draft} type="DRAFT" />)}
        </section>
      </main>
    </Layout>
  );
}

export default DraftPage;