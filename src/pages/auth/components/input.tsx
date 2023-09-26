import { Dispatch, ReactNode, SetStateAction } from "react";

type Props = {
  placeholder: string;
  value?: string;
  handleChange?: Dispatch<SetStateAction<string>>;
  icon?: ReactNode;
  type?: string;
  showError?: boolean;
  defaultValue?: string;
  errorMessage?: string;
  name?: string;
  required?: boolean
}

const Input = ({
  handleChange,
  icon,
  placeholder,
  value,
  type = "text",
  showError=false,
  errorMessage='',
  required=false,
  name,
  defaultValue,
}: Props) => {
  return (
    <div>
      <label className="relative flex">
        <input
          className="form-input peer w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
          placeholder={placeholder}
          value={value}
          required={required}
          name={name ? name: ''}
          onChange={e => handleChange && handleChange(e.target.value)}
          type={type}
          defaultValue={defaultValue}
        />
        <span
          className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
        >
          {typeof icon === 'string' ? icon : (<i className={`${icon}`} />)}
        </span>
      </label>
      {showError && (<small className="text-red-500">{errorMessage}</small>)}
    </div>
  );
};

export default Input;