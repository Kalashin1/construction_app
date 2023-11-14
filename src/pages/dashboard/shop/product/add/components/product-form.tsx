import { Button } from "../../../../components/current-projects"

const AddProductForm = () => {
  return (
    <div className="bg-white dark:bg-navy-800 rounded-sm shadow-sm">
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
              <select
                className="form-select mt-1.5 w-full rounded-full border border-slate-300 bg-white px-4 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
              >
                  <option>Option</option>
              </select>
            </label>
          </div>

          <div className="w-2/5 mx-4">
            <label className="block">
              <span>Select SubCategory</span>
              <select
                className="form-select mt-1.5 w-full rounded-full border border-slate-300 bg-white px-4 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                
              >
               <option value="">Select</option>
              </select>
            </label>
          </div>

          <div className="w-1/5">
            <label className="block">
              <span>Product Name</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
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
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                type="text"
              />
            </label>

          </div>
          <div className="w-1/5">
            <label className="block">
              <span>External_Id</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
                type="text"
                disabled
              />
            </label>

          </div>
         
          <div className="w-1/5">
            <label className="block">
              <span>Select Images</span>
              <input
                className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
                type="text"
                defaultValue={''}
              />
            </label>

          </div>
        
        </div>
        <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
          
          <div className="w-8/12">
            <label className="block">
              <span>Description</span>
              <textarea
                rows={4}
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
          action={() => {}}
        />
        <Button
          label="Add Product"
          color="bg-green-500 dark:bg-green-500"
          action={() => {}}
        />
      </div>

    </div >
  )
}

export default AddProductForm;