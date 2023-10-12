import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../../../../../types";
import { getUserById } from "../../../../../helper/user";

const Profile = () => {
  const {id} = useParams();
  const [user, setUser] = useState<User|null>(null)

  useEffect(() => {
    const getUserDetails = async (id: string) => {
      const [error, _user] = await getUserById(id)
      if(error) {
        alert('error getting user account');
        console.log(error);
      }

      if (_user) {
        console.log(_user);
        setUser(_user)
      }
    }

    getUserDetails(id!)
  }, [id])
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
              value={user?.last_name}
              disabled={true}
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
              disabled
              value={`${user?.first_name}`}
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
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark2k:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Enter email address"
              type="text"
              disabled
              value={user?.email}
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
              disabled
              value={user?.phone}
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fa fa-phone"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Street Number</span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Street Number"
              type="text"
              disabled
              value={user?.address?.street}
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fas fa-location"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Zip</span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Province"
              type="text"
              disabled
              value={user?.address?.zip}
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fas fa-location"></i>
            </span>
          </span>
        </label>
        <label className="block">
          <span>Province</span>
          <span className="relative mt-1.5 flex">
            <input
              className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Province"
              type="text"
              disabled
              value={user?.address?.province}
            />
            <span
              className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
            >
              <i className="fas fa-location"></i>
            </span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Profile;