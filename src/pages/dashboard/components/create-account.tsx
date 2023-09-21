import Button from "../../auth/components/button";
import Input from "../../auth/components/input";
import { EmailIcon, PasswordIcon } from "../../auth/svg";

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
}) => (
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
        <div className="mt-4 space-y-4">
          <Input
            placeholder="magga@magga.de"
            type="email"
            icon={<EmailIcon />}
          />
          <Input
            placeholder="Passwort"
            type="password"
            icon={<PasswordIcon />}
          />
          <label className="block text-left">
            <select
              className="form-select mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
            >
              <option>Contractor</option>
            </select>
          </label>
        </div>
        <Button
          label="Create account"
          action={action}
        />
      </div>
    </div>
  </div>
)

export const CopyTokenModal = ({
  action
}: {
  action: (...args: unknown[]) => void
}) => (
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
        <p>DHG892DJDK</p>
        <Button
          label="Copy token"
          action={action}
        />
      </div>
    </div>
  </div>
)

export default CreateAccountButton;