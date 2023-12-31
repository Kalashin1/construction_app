import { useState, useCallback } from "react";
import FileModal from "../file-modal"
import { ProjectPositions } from "../../../../../../types";
import { updateProjectPosition } from "../../../helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";

const UploadedFileModal = ({
  title,
  closeModal,
  image: images,
  position,
  project_id
}: {
  title: string;
  closeModal: (...args: unknown[]) => void;
  image: string[];
  project_id: string;
  position: ProjectPositions

}) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  console.log(images)

  const getNextImage = useCallback(() => {
    let nextImage = images[images.indexOf(currentImage) + 1];
    if (!nextImage) {
      nextImage = images[0];
    }
    setCurrentImage(nextImage)
  }, [currentImage, images])

  const getPreviousImage = useCallback(() => {
    let previousImage = images[images.indexOf(currentImage) - 1]
    if (!previousImage) {
      previousImage = images[images.length - 1]
    }
    setCurrentImage(previousImage)
  }, [currentImage, images])

  const deleteImage = async () => {
    const [error, payload] = await updateProjectPosition(
      project_id,
      {
        ...position,
        documentURL: images.filter((image) => image !== currentImage)
      },
      position.trade as string
    );
    if (error) {
      notify(
        (<NotificationComponent message="Error deleting file" />),
        { className: 'bg-red-500 text-whitr' }
      )
      console.log(error);
    }

    if (payload) {
      notify(
        (<NotificationComponent message="File deleted successfully!" />),
        { className: 'bg-green-500 text-whitr' }
      )
      location.reload()
    }
  }
  return (
    <FileModal
      closeModal={closeModal}
    >
      <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl px-4 py-4 flex justify-between items-center flex-row w-full">

        <a href={currentImage} download>
          <i className="fas fa-download" />
        </a>
        <span>

          {title}
        </span>
        <button
          onClick={deleteImage}
        >
          <i className="fas fa-trash" />
        </button>

      </h2>
      <div className="w-full relative">
        <div className="flex flex-row text-2xl font-bold top-2/4 -translate-y-2/4 px-2 absolute w-full justify-between items-center">
          <button
            onClick={getPreviousImage}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={getNextImage}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
        <img className="w-full h-auto object-cover" src={currentImage} />
      </div>
    </FileModal>
  )
}

export default UploadedFileModal;