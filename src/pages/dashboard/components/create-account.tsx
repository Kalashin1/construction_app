/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useRef, useState } from "react";
import Button from "../../auth/components/button";
import Input from "../../auth/components/input";
import { EmailIcon, PasswordIcon } from "../../auth/svg";
import { createAccount, generateUserId } from "../../auth/action";
import { User } from "../../../types";

const CreateAccountButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => {
  return (
    <button className="my-4 px-4 w-full bg-gray-200 text-left rounded-md shadow-md font-bold py-4 dark:bg-navy-600 dark:text-white flex justify-between flex-row"
      onClick={action}
    >
      <span>Create Account</span>
      <span>
        <i className="fas fa-chevron-down" />
      </span>
    </button>
  );
};

type DropdownItemProps = {
  svg: string;
  text: string;
  action: (...args: unknown[]) => void;
}


const DropdownItem = ({
  svg,
  text,
  action
}: DropdownItemProps) => (
  <li>
    <button
      className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent cursor-pointer w-full"
      onClick={action}
    >
      <span>
        <i className={svg} />
      </span>
      <span>{text}</span>
    </button>
  </li>
)

export const CreateAccountDropdown = ({
  links
}: { links: DropdownItemProps[] }) => {
  return (
    <div className="w-1/3 ml-auto">
      <div className="card p-4 sm:p-5">

        <ul className="mt-6 space-y-1.5 font-inter font-medium">
          {links.map((l, i) => (
            <DropdownItem
              key={i}
              svg={l.svg}
              text={l.text}
              action={l.action}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export const CreateAccountModal = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null)

  const createSubAccount = async (e: Event, form: HTMLFormElement) => {
    e.preventDefault();
    setIsLoading(true)
    setError(false)
    const { email: { value: email }, password: { value: password }, userRole: { value: role } } = form;
    const [err, user] = await createAccount({
      email,
      password,
      role,
      type: 'email'
    });
    setIsLoading(false)
    if (err) {
      alert('oops something happened!')
      console.log(err)
      setError(true)
    } else if (user) {
      alert('user account created successfully!');
      action();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 w-full"
      id="modal1"
      role="dialog"
    >
      <div className="modal-overlay absolute inset-0 bg-slate-900/60" onClick={action}></div>
      <div
        className="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5 w-2/5"
      >


        <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
          Create User Account
        </h2>
        <div className="mt-4 w-full">
          <form className="mt-4 space-y-4" ref={form}>
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
            <label className="block text-left">
              <select
                name="userRole"
                className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
              >
                <option value="contractor">Contractor</option>
              </select>
            </label>
          </form>
          <Button
            label="Create account"
            type="submit"
            disabled={isLoading}
            action={(e) => {
              createSubAccount(e as Event, form.current!)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const CopyTokenModal = ({
  action,
  userId,
}: {
  action: (...args: unknown[]) => void;
  userId: string
}) => {
  const [user, setUser] = useState<Partial<User>>()
  const makeUser = async () => {
    const _user = await generateUserId("contractor", userId);
    console.log(_user)
    setUser(_user)
    alert('user created successfully');
    navigator.clipboard.writeText(paraRef.current?.innerText!)
  }

  const copyId = async () => {
    await navigator.clipboard.writeText(paraRef.current?.innerText!)
    alert('token copied!')
    action()
  }
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5 w-full"
      id="modal1"
      role="dialog"
    >
      <div className="modal-overlay absolute inset-0 bg-slate-900/60" onClick={action}></div>
      <div
        className="modal-content scrollbar-sm relative flex max-w-lg flex-col items-center overflow-y-auto rounded-lg bg-white px-4 py-10 text-center dark:bg-navy-700 sm:px-5 w-2/5"
      >


        <h2 className="line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100 lg:text-xl">
          Copy your token
        </h2>
        <div className="mt-4 w-full">
          <p ref={paraRef}>{user?._id ? user._id : ''}</p>
          {user ? (<Button
            label="Copy token"
            action={copyId}
          />) : (<Button
            label="Generate"
            action={async () => await makeUser()}
          />)}
        </div>
      </div>
    </div>
  )
}

export default CreateAccountButton;