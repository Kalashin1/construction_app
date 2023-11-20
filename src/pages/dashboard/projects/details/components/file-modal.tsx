import { ReactNode } from "react";

const FileModal = ({
  title,
  closeModal,
  children
}: {
  title: string;
  closeModal: (...args: unknown[]) => void;
  children: ReactNode
}) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 w-full"
      id="modal1"
      role="dialog"
    >
      <div className="modal-overlay absolute inset-0 bg-slate-900/60" onClick={closeModal}></div>
      <div
        className="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg text-center bg-gray-50 dark:bg-navy-700 md:w-2/5"
      >

        <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl px-4 py-4 flex justify-between items-center flex-row w-full">
          
          <button>
            <i className="fas fa-download" />
          </button>
          <span>

          {title}
          </span>
          <button>
            <i className="fas fa-trash" />
          </button>

        </h2>

        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FileModal;