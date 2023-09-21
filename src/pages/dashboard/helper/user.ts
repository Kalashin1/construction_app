import { API_BASE_URL } from "../../../navigation/constants";
import { User } from "../../../types";

export const getUserFromToken = async (
  token: string,
  abortController?: AbortController
): Promise<[Error | null, User | null]> => {
  const res = await fetch(`${API_BASE_URL}/user/${token}`, {
    signal: abortController?.signal,
  });

  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else {
    return [await res.json(), null];
  }
};

export const updateUserProfile = async (
  { _id, avatar, phone, username, first_name, last_name }: Partial<User>,
  abortController?: AbortController
): Promise<[Error | null, User | null]> => {
  console.log(username, first_name, last_name,phone)
  const res = await fetch(`${API_BASE_URL}/user/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      avatar,
      username,
      phone,
      first_name,
      last_name,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    signal: abortController?.signal,
  });

  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else {
    return [await res.json(), null];
  }
};
