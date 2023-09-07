import {Chat} from "../../../svg";

const FloatingActionButton = () => (
  <div className="rounded-full bg-gray-300 flex justify-center items-center fixed bottom-2 right-10 w-14 h-14 self-end shadow-md">
    <div>
      <Chat width={30} color="red" />
    </div>
  </div>
);

export default FloatingActionButton;