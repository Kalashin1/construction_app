/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Modal } from "../../../profie/components/account-settings"
import { Button as UploadButton } from "../../../../auth/components";
import { getFile } from "../../../helper/uploads";
import { NotificationComponent, notify } from "../../../components/notification/toast";
import { updateProjectPosition, uploadPositionFile } from "../../helper";
import { ProjectPositions } from "../../../../../types";

const UploadFileModal = ({
  closeModal,
  position,
  project_id,
  trade
}: {
  closeModal: (...args: unknown[]) => void;
  project_id: string;
  position: ProjectPositions;
  trade: string;
}) => {

  const uploadDocument = async () => {
    const [error, file] = await getFile(
      {
        'application/*': ['.pdf'],
        'image/*': ['.png', '.svg', '.jpeg', '.jpg']
      },
      'project-document',
      true
    )
    if (error) {
      notify(
        (<NotificationComponent message={'error getting file!'} />),
        {
          className: `bg-red-400 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (file) {
      const [err, payload] = await uploadPositionFile(project_id, position?.external_id!, trade, file[0])
      if (err) {
        console.log(err)
        notify(
          (<NotificationComponent message={'error uploading file!'} />),
          {
            className: `bg-red-400 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(err)
      }

      if (payload) {
        const documentURL: string[] = [];
        if (position.documentURL)
          documentURL.push(...position.documentURL)

        documentURL.push(payload.publicUrl)
        const [_error, data] = await updateProjectPosition(project_id, {
          ...position,
          documentURL,
        }, trade)
        if (_error) {
          console.log('upload position _error', _error);
          notify(
            (<NotificationComponent message={'error updating positions!'} />),
            {
              className: `bg-red-400 font-bold text-white`,
              closeOnClick: true,
            }
          )
        }

        if (data) {
          console.log(data);
          notify(
            (<NotificationComponent message={'File uploaded successfully!'} />),
            {
              className: `bg-green-700 font-bold text-white`,
              closeOnClick: true,
            }
          )
          window.location.reload()
        }
      }
    }
  }
  return (
    <Modal
      title="Add File"
      closeModal={closeModal}
    >
      <div className="card">
        <UploadButton
          label="Select File"
          action={uploadDocument}
        />
      </div>
    </Modal>
  )
}

export default UploadFileModal;