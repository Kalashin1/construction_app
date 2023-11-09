import FileModal from "../file-modal"

const UploadedFileModal = ({
  title,
  closeModal,
  image
}: {
  title: string;
  closeModal: (...args: unknown[]) => void;
  image
}) => {
  return (
    <FileModal
      title={title}
      closeModal={closeModal}
    >
      <div>
        <img className="w-full h-auto object-cover" src={image} />
      </div>
    </FileModal>
  )
}

export default UploadedFileModal;