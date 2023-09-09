import {ProjectDetailCard} from "./main-order-item";

const ExtraOrders = () => {
  return (
    <div className="bg-white rounded-lg shadow-md my-8 py-6">
      <div className="p-6 m">
        <h3>
          <span>Addendum</span>(main order items) - <span>ARMEN AVOIAN</span>
        </h3>
        <h3>
          <span>Created At :</span>
          <span>June 28, 2023</span>
        </h3>
        <h3>
          <span>Comment: </span>
          <span>See chat history</span>
        </h3>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="">
        <ProjectDetailCard 
          
        />
      </div>
    </div>
  );
};

export default ExtraOrders;