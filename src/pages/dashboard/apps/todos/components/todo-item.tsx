import { FC, useContext } from "react";
import { TASK_STATUS, Todo } from "../../../../../types";
import { SidebarContext } from "../../../../../App";
import { notify, NotificationComponent } from "../../../components/notification/toast";
import { editTodo, getDayDifference } from "../../../helper/dashboard";

const TodoItem: FC<Todo> = (todo) => {
  const { updateShowLeftSidebar, showLeftSidebar } = useContext(SidebarContext)

  const showTodoDetails = () => {
    localStorage.setItem('todo_id', todo._id);
    updateShowLeftSidebar!(!showLeftSidebar);
  }

  const editTodoStatus = async () => {
    const [error, payload] = await editTodo({
      ...todo,
      status: TASK_STATUS[2]
    })
    if (error) {
      notify(
        (<NotificationComponent message="Error fetching tood" />),
        { className: 'bg-red-500 text-white' }
      )
      console.log(error)
    }

    if (payload) {
      location.reload();
    }
  }
  return (
    <div
      className="border-b border-slate-150 py-3 dark:border-navy-500"
      onClick={showTodoDetails}
      data-toggle="drawer"
      data-target="#edit-todo-drawer"
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <label className="flex">
          <input type="checkbox" className="todo-checkbox form-checkbox is-outline h-5 w-5 rounded-full border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent" checked={todo.status === TASK_STATUS[2]} onChange={(e) => {
            e.stopPropagation()
            if (e.target.checked) {
              editTodoStatus()
            }
          }} />
        </label>
        <h2 className="line-clamp-1 cursor-pointer text-slate-600 dark:text-navy-100">
          {todo.type}
        </h2>
      </div>
      <div className="mt-1 flex items-end justify-between">
        <div className="flex flex-wrap items-center font-inter text-xs">
          <p>{getDayDifference(todo.createdAt!) > 1 ? `${getDayDifference(todo.createdAt!)} days ago` : 'Today'}</p>
          <div className="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span>{new Date(todo.createdAt!).getHours()}:{new Date(todo.createdAt!).getMinutes()}</span>
          </span>
          <div className="m-1.5 w-px self-stretch bg-slate-200 dark:bg-navy-500"></div>
          <div
            className={`badge space-x-2.5 px-1 ${todo.status !== TASK_STATUS[2] ? 'text-yellow-500' : 'text-success'}`}
          >
            <div className="h-2 w-2 rounded-full bg-current"></div>
            <span>{todo.status}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button className="btn h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <i className="fas fa-star" />
          </button>

          <div className="avatar h-6 w-6">
            <img className="rounded-full" src="/images/100x100.png" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default TodoItem;