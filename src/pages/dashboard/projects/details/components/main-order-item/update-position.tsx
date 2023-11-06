import { ProjectPositions } from "../../../../../../types";
import { notify, NotificationComponent } from "../../../../components/notification/toast";
import { updateProjectPosition } from "../../../helper";

export const updatePosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string
) => {
  const [error, payload] = await updateProjectPosition(
    project_id,
    position,
    trade_id
  );

  if (error) {
    notify(
      (<NotificationComponent message={'oops something happened!'} />),
      {
        className: `bg-red-700 font-bold text-white`,
        closeOnClick: true,
      }
    )
    console.log(error)
  }

  if (payload) {
    notify(
      (<NotificationComponent message={'Position updated successfully!'} />),
      {
        className: `bg-green-700 font-bold text-white`,
        closeOnClick: true,
      }
    );
    console.log(payload);
  }
}