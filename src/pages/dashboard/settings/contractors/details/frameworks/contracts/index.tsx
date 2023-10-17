import Layout from "../../../../../layout";
import { SCREENS } from "../../../../../../../navigation/constants";
import BreadCrumb from "../../../../../components/bread-crumb";
import ContractHeader from "./components/contract-header";
import PositionsOverview from "./components/positions-table";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContractById } from "../helper";
import { Contract as ContractType } from "../../../../../../../types";

const Contract = () => {
  const [contract, setContract] = useState<ContractType|null>(null)
  const {id} = useParams();

  useEffect(() => {
    const setUp = async () => {
      const [, _contract] = await getContractById(id!);
      if (_contract) {
        console.log(_contract)
        setContract(_contract)
      }
    }
    setUp();
  }, [id])
  return (
    <Layout>
      <section className="p-8 md:p-16">
        <BreadCrumb
          pageName="Contract Details"
          firstLevel={{ link: SCREENS.DASHBOARD, text: 'Dashboard' }}
          secondLevel={{ link: SCREENS.CONTRACTORS, text: 'General Contractor' }}
          thirdLevel={{ link: SCREENS.CONTRACTOR_DETAILS, text: 'General contractor details' }}
        />
        <main className="my-6">
          {contract && (<ContractHeader contract={contract!} />) }
          {contract && (<PositionsOverview positions={contract.positions} />)}
        </main>
      </section>
    </Layout>
  )
}

export default Contract;