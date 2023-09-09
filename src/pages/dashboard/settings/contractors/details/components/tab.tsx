import TabNav from "./tabnav";
import { useState } from 'react';
import Profile from "./profile";
import BillingDetails from "./billing-details";
import Frameworks from "./frameworks";
import ContactDetails from "./contact-person";
import Documents from "./documents";
import TargetSales from "./target-sales";

const Tab = () => {

  const [currentTab, updateCurrentTab] = useState(0)

  const sidebarLinks = [{
    text: 'Base Data',
    icon: 'fas fa-user'
  },
  {
    text: 'Billing Details',
    icon: 'fas fa-file-lines'
  },
  {
    text: 'Framework and project contracts',
    icon: 'fas fa-file-pdf'
  },
  {
    text: 'Documents',
    icon: 'fas fa-file'
  },
  {
    text: 'Contact Person',
    icon: 'fas fa-address-book'
  },
  {
    text: 'Target sales',
    icon: 'fas fa-euro'
  }];

  return (
    <div className="md:grid md:grid-cols-12 w-full md:p-2">
      <TabNav
        links={sidebarLinks}
        changeTab={updateCurrentTab}
      />
      <div className="grid col-span-8 my-4 md:my-0 md:ml-10">
        {currentTab === 0 && (
          <div>
            <Profile />
          </div>
        )}
        {currentTab === 1 && (<div>
            <BillingDetails />
          </div>
          )}
       {currentTab === 2 && ( <div>
          <Frameworks />
        </div>)}
        {currentTab === 3 && (<div className="overflow-x-scroll example">
          <Documents />
        </div>)}
        {currentTab === 4 && (<div className="overflow-x-scroll example">
        <ContactDetails />
        </div>)}
        {currentTab === 5 && (<div>
          <TargetSales />
        </div>)}
      </div>
    </div>
  )
}

export default Tab;