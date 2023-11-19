/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useState } from "react";
import { Product } from "../../../../../../types";
import DownloadIcon from "../../../../bills/ops/svg/donwload";
import { Button } from "../../../../components/current-projects";
import Pagination from "../../../../components/pagination";
import { SelectBox, TableSearch } from "../../../../components/project-summary";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatter } from "../../../../helper/tools";
import { deleteStoreProduct, getStoreProdutcs } from "../../../helper";
import { NotificationComponent, notify } from "../../../../components/notification/toast";

const ProductsTable = ({
  products
}: {
  products: Product[]
}) => {
  const dataTitles = ['Name', 'Category', 'Sub Category', 'Price', 'External ID', ''];
  const removeProduct = async (id: string) => {
    if (confirm(`Delete product with id ${id}`)) {
      const [error, payload] = await deleteStoreProduct(id);
      if (error) {
        notify(
          (<NotificationComponent message="Error geting products" />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(error)
      }

      if (payload) {
        notify(
          (<NotificationComponent message="Product deleted successfully!" />),
          { className: 'bg-green-400 text-white' }
        );
        location.reload()
      }
    }
  }
  return (
    <div className="min-w-full overflow-x-auto my-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500">
            {dataTitles.map((dt, i) => (
              <th
                className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                key={i}
              >
                {dt}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products && products.map((product, index) => (
            <tr className="border border-transparent border-b-slate-200 dark:border-b-navy-500" key={index}>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="underline text-blue-500" to={``}>
                  {product?.name}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {product?.category?.name}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="underline text-blue-500" to={``}>
                  {product?.subCategory?.external_id}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <Link className="underline text-blue-500" to={``}>
                  {formatter.format(Number(product?.price))}
                </Link>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {product?.external_id}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <button
                  className="btn h-9 w-9 rounded-full bg-green-300 p-0 font-medium text-white hover:bg-green-600 focus:bg-info/20 active:bg-info/25 mr-2">
                  <i className="fas fa-edit" />
                </button>
                <button
                  className="btn h-9 w-9 rounded-full bg-red-300 p-0 font-medium text-white hover:bg-red-600 
                  focus:bg-danger/20 active:bg-info/25"
                  onClick={() => removeProduct(product?._id!)}
                >
                  <i className="fas fa-times" />
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const ProductsOverview = () => {
  const [numRows, setNumRows] = useState(0)
  const { shop_id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const setUp = async () => {
      const [error, payload] = await getStoreProdutcs(shop_id!);
      if (error) {
        notify(
          (<NotificationComponent message="Error geting products" />),
          { className: 'bg-red-500 text-white' }
        );
        console.log(error)
      }

      if (payload) {
        setProducts(payload)
        console.log(payload)
      }
    }

    setUp();
  }, [shop_id]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-12 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="my-4 mb-12 flex flex-col md:flex-row justify-between md:items-center">
        <div className=" flex flex-row items-center my-2 md:my-0">
          <DownloadIcon width={20} color="gray" />
          <h3 className="ml-4 text-md font-bold">Open items (receipt)</h3>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-2">
          <Button
            label="Create Product"
            action={() => {navigate(`/add-product/${shop_id}`)}}
            color="bg-blue-900"
            textColor="text-white"
          />
          <Button
            label="Excel"
            action={() => { }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="sm:w-1/6 w-1/4 hidden md:block">
          <SelectBox
            values={[5, 10, 20, 50]}
            value={numRows}
            handleChange={setNumRows}
          />
        </div>
        <div className="ml-4 w-4/5">
          <TableSearch />
        </div>


      </div>
      <div>
        <ProductsTable products={products} />
        <Pagination />
      </div>
    </div>
  )
}

export default ProductsOverview;