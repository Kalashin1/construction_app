import { Link } from "react-router-dom";
import { SCREENS } from "../../../../../navigation/constants";
import { useEffect, useState } from "react";

type DropdownItemProps = {
  text: string;
}

const links = [
  {
    text: 'Download Short Text',
  },
  {
    text: 'Donwload Short Text Without Price',
  },
  {
    text: 'Download Long Text',
  },
  {
    text: 'Download Long Text without Price',
  }
]

const DropdownItem = ({
  text
}: DropdownItemProps) => (
  <li>
    <Link
      className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent"
      to={SCREENS.PROFILE}
    >
      <span>{text}</span>
    </Link>
  </li>
);

const ProjectDownloadAction = () => {
  const deviceWidth = window.innerWidth;
  const [width, setWidth] = useState(deviceWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [deviceWidth])
  return (
    <div className={`w-64 fixed ${width < 570 ? 'bottom-20 left-14': 'md:top-72 md:right-20'}`}>
      <div className="card bg-blue-800 p-4 sm:p-5">
        <ul className="space-y-1.5 font-inter font-medium">
          {links.map((l) => (
            <DropdownItem
              text={l.text}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectDownloadAction;