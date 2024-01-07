import { Link } from "react-router-dom";
import { SCREENS } from '../../../../../navigation/constants';

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

const TodosDropdown = () => {
  return (
    <div className="w-64 absolute top-12 left-24" style={{ zIndex: '199999'}}>
      <div className="card p-4 sm:p-5">
      
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

export default TodosDropdown;