const Header = () => {
  return (
    <div className="mt-12 text-center">
      <div className="avatar h-16 w-16">
        <div className="is-initial rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white">
          <i className="fa-solid fa-shapes text-2xl"></i>
        </div>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-slate-600 dark:text-navy-100">
        MAGGA Applications
      </h3>
      <p className="mt-0.5 text-base">
        List of prebuilt applications of MAGGA
      </p>
    </div>
  )
}

export default Header;
