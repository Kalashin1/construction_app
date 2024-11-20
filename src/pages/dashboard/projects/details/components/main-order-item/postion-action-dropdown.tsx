import { PROJECT_POSITION_TEXT, PROJECT_POSITION_STATUS } from "../../../../../../types";
import { Dropdown } from "../dropdown";

export type links = {
  text: typeof PROJECT_POSITION_TEXT[number],
  action: (status: typeof PROJECT_POSITION_STATUS[number]) => void;
  status: typeof PROJECT_POSITION_STATUS[number]
}

const PositionActionDropdown = ({
  mainOrderLinks
}: {
  mainOrderLinks: links[]
}) => {
  return (
    <div className="absolute right-6 top-8">
      <Dropdown>
        <ul>
          {mainOrderLinks.map((link, index) => {
            return (
              <li key={index}>
                <button onClick={() => link.action(link.status)} className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 w-full dark:focus:bg-navy-600 dark:focus:text-navy-100">

                  <span> {link.text}</span></button>
              </li>
            )
          })}
        </ul>
      </Dropdown>
    </div>
  )
}

export default PositionActionDropdown;