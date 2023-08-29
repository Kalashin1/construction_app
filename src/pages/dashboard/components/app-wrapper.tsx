import MenuIcon from "../svg/menu";
const AppWrapper = () => {
  return (
    <nav className="header print:hidden">
      {/* <!-- App Header  --> */}
      <div
        className="header-container relative items-center flex w-full bg-white dark:bg-navy-700 print:hidden"
      >
        {/* <!-- Header Items --> */}
        <button className="focus:border-2 p-2 rounded-md">
          <MenuIcon />
        </button>
        
      </div>
    </nav>
  )
}

export default AppWrapper;