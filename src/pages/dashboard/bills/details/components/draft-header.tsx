import { useContext } from "react";
import { UserAuthContext } from "../../../../../App";

const DraftHeader = () => {
  const {user} = useContext(UserAuthContext);
  return (
    <div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold uppercase text-primary dark:text-accent-light">
          MAGGA
        </h2>
        <div className="space-y-1 pt-2">
          <p>{user?.address?.street}.</p>
          <p>{user?.address?.province} {user?.address?.zip}</p>
        </div>
      </div>
    </div>
  )
}

export default DraftHeader;