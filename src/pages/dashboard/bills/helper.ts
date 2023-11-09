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

export const getReciepientDraft = async (
  user_id: string
): Promise<[object | null, Draft[] | null]> => {
  const res = await fetch(`${API_BASE_URL}/draft/user/${user_id}`, {
    method: "PATCH",
  });

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

export const updateDraftStatus = async (
  draft_id: string,
  status: number
): Promise<[object | null, Draft | null]> => {
  const res = await fetch(`${API_BASE_URL}/draft/update/${draft_id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
};
