import { API_BASE_URL } from "../../../../../navigation/constants"

export const getAllTrades = async () => {
  const res = await fetch(`${API_BASE_URL}/trade`);

  if(res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json()
    return [error, null]
  }
};

export const assignUserTrade = async (
  user_id: string,
  trade_id: string,
) => {
  const res = await fetch(`${API_BASE_URL}/add-trade/${user_id}/${trade_id}`, {
    method: 'PATCH'
  });

  if (res.ok) {
    const paylaod = await res.json();
    return [null, paylaod];
  } else {
    const error = await res.json();
    return [error, null];
  }
}

export const removeUserTrade = async ( user_id: string,
  trade_id: string,
) => {
  const res = await fetch(`${API_BASE_URL}/remove-trades/${user_id}/${trade_id}`, {
    method: 'DELETE'
  });

  if (res.ok) {
    const paylaod = await res.json();
    return [null, paylaod];
  } else {
    const error = await res.json();
    return [error, null];
  }
}


export const TradeIcons = {
  'painting': 'fas fa-edit',
  'plumbing': 'fas fa-sink',
  'electricity': ' fa-bolt-lightning'
}