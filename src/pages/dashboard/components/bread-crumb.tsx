import { ForwardIcon } from "../svg";
import { Link } from 'react-router-dom';

type Level = {
  link: string;
  text: string;
};

type Props = {
  pageName: string;
  firstLevel: Level;
  secondLevel: Level;
  thirdLevel?: Level;
}

const Crumb = ({
  text,
  link
}: {
  link?: string;
  text: string;
}) => {
  return (
    <li className="flex items-center space-x-2">
      {link ? (
        <>
          <Link
            className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            to={link}
          >
            {text}
          </Link>
          <ForwardIcon />
        </>
      ) : (
        <li>{text}</li>
      )}
    </li>
  );
};


const BreadCrumb = ({
  pageName,
  firstLevel,
  secondLevel,
  thirdLevel
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-4">
        <h3>{pageName}</h3>
      </div>
      <ul className="flex flex-wrap items-center space-x-2">
        <Crumb
          text={firstLevel.text}
          link={firstLevel.link}
        />
        <Crumb
          text={secondLevel.text}
          link={thirdLevel ? secondLevel.link : undefined}
        />
        {thirdLevel && (<Crumb text={thirdLevel.text} />)}
      </ul>
    </div>
  );
};

export default BreadCrumb;