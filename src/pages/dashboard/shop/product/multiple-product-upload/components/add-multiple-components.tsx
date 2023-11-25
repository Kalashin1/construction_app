import { getFile } from "../../../../helper/uploads";
import { uploadMultipleProducts } from "../../../helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";

const AddMultipleComponent = ({
  shop_id
}: {
  shop_id: string
}) => {


  const uploadProducts = async () => {
    const [fileError, file] = await getFile(
      {
        'application/*': ['.xlsx', '.xls']
      },
      'project',
      false
    )
    if (fileError) {
      {
        notify(
          (<NotificationComponent message="Error fetching file" />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(fileError);
      }
    }

    if (file) {

      const [error, payload] = await uploadMultipleProducts(shop_id, file);
      if (error) {
        notify(
          (<NotificationComponent message="Error uploading project" />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(error);
      }

      if (payload) {
        notify(
          (<NotificationComponent message="Products created successfully" />),
          { className: 'bg-green-500 text-white' }
        )
      }
    }
  }

  return (
    <div className="w-full flex justify-center items-center pt-10">

      <button
        className="btn space-x-2 w-full text-left bg-warning font-medium text-white shadow-lg shadow-warning/50 hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90 flex items-start justify-between"
        onClick={uploadProducts}
      >
        <span>Select File</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddMultipleComponent;