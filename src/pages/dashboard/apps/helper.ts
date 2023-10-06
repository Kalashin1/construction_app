import { API_BASE_URL } from "../../../navigation/constants"
import { UserRoleType } from "../../../types";

export const getUsersDirectories = async (role: UserRoleType) => {
  const res = await fetch(`${API_BASE_URL}/users/folders/${role}`);
  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json();
    return [error, null];
  }
}

export const getFiles = async (prefix: string) => {
  const res = await fetch(`${API_BASE_URL}/files/`, {
    method: 'PATCH',
    body: JSON.stringify({prefix})
  });

  if (res.ok) {
    const data = await res.json();
    return [null, data];
  } else {
    const error = await res.json();
    return [error, null];
  }
}