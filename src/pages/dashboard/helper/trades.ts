import { API_BASE_URL } from "../../../navigation/constants"

export const getAllTrades = async () => {
  const res = await fetch(`${API_BASE_URL}/trade`)

  if (res.ok) {
    const payload = await res.json()
    return [null, payload]
  } else {
    const error = await res.json()
    return [error, null]
  }
}