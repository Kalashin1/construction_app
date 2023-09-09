import BillingDetails from "./billing-details";
import ContactDetails from "./contact-person";
import Documents from "./documents";
import EmployeesOverview from "./employees-overview";
import Frameworks from "./frameworks";
import Profile from "./profile";
import TargetSales from "./target-sales";

const TabContent = (currentTab: number) => {
  switch (currentTab) {
    case 0:
      return (
        <div>
          <Profile />
        </div>
      );
    case 1: 
      return (
        <div>
          <BillingDetails />
        </div>
      );
    case 2: 
      return (
        <div>
          <Frameworks />
        </div>
      );
    case 3: 
      return (
        <div className="overflow-x-scroll example">
          <Documents />
        </div>
      )
    case 4:
      return (
        <div className="overflow-x-scroll example">
          <ContactDetails />
        </div>
      );
    case 5:
      return (
        <div>
          <TargetSales />
        </div>
      );
    case 6:
      return (
        <div className="overflow-x-scroll example">
          <EmployeesOverview />
        </div> 
      );
    default: 
      return (
        <div>
          <Profile />
        </div>
    );
  }

}

export default TabContent;