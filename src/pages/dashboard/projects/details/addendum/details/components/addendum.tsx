/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useParams } from "react-router-dom";
import ExtraOrders from "../../../components/extra-orders";
import { getProject } from "../../../../../helper/project";
import { NotificationComponent, notify } from "../../../../../components/notification/toast";
import { ExtraProjectPositionSuper, InteractWithAddendumPayload, ProjectPositions } from "../../../../../../../types";
import { useContext, useEffect, useState } from "react";
import AcceptProjectFloatingActionButton from "../../../components/accept-project";
import DeclineProjectFloatingActionButton from "../../../components/decline-project";
import { UserAuthContext } from "../../../../../../../App";
import { interactWithProjectAddendum } from "../../../../helper";

const AddendumPage = () => {
  const { project_id, id } = useParams();
  const [addendum, setAddendum] = useState<ExtraProjectPositionSuper>()
  const [positions, setPositions] = useState<ProjectPositions[]>([])
  const [showAcceptButton, updateShowAcceptButton] = useState(false);
  const { user } = useContext(UserAuthContext);

  useEffect(() => {
    const setUp = async () => {
      const [error, payload] = await getProject(project_id!);
      if (error) {
        notify(
          (<NotificationComponent message="Error fetching project" />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(error)
      }

      if (payload) {
        const extraPosition = payload.extraPositions.find((extraPos) => extraPos.id === id);
        setAddendum(extraPosition);
        const _positions: ProjectPositions[] = [];
        for (const key in extraPosition?.positions) {
          for (const pos of extraPosition.positions[key].positions) {
            pos.executor = extraPosition.positions[key].executor
            _positions.push(pos)
          }
        }

        setPositions(_positions);
        console.log(user?.role)
        if (extraPosition?.createdBy._id === user?._id) {
          updateShowAcceptButton(false);
        }
        if (extraPosition?.acceptedAt) updateShowAcceptButton(false)

        if (extraPosition?.createdBy._id !== user?._id && user?._id === extraPosition?.acceptedBy?._id && !extraPosition?.acceptedAt) {
          updateShowAcceptButton(true);
        }
      }
    }

    setUp()
  }, [id, project_id, user?._id, user?.role])

  const interactWithAddendum = async (payload: InteractWithAddendumPayload) => {
    const [error, data] = await interactWithProjectAddendum(payload);
    if (error) {
      notify(
        (<NotificationComponent message="Error interact with addendum" />),
        { className: 'bg-red-500 text-white' }
      )
      console.log(error)
    }

    if (data) {
      notify(
        (<NotificationComponent message="You have interacted with addendum" />),
        { className: 'bg-red-500 text-white' }
      );
      console.log(data);
      location.reload();
    }
  }
  return (
    <div>
      {addendum && positions && (
        <ExtraOrders
          comment={addendum.comment}
          createdAt={addendum?.createdAt}
          extraOrderId={id!}
          positions={positions}
          createdBy={addendum.createdBy._id}
          projectId={project_id!}
        />
      )}
      {showAcceptButton && addendum && (
        <AcceptProjectFloatingActionButton
          action={() => {
            interactWithAddendum({
              user_id: user?._id!,
              action: 'ACCEPT',
              addendum_id: addendum?.id,
              project_id: project_id!
            })
          }}
        />
      )}
      {showAcceptButton && addendum && (
        <DeclineProjectFloatingActionButton
          action={() => {
            interactWithAddendum({
              user_id: user?._id!,
              action: 'REJECT',
              addendum_id: addendum?.id,
              project_id: project_id!
            })
          }}
        />)}
    </div>
  );
};

export default AddendumPage;