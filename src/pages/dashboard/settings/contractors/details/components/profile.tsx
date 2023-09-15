const Profile = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 dark:border-navy-700 dark:bg-navy-800">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span>Display name </span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Enter name"
              type="text"
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fa-regular fa-user text-base"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Full Name </span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Enter full name"
              type="text"
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fa-regular fa-user text-base"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Email Address </span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Enter email address"
              type="text"
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fa-regular fa-envelope text-base"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Phone Number</span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Enter phone number"
              type="text"
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fa fa-phone"></i>
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Profile;