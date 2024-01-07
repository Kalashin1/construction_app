import { useContext } from "react";
import { UserAuthContext } from "../../../../../../App";
import AppCard from "./app-card";
import { app_array } from "./app_array";

const Apps = () => {
  const { user } = useContext(UserAuthContext);
  return (
    <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
      {user && app_array(user._id!).map((app, index) => (
        <AppCard
          key={index}
          {...app}
        />
      ))}
    </div>
  )
}

export default Apps;