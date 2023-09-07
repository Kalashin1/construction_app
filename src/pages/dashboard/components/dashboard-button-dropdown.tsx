import {ReactNode} from "react"
import {UserIcon} from "../svg"
import { Link } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

type DropdownItemProps = {
  svg: ReactNode;
  text: string;
}

const links = [{
  text: 'Account',
  svg: (<UserIcon width={10} color="#000" />)
}]

const DropdownItem = ({
  svg,
  text
}: DropdownItemProps) => (
  <li>
    <Link
      className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
      to={SCREENS.PROFILE}
    >
      {svg}
      <span>{text}</span>
    </Link>
  </li>
)

const DashboardButtonDropdown = () => {
  return (
    <div className="w-64 absolute top-12 -left-44">
      <div className="card p-4 sm:p-5">
        <div className="flex items-center space-x-4">
          <div className="avatar h-14 w-14">
            <img
              className="rounded-full"
              src="images/100x100.png"
              alt="avatar"
            />
          </div>
          <div>
            <h3
              className="text-base font-medium text-slate-700 dark:text-navy-100"
            >
              Ibrahim Balde
            </h3>
            <p className="text-xs+">Admin</p>
          </div>
        </div>
        <ul className="mt-6 space-y-1.5 font-inter font-medium">
         {links.map((l) => (
            <DropdownItem
              svg={l.svg}
              text={l.text}
            />
         ))}
        </ul>
      </div>
    </div>
  )
}

export default DashboardButtonDropdown;