import { API_BASE_URL } from "../../../navigation/constants"

export const getContractors = async () => {
  const res = await fetch(`${API_BASE_URL}/contractors`);
  const payload = await res.json();
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}