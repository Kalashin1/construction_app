import { FC } from "react";
import { Link } from "react-router-dom";

export type AppCardProps = {
  svg: JSX.Element;
  text: string;
  description: string;
  link: string;
}

const AppCard: FC<AppCardProps> = ({
  description,
  link,
  svg,
  text
}) => {
  return (
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        {svg}
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        {text}
      </h2>
      <p className="mt-1">
        {description}
      </p>
      <div className="mt-5 pb-1">
        <Link to={link} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
  )
}

export default AppCard;