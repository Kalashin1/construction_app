import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { Button } from "../../../../components/current-projects";
import Pagination from "../../../../components/pagination";
import { ReferrerType, User } from "../../../../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../../../helper/user";

const EmployeeRow = ({
  employeeId
}: {
  employeeId: string;
}) => {
  const [employee, setEmployee] = useState<User | null>(null);
  useEffect(() => {
    const getEmployee = async () => {
      const [error, _employee] = await getUserById(employeeId);
      if (error) {
        console.log(error);
      } else if (_employee) {
        setEmployee(_employee);
      }
    }

    getEmployee();
  }, [employeeId])
  return (
    <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">{employee?.first_name} {employee?.last_name}</td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        {employee?.position}
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">{employee?.email}</td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <div className="avatar mr-3 hidden h-8 w-8 lg:flex">
          <img
            className="rounded-full"
            src={employee && employee.avatar ? employee.avatar : "images/100x100.png"}
            alt="avatar"
          />
        </div>
      </td>
    </tr>
  )
}

const EmployeeSummaryTable = ({
  employees
}: {
  employees: ReferrerType[]
}) => {
  const dataTitles = ['Name', 'Position', 'email', 'status']
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto my-4">
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
          {employees && employees.map((employee, index) => (
            <EmployeeRow employeeId={employee?.id as string} key={index} />
          ))}
        </tbody>

      </table>
    </div>
  );
};

export const SelectBox = <T extends ReactNode | number,>({
  label,
  value,
  handleChange,
  values
}: {
  label?: string;
  value: number;
  handleChange: Dispatch<SetStateAction<number>>;
  values: T[]
}) => (
  <label className="block">
    <span>{label && label}</span>
    <select
      className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
      value={value}
      onChange={(e) => handleChange(parseFloat(e.target.value))}
    >
      {values.map((v, i) => (<option key={i} value={v as string}>{v}</option>))}
    </select>
  </label>
)

export const TableSearch = () => (
  <label className="flex flex-row justify-between items-center">
    <span className="mr-2">Search</span>
    <input
      className="form-input w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
      placeholder="Project"
      type="text"
    />
  </label>
)

const EmployeeSummary = ({
  owner_id
}: {
  owner_id?: string
}) => {
  const navigate = useNavigate();
  const [numRows, setNumRows] = useState(0);

  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const setUp = async () => {
      let err, _user;
      if (!owner_id) {
        [err, _user] = await getUserById(id!);
      } else {
        [err, _user] = await getUserById(owner_id)
      }
      if (!_user || err) {
        alert('error getting user')
      }

      if (_user) {
        setUser(_user);
      }
    }

    setUp()
  }, [navigate, id, owner_id]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">


      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/4 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 md:w-2/5 w-4/5">
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
        {user && (<EmployeeSummaryTable employees={user?.employees} />)}
        <Pagination />
      </div>
    </div>
  )
}

export default EmployeeSummary;