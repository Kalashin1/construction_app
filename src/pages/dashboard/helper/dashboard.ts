import { API_BASE_URL } from "../../../navigation/constants";
import { ProjectPositions, Todo } from "../../../types";

export const getUserTasks = async (user_id: string, status?: number): Promise<[unknown, Todo[]|null]> => {
  try {
    const res = status
      ? await fetch(`${API_BASE_URL}/todo/user/${user_id}/${status}`)
      : await fetch(`${API_BASE_URL}/todo/user/${user_id}`);
    if (res.ok) {
      const data = await res.json();
      return [null, data];
    } else {
      const error = await res.json();
      return [error, null];
    }
  } catch (error) {
    return [error, null];
  }
};

export const getAssignedTasks = async (user_id: string, status?: number): Promise<[unknown, Todo[]|null]> => {
  try {
    const res = status
      ? await fetch(`${API_BASE_URL}/todo/assigned/${user_id}/${status}`)
      : await fetch(`${API_BASE_URL}/todo/assigned/${user_id}`);
    if (res.ok) {
      const data = await res.json();
      return [null, data];
    } else {
      const error = await res.json();
      return [error, null];
    }
  } catch (error) {
    return [error, null];
  }
};

export const getTodoById = async (todo_id: string): Promise<[unknown, Todo|null]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/todo/id/${todo_id}`);
    if (res.ok) {
      const data = await res.json();
      return [null, data];
    } else {
      const error = await res.json();
      return [error, null];
    }
  } catch (error) {
    return [error, null];
  }
};

export const editTodo = async (todo: Todo): Promise<[unknown, object|null]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/todo/id/${todo._id}`, {
      method: 'PATCH',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.ok) {
      const data = await res.json();
      return [null, data];
    } else {
      const error = await res.json();
      return [error, null];
    }
  } catch (error) {
    return [error, null];
  }
};

export function getDayDifference(dateString: string) {
  const inputDate = new Date(dateString);

  const currentDate = new Date();

  const differenceInMilliseconds = currentDate.getTime() - inputDate.getTime();

  const differenceInDays = Math.round(
    differenceInMilliseconds / (1000 * 3600 * 24)
  );

  return differenceInDays;
}

export function addDays(dateString: string, daysToAdd: number) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Add the specified number of days to the date
  const updatedDate = new Date(
    inputDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
  );

  // Return the updated date as a string in YYYY-MM-DD format
  return updatedDate.toDateString();
}

export async function getUserProjectStats(
  user_id: string
): Promise<
  [unknown | null, { title: string; positions: ProjectPositions[] }[] | null]
> {
  console.log("user_id", user_id)
  try {
    const res = await fetch(`${API_BASE_URL}/projects/stat/${user_id}`);
    if (res.ok) {
      const data = await res.json();
      return [null, data];
    } else {
      const error = await res.json();
      return [error, null];
    }
  } catch (error) {
    return [error, null];
  }
}
