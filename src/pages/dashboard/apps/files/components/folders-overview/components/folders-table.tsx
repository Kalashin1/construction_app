import { Dispatch, SetStateAction } from "react";
import { getFiles } from '../../../../helper'

export type FolderType = {
  name: string;
  children: FolderType[];
  kind?: string;
}

const FoldersTable = ({
  folders,
  setCurrentFolder
}: {
  folders: FolderType[];
  setCurrentFolder: Dispatch<SetStateAction<FolderType[]>>
}) => {
  const getFolderFiles = async (prefix: string) => {
    const [error, payload] = await getFiles(prefix);
    if (error) {
      alert('oops something happened!');
      console.log(error)
    } else if (payload) {
      console.log("payload", payload);
      setCurrentFolder(payload)
    }
  }
  return (
    <div className="card mt-3">
      <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
        <table className="is-hoverable w-full text-left">
          <thead>
            <tr>
              <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                <button className="mr-4">
                  <i className="fas fa-chevron-left" />
                </button>
                <span>Name</span>
              </th>
              <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Last edit
              </th>
              <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Size
              </th>
              <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Members
              </th>

              <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"></th>
            </tr>
          </thead>
          <tbody>
            {folders && folders.map((folder, index) => (
              <tr key={index} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500 cursor-pointer"
                onClick={() => {
                  if (folder.children.length > 0) {
                    setCurrentFolder(folder.children);
                  } else {
                    console.log(folder.name)
                    getFolderFiles(folder.name);
                  }
                }}
              >
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex items-center space-x-4">
                    {folder.kind ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-5.5 w-5.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                    </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>)}
                    <span className="font-medium text-slate-700 dark:text-navy-100">{folder?.name}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  2 day ago
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-700 dark:text-navy-100 sm:px-5">
                  14.3GB
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <div className="flex -space-x-2">
                    <div className="avatar h-7 w-7 hover:z-10">
                      <img className="rounded-full ring ring-white dark:ring-navy-700" src="images/100x100.png" alt="avatar" />
                    </div>

                    <div className="avatar h-7 w-7 hover:z-10">
                      <div className="is-initial rounded-full bg-info text-xs+ uppercase text-white ring ring-white dark:ring-navy-700">
                        jd
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <button className="btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FoldersTable;