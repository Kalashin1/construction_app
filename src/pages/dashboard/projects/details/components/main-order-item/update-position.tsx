import { Message, ProjectPositions } from "../../../../../../types";
import { notify, NotificationComponent } from "../../../../components/notification/toast";
import { addMessage, updateProjectExtraPosition, updateProjectPosition } from "../../../helper";

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
    location.reload()
  }
}

export const changeExtraPosition = async (
  project_id: string,
  position: ProjectPositions,
  trade_id: string,
  extraOrderId?: string,
) => {
  const [error, payload] = await updateProjectExtraPosition(
    project_id,
    position,
    trade_id,
    extraOrderId,
  );

  if (error) {
    notify(
      (<NotificationComponent message={'Error updating positin!'} />),
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
    location.reload()
  }
}


export const sendMessage = async (message: Message, closeModal: (...args: unknown[]) => void) => {
  const [error, payload] = await addMessage(message);
  if (error) {
    notify(
      (<NotificationComponent message={'oops something happened!'} />),
      {
        className: `bg-red-500 font-bold text-white`,
        closeOnClick: true,
      }
    )
    console.log(error)
  }

  if (payload) {
    notify(
      (<NotificationComponent message={'Message created successfully!'} />),
      {
        className: `bg-green-500 font-bold text-white`,
        closeOnClick: true,
      }
    );
    console.log(payload);
    closeModal()
  }
}