import { API_BASE_URL } from "../../../navigation/constants"
import { UserDocument } from "../../../types";

export const getContractors = async () => {
  const res = await fetch(`${API_BASE_URL}/contractors`);
  const payload = await res.json();
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}

export const updateDocument = async ({
  name,
  status
}: Pick<UserDocument, 'name'|'status'>, _id: string) => {
  const res = await fetch(`${API_BASE_URL}/update/document/`, {
    method: 'PATCH',
    body: JSON.stringify({
      _id,
      name,
      status
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const payload = await res.json();
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}