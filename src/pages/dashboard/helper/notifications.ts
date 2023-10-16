import { API_BASE_URL } from "../../../navigation/constants"

export const getUserNotification = async (user_id: string) => {
  const res = await fetch(`${API_BASE_URL}/notification/user/${user_id}`);
  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}

export const markAllNotificationAsRead = async (user_id: string) => {
  const res = await fetch(`${API_BASE_URL}/notification/user/${user_id}`, {
    method: 'PATCH'
  });

  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}