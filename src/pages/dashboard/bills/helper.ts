import { API_BASE_URL } from "../../../navigation/constants";
import { Draft } from "../../../types";

export const getUserDrafts = async (
  user_id: string
): Promise<[object | null, Draft[] | null]> => {
  const res = await fetch(`${API_BASE_URL}/draft/user/${user_id}`);

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
};

export const getDraftById = async (
  draft_id: string
): Promise<[object | null, Draft | null]> => {
  const res = await fetch(`${API_BASE_URL}/draft/${draft_id}`);

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
};
