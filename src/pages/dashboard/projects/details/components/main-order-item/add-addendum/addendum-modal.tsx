import { ReactNode } from "react";

const AddendumModal = ({
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
        className="modal-content scrollbar-sm relative bg-white flex max-w-lg flex-col items-center overflow-y-auto rounded-lg px-4 py-10 text-center dark:bg-navy-700 sm:px-5 md:w-11/12"
      >


        <div className="w-full">
        <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
          {title}
        </h2>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AddendumModal;