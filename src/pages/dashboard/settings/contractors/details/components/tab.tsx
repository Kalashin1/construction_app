import TabNav from "./tabnav";
import { useState } from 'react';
import TabContent from "./tab-content";

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
  },
  {
    text: 'Employees',
    icon: 'fas fa-users',
  }
  ];

  return (
    <div className="md:grid md:grid-cols-12 w-full md:p-2">
      <TabNav
        links={sidebarLinks}
        changeTab={updateCurrentTab}
      />
      <div className="grid col-span-8 my-4 md:my-0 md:ml-10">
        {TabContent(currentTab)} 
      </div>
    </div>
  )
}

export default Tab;