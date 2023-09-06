import { CardProps } from "../../../components/home-cards";
import EuroIcon from "../../svg/euro";
import Form from "../form";

const Card = ({
  svg,
  figure,
  text,
  color
}: CardProps) => {
  return (
    <div className={`rounded-lg ${color} p-4 dark:bg-navy-700`}>
      <div className="flex justify-between space-x-1">
        <p
          className="text-xl text-white font-bold dark:text-navy-100"
        >
          {figure}
        </p>
        {svg}
      </div>
      <p className="mt-1 text-xs+ text-white">{text}</p>
    </div>
  )
}


const HomeCards = () => {
  return (
    <div className="my-4 flex flex-col lg:flex-row w-full">
      <div className="lg:w-1/2 lg:mr-2 lg:h-44">
        <Card
          color="bg-gray-900"
          figure="&euro;304,902.55"
          text="open"
          svg={<EuroIcon width={80} color="gray" />}
        ></Card>
      </div>
      <div className="my-4 lg:my-0 lg:w-1/2 lg:ml-2">
        <Form />
      </div>
    </div>
  );
};

export default HomeCards;