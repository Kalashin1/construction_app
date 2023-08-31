import { Link } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

const AuthHeader = () => {
  return (
    <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
      <Link to={SCREENS.HOME} className="flex items-center space-x-2 md:relative -top-6">
        <img className="h-24 w-24" src="images/magga-logo.svg" alt="logo" />
        <p
          className="text-xl font-semibold uppercase text-slate-700 dark:text-navy-100"
        >
          MAGGA
        </p>
      </Link>
    </div>
  );
};

export default AuthHeader;