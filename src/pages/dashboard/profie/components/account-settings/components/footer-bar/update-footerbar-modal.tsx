/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useState, useEffect, useRef, useContext } from "react";
import { User } from "../../../../../../../types";
import { Button } from "../../../../../../auth/components";
import { assignStandIn, retrieveEmployees } from "../../../../../helper/user";
import { Modal } from "../..";
import { UserAuthContext } from "../../../../../../../App";
// import EmployeeList from "../employee_list";

const UpdateFooterBarModal = ({
  closeModal,
}: {
  closeModal: (...args: unknown[]) => void;
}) => {
  type Employee = Pick<User, 'email' | 'role'> & { id: string }
  const [employees, setEmployees] = useState<Employee[] | null>(null);

  const {getUser, setCurrentUser, user} = useContext(UserAuthContext);

  useEffect(() => {
    const getEmployees = async () => {
      const [err, _employees] = await retrieveEmployees(user?._id!);
      console.log(_employees)
      if (err) {
        alert('error fetching employees');
        console.log(err);
      } else if (_employees) {
        console.log(_employees);
        setEmployees(_employees);
      }
    }

    getEmployees()
  }, [user])
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, showIsLoading] = useState(false);

  const assignNewStandIn = async (
    e: Event,
    form: HTMLFormElement
  ) => {
    e.preventDefault();
    showIsLoading(true);
    const { employee: { value: employee } } = form;
    const selectedEmployee = employees!.find((e) => e.id == employee);
    console.log('selectedEmployee', selectedEmployee);
    const [err, payload] = await assignStandIn(user?._id!, { ...selectedEmployee! });
    showIsLoading(false)
    if (err) {
      alert('oops something happened');
      console.log(err);
    } else if (payload) {
      alert('Stand-in set successfully')
      console.log(payload);
      const [error, _user] = await getUser!()
      if (error) {
        alert('oops error getting user');
        console.log(error);
      } else if (_user) {
        setCurrentUser!(_user);
      }
      closeModal()
      showIsLoading(false);
    }
  }

  return (
    <Modal
      title="Select New Stand In"
      closeModal={closeModal}
    >
      <form className="mt-4 space-y-4" ref={form}>
        <label className="block">
          <input
            className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
            placeholder="Username"
            type="text"
          />
        </label>
        {/* <EmployeeList /> */}
        <Button
          label="Add Bank Details"
          action={(e) => { assignNewStandIn(e as Event, form.current!) }}
          disabled={isLoading}
        />
      </form>
    </Modal>
  )
}

export default UpdateFooterBarModal;