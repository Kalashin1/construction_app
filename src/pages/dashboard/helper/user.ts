import { API_BASE_URL } from "../../../navigation/constants"

export const getUserFromToken = async (token: string, abortController: AbortController) => {
  const res = await fetch(`${API_BASE_URL}/user/${token}`, {
    signal: abortController.signal
  });

  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else {
    return [await res.json(), null]
  }
}