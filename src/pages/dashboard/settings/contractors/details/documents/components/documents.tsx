import { useContext, useEffect, useState } from "react";
import { Button } from "../../../../../components/current-projects";
import Pagination from "../../../../../components/pagination";
import { SelectBox, TableSearch } from "../../../../../components/project-summary";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../../../helper/user";
import { User, UserDocument } from "../../../../../../../types";
import { UserAuthContext } from "../../../../../../../App";
import { updateDocument } from "../../../../helper";

const DocumentsTable = ({
  documents,
  documentOwner
}: {
  documents: UserDocument[],
  documentOwner: string;
}) => {
  const dataTitles = ['Preview', 'Status', 'Created', 'Action']
  const {user} = useContext(UserAuthContext)
  console.log("documents", documents)

  const updateUserDocument = async (name: string, status: string, _id: string) => {
    const [error, payload] = await updateDocument({name, status}, _id);
    if (error) {
      alert('Oops something happened!');
      console.log(error)
    } else if (payload) {
      alert('Status updated!')
      console.log(payload)
    }
  }

  function splitCamelCase(word: string) {
    const words = word.split(/(?=[A-Z])+/)
    return words.join(' ');
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
          {documents && documents.map((doc: UserDocument) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{splitCamelCase(doc.name)}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">{doc.status}</td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {new Date(Number(doc.uploadedAt)).toDateString()}
              </td>
              {user?.role === 'admin' && (<td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <button className="mr-4 font-2xl text-red-500"onClick={() => updateUserDocument(doc.name, 'REJECTED', documentOwner)}>
                  <i className="fas fa-times" />
                </button>
                <button 
                  className="text-success font-2xl"
                  onClick={() => updateUserDocument(doc.name, 'APPROVED', documentOwner)}
                >
                  <i className="fas fa-check"/>
                </button>
              </td>)}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};


const Documents = () => {
  const { id } = useParams();
  const [numRows, setNumRows] = useState(0)
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    const getUserDetails = async (id: string) => {
      const [error, _user] = await getUserById(id)
      if (error) {
        alert('error getting user account');
        console.log(error);
      }

      if (_user) {
        console.log(_user);
        setUser(_user)
      }
    }

    getUserDetails(id!)
  }, [id])
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

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/6 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 w-2/5">
          <TableSearch />
        </div>

        <div className="ml-4 hidden md:block">
          <Button
            action={() => { }}
            label="Excel"
          />
        </div>
      </div>
      <div>
        {user && (<DocumentsTable documents={user?.documents} documentOwner={user&&user._id!} />)}
        <Pagination />
      </div>
    </div>
  )
}

export default Documents;