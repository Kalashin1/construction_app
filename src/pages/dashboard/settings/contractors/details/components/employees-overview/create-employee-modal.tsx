import { Dispatch, SetStateAction, useRef, useState } from "react";
import { User } from "../../../../../../../types";
import { Button, Input } from "../../../../../../auth/components";
import { EmailIcon, PasswordIcon, UserIcon } from "../../../../../../auth/svg";
import { assingEmployee } from "../../../../../helper/user";
import { Modal } from "../../../../../profie/components/account-setting";
import { createAccount } from "../../../../../../auth/action";

export const CreateEmployeeAccountModal = ({
  closeModal,
  owner_id,
  setUser,
}: {
  closeModal: (...args: unknown[]) => void;
  owner_id: string;
  setUser: Dispatch<SetStateAction<User | null>>
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createEmployeeAccount = async (
    e: Event,
    form: HTMLFormElement
  ) => {
    e.preventDefault();
    setIsLoading(true)
    setError(false);
    const { 
      email: {value: email},
      password: {value: password}, 
      first_name: {value: first_name},
      last_name: {value: last_name},
      position: {value: position},
    } = form;
    const [err, employee] = await createAccount({
      email,
      password,
      type: "EMAIL",
      role: 'employee',
      first_name,
      last_name,
      position,
    });
    if (err) {
      alert('oops something happened!')
      console.log(err);
    } else if (employee) {
      const [error, payload] = await assingEmployee(owner_id, employee._id!);
      setIsLoading(false)
      if (error) {
        alert('oops something happened!');
        console.log(error);
      } else {
        alert('employee created successfully!');
        console.log(payload);
        closeModal()
        setUser(payload.owner)
      }
    }
  }


  return (
    <Modal
      closeModal={closeModal}
      title="Create Employee account"
    >
      <form className="mt-4 space-y-4" ref={form}>
        <Input
          placeholder="Ibrahim"
          type="text"
          name="first_name"
          icon={<UserIcon />}
        />
        <Input
          placeholder="Balde"
          type="text"
          name="last_name"
          icon={<UserIcon />}
        />
        <Input
          placeholder="magga@magga.de"
          type="email"
          name="email"
          icon={<EmailIcon />}
        />
        {error && (<small className="font-bold text-red-600 text-left">Email already in use</small>)}
        <Input
          placeholder="Passwort"
          type="password"
          name="password"
          icon={<PasswordIcon />}
        />
        <select name="position" className="w-full border-2 borde-gray-900 p-2">
          <option value="plumbing">Plumber</option>
          <option value="painting">Painter</option>
        </select>
        <Button
          label="Create account"
          type="submit"
          disabled={isLoading}
          action={(e) => {
            createEmployeeAccount(e as Event, form.current!)
          }}
        />
      </form>
    </Modal >
  )
}