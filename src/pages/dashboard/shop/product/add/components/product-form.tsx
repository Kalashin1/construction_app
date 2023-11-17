/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useEffect, useRef, FormEvent } from "react";
import { PositionInterface, TradeInterface } from "../../../../../../types"
import { Button } from "../../../../components/current-projects"
import { notify, NotificationComponent } from "../../../../components/notification/toast";
import { getAllTrades, getPositions } from "../../../../profie/trades/components/helper";
import Select from 'react-select'
import { getFile } from "../../../../helper/uploads";
import { createProduct, updateProductImage } from "../../../helper";
import { useNavigate, useParams } from "react-router-dom";
import { SCREENS } from "../../../../../../navigation/constants";

const AddProductForm = () => {

  const [trades, setTrades] = useState<TradeInterface[]>([]);
  const [selectedTrade, updateSelectedTrade] = useState<TradeInterface>({} as TradeInterface);
  const [positions, updatePositions] = useState<PositionInterface[]>([])
  const [selectedPositions, updateSelectedPositions] = useState<PositionInterface>()
  const addProductForm = useRef<null | HTMLFormElement>(null)
  const [files, updateFiles] = useState<File[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const setUp = async () => {
      const [error, _trades] = await getAllTrades();
      if (error) {
        notify(
          (<NotificationComponent message={'oops something happened!'} />),
          {
            className: `bg-red-700 font-bold text-white`,
            closeOnClick: true,
          }
        )
        console.log(error)
      }

      if (_trades) {
        setTrades(_trades);
        console.log(_trades)
        const [positionErr, _positions] = await getPositions(_trades[0]._id);
        if (positionErr) {
          notify(
            (<NotificationComponent message={'oops something happened!'} />),
            {
              className: `bg-red-700 font-bold text-white`,
              closeOnClick: true,
            }
          )
          console.log(positionErr)
        }

        if (_positions) {
          updatePositions(_positions)
        }
      }
    }

    setUp();
  }, [])

  const { shop_id } = useParams();

  const addNewProduct = async (e: FormEvent, form: HTMLFormElement) => {
    e.preventDefault();
    const {
      product_name: { value: name },
      price: { value: price },
      external_id: { value: external_id },
      description: { value: description }
    } = form
    const [error, product] = await createProduct({
      category: selectedTrade._id,
      subCategory: selectedPositions?.external_id,
      name,
      price,
      description,
      external_id,
      shop: shop_id!,
    })
    if (error) {
      notify(
        (<NotificationComponent message="Error creating product" />),
        {  className: 'bg-red-500 text-white'}
      )
      console.log(error)
    }

    if (product) {
      console.table([shop_id, product._id])
     const [updateError, payload] = await updateProductImage(shop_id!, product._id!, files);
      if (updateError) {
        notify(
          (<NotificationComponent message="Error uploading images" />),
          {  className: 'bg-red-500 text-white'}
        )
        console.log(updateError)
      }

      if (payload) {
        notify(
          (<NotificationComponent message="Product created successfully" />),
          {  className: 'bg-green-500 text-white'}
        );
        navigate(SCREENS.SHOP)
      }
    }
  }

  const selectFiles = async () => {
    const [error, files] = await getFile(
      {
        'application/*': ['.png', '.jpg', '.jpeg', '.svg']
      },
      'product',
      true
    );
    if (error) {
      notify(
        (<NotificationComponent message="Error fetching files" />),
        {  className: 'bg-red-500 text-white'}
      )
    }
    if (files) {
      updateFiles(files)
    }
  }


  return (
    <form className="bg-white dark:bg-navy-800 rounded-sm shadow-sm" ref={addProductForm} onSubmit={e => addNewProduct(e, addProductForm.current!)}>
      <div className="px-6 py-4">
        <i className="fas fa-user mr-2" />
        <span>Add New Product </span>
        {/* Main Order Items - New Addendum */}
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div>
        <div className="px-6 py-4 flex flex-row justify-between items-center">
          <div className="w-2/5">
            <label className="block">
              <span>Select Category</span>
              <Select
                options={trades && trades.map((trade) => ({ label: trade.name, value: trade._id }))}
                // @ts-ignore
                onChange={updateSelectedTrade}
              />

            </label>
          </div>

          <div className="w-2/5 mx-4">
            <label className="block">
              <span>Select SubCategory</span>
              <Select
                options={positions && positions.map((pos) => ({ label: pos.shortText, value: pos.external_id }))}
                // @ts-ignore
                onChange={updateSelectedPositions}
              />
            </label>
          </div>

          <div className="w-1/5">
            <label className="block">
              <span>Product Name</span>
              <input
                name="product_name"
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                type="text"
              />
            </label>

          </div>
        </div>

        <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
          <div className="w-1/5">
            <label className="block">
              <span>Price</span>
              <input
                name="price"
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                type="text"
              />
            </label>

          </div>
          <div className="w-1/5">
            <label className="block">
              <span>External_Id</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                type="text"
                name="external_id"
              />
            </label>

          </div>

          <div className="w-1/5">
            <Button label="Add Images" color="bg-gray-50 bdark:bg-navy-900" action={selectFiles} />

          </div>

        </div>
        <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">

          <div className="w-8/12">
            <label className="block">
              <span>Description</span>
              <textarea
                rows={4}
                name="description"
                placeholder=" Enter Text"
                className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"

              ></textarea>
            </label>
          </div>
        </div>
      </div>

      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
        <Button
          label="Cancel"
          color="bg-red-500 dark:bg-red-500"
          action={() => { }}
        />
        <Button
          label="Add Product"
          type="submit"
          color="bg-green-500 dark:bg-green-500"
        />
      </div>

    </form>
  )
}

export default AddProductForm;