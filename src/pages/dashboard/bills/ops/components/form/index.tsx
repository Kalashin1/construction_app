import GreaterThanIcon from "../../svg/greater-than";

const Input = () => {
  return (
    <div className="flex flex-row my-2">
      <div className="p-2 bg-gray-600">
        <GreaterThanIcon 
          width={10}
          color="#000"
        />
      </div>
      <input className="form-input peer w-full border border-slate-300 bg-transparent px-3 py pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" type="text" />
    </div>
  )
}

const Form = () => {
  return (
    <div className="bg-white shadow-md rounded-md px-6 py-2 dark:border-navy-700 dark:bg-navy-800">
      outstanding balance
      <div className="flex flex-row my-2 space-x-2">
        <Input />
        <Input />
      </div>
      Date
      <div className="flex flex-row my-2 space-x-2">
        <Input />
        <Input />
      </div>
    </div>
  )
}

export default Form;