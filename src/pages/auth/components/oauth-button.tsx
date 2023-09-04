import { ReactNode } from "react";

type Props = {
  label: string
  icon: ReactNode
}
const OAuthButton = (props: Props) => {
  return (
    <button
      className="btn w-full space-x-3 border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
    >
      {props.icon}
      <span>{props.label}</span>
    </button>
  );
};

export default OAuthButton;