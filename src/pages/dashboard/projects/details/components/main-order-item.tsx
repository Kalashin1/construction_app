import { ChevronRightIcon } from "../svgs";

const MainOrderItem = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded p-6">
        <div>
          <ChevronRightIcon color="#000" width={40} />
          <h3>Main order items</h3>
        </div>
      </div>
    </div>
  );
};

export default MainOrderItem;