/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Modal } from "../../../profie/components/account-settings"
import { Button as UploadButton } from "../../../../auth/components";
import { getFile } from "../../../helper/uploads";
import { NotificationComponent, notify } from "../../../components/notification/toast";
import { updateProjectExtraPosition, updateProjectPosition, uploadExtraPositionFile, uploadPositionFile } from "../../helper";
import { ProjectPositions } from "../../../../../types";
import { useState } from "react";

const UploadFileModal = ({
  closeModal,
  position,
  project_id,
  trade,
  type,
  addendum_id
}: {
  closeModal: (...args: unknown[]) => void;
  project_id: string;
  position: ProjectPositions;
  type: string
  trade: string;
  addendum_id?: string
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const uploadDocument = async () => {
    setIsLoading(true)
    const [error, file] = await getFile(
      {
        'application/*': ['.pdf'],
        'image/*': ['.png', '.svg', '.jpeg', '.jpg']
      },
      'project-document',
      true
    )
    setIsLoading(false)
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
      setIsLoading(true)
      type returnType = Awaited<ReturnType<typeof uploadPositionFile>>
      let err: returnType[0], payload: returnType[1];
      if (type === 'position') {
        [err, payload] = await uploadPositionFile(project_id, position?.external_id!, trade, file)
      } else {
        [err, payload] = await uploadExtraPositionFile(project_id, position?.external_id!, addendum_id!, file)
      }
      setIsLoading(false)
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
        
        console.log(payload)
        const documentURL: string[] = [];
        setIsLoading(true)
        if (position.documentURL)
          documentURL.push(...position.documentURL)

        documentURL.push(...payload)
        let _error, data;
        if (type === 'project') {
          [_error, data] = await updateProjectPosition(project_id, {
            ...position,
            documentURL,
          }, trade)
        } else {
          [_error, data] = await updateProjectExtraPosition(
            project_id,
            {
              ...position,
              documentURL,
            },
            position.trade!,
            addendum_id
          )
        }
        setIsLoading(false)
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
          disabled={isLoading}
          action={uploadDocument}
        />
      </div>
    </Modal>
  )
}

export default UploadFileModal;