import { Dispatch, SetStateAction } from "react";
import { User } from "../../../../../../types"

const ExecutorList = ({ userLists, selectedUser, updateSelectedUser }: {
  userLists: User[];
  selectedUser: User | null;
  updateSelectedUser: Dispatch<SetStateAction<User | null>>
}) => {
  return (
    <div className="my-4">
      {userLists && userLists.map((user, index) => (
        <div className={`flex items-center justify-start cursor-pointer rounded-xl dark:border-b-navy-500 ${selectedUser === user ? 'border-gray-900 border-2' : 'bg-gray-50'}`} key={index} onClick={() => updateSelectedUser(user)}>
          <div className="whitespace-nowrap px-4 py-3 sm:px-5">
            <div className="avatar flex h-10 w-10">
              <img className="mask is-squircle" src={user.avatar ?? "images/100x100.png"} alt="avatar" />
            </div>
          </div>
          <div className="whitespace-nowrap px-3 py-3 font-medium text-slate-700 dark:text-navy-100 lg:px-5">
            {user?.first_name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExecutorList;