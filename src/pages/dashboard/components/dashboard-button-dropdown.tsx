import { Link } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";
import { UserAuthContext } from "../../../App";
import {useContext} from 'react';

type DropdownItemProps = {
  svg: string;
  text: string;
  link: string
}

const links = [{
  text: 'Account',
  svg: 'fas fa-user',
  link: SCREENS.PROFILE
},
{
  text: 'Todos',
  svg: 'fas fa-cog',
  link: SCREENS.TODO
}]

const DropdownItem = ({
  svg,
  text,
  link
}: DropdownItemProps) => (
  <li>
    <Link
      className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
      to={link}
    >
      <span>
        <i className={svg} />
      </span>
      <span>{text}</span>
    </Link>
  </li>
)

const DashboardButtonDropdown = () => {

  const {user} = useContext(UserAuthContext)
  
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
             {`${user?.last_name} ${user?.first_name}`}
            </h3>
            <p className="text-xs+">{user?.role}</p>
          </div>
        </div>
        <ul className="mt-6 space-y-1.5 font-inter font-medium">
          {links.map((l, i) => (
            <DropdownItem
              key={i}
              svg={l.svg}
              link={l.link}
              text={l.text}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DashboardButtonDropdown;