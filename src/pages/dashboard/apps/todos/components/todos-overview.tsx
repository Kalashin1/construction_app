import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { notify, NotificationComponent } from "../../../components/notification/toast";
import { getUserTasks, getAssignedTasks } from "../../../helper/dashboard";
import { Todo } from "../../../../../types";
import { UserAuthContext } from "../../../../../App";
import TodoItem from "./todo-item";


const TodosOverview = () => {
  const {user_id} = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);
  const {user} = useContext(UserAuthContext)
  useEffect(() => {
    const setUp = async () => {
      let error, payload;
      if (user?.role === 'contractor') {
        [error, payload] = await getUserTasks(user_id as string, -1);
      } else if (user?.role === 'executor') {
        [error, payload] = await getAssignedTasks(user_id as string, -1);
      }
      if (error) {
        notify(
          (<NotificationComponent message='Error fetching tasks' />),
          { className: 'bg-red-500 text-white' }
        )
        console.log(error);
      }

      if (payload) {
        console.log(payload)
        setTodos(payload);
      }
    }

    setUp()
  }, [user?.role, user_id])
  return (
    <div className="card px-4 pb-4 pt-2">
      <div id="todo-list">
        {todos.map((todo, i) => (
          <TodoItem 
            key={i}
            {...todo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosOverview;