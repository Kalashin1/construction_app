import { useContext } from "react";
import { UserAuthContext } from "../../../../../App";
import { Draft } from "../../../../../types";

const DraftHeader = ({
  draft
}: {
  draft: Draft
}) => {
  const { user } = useContext(UserAuthContext);
  return (
    <div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold uppercase text-primary dark:text-accent-light">
          MAGGA
        </h2>

        <div className="my-2">
        <h2 className="text-lg font-semibold uppercase text-primary dark:text-accent-light">
          {draft.project._id}
        </h2>
        <h2 className="text-lg font-semibold uppercase text-primary dark:text-accent-light">
          {draft.project.building.address}
        </h2>
        </div>
      </div>

      <div className="pt-2">
        <p className="my-2">{user?.address?.street}.</p>
        <p className="my-2">{user?.address?.province} {user?.address?.zip}</p>
      </div>
    </div>
  )
}

export default DraftHeader;