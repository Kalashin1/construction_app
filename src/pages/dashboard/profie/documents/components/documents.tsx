/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { UserAuthContext } from '../../../../../App';
import { UserDocumentsKeys } from '../../../../../types';
import { useContext } from 'react';
import { getFile, uploadDocument } from '../../../helper/uploads';
import { Link } from 'react-router-dom';

const DocumentsTable = () => {
  const { user, setCurrentUser } = useContext(UserAuthContext);
  const dataTitles = ['Documents', 'Mandatory', 'Status', ''];

  function splitCamelCase(word: string) {
    const words = word.split(/(?=[A-Z])+/);
    return words.join(' ');
  }

  const uploadUserDocument = async (documentType: string) => {
    const [err, file] = await getFile();
    if (err) {
      console.log(err)
    } else if (file) {
      const [error, payload] = await uploadDocument(
        user?._id!,
        file[0],
        documentType
      )
      if (error) {
        alert('oops something happened!');
        console.log(error)
      } else if (payload) {
        alert(`profile photo updated successfully!`);
        setCurrentUser!(payload.user);
      }
    }
  }

  return (
    <div className="min-w-full overflow-x-scroll my-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">

            {dataTitles.map((dt, i) => (
              <th
                className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                key={i}
              >
                {dt}
              </th>
            ))}

          </tr>
        </thead>
        <tbody>
          {UserDocumentsKeys && UserDocumentsKeys.map((userDocK, index) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500" key={index}>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link to={user?.documents ? user?.documents[index]?.fileUrl : ''} className='text-blue-500 underline' target='_blank'>{splitCamelCase(userDocK)}</Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <span>
                  <i className="fas fa-check" />
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {user?.documents && user?.documents[index] ? user?.documents[index]?.status : "Pending Upload"}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {user?.documents && user?.documents[index]?.name === userDocK ? (<button
                  className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                >
                  Update Document
                </button>) : (
                  <button
                    className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                    onClick={() => uploadUserDocument(userDocK)}>
                    Upload Document
                  </button>
                )}

              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};


const DocumentsOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="md:w-3/6 my-4">
        <h3 className="text-md font-bold">
          <span className="mr-4">
            <i className="fas fa-file-lines text-md" />
          </span>
          Documents Provided
        </h3>
      </div>


      <div>
        <DocumentsTable />
      </div>
    </div>
  )
}

export default DocumentsOverview;