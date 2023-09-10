import {Chat} from "../../../svg";

const FloatingActionButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <div 
    className="rounded-full z-50 bg-green-600 flex justify-center items-center fixed bottom-2 right-4 w-14 h-14 self-end shadow-md cursor-pointer"
    onClick={action}
  >
    <div>
      <Chat width={30} color="#fff" />
    </div>
  </div>
);

export default FloatingActionButton;