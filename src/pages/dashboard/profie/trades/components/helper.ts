import { API_BASE_URL } from "../../../../../navigation/constants"
import { PositionInterface } from "../../../../../types";

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

export const uploadPostionFile = async (user_id: string, file: File): Promise<[null|Error, PositionInterface[]|null]> => {
  const fd = new FormData();
  fd.append('position', file);
  const res = await fetch(`${API_BASE_URL}/position/upload/${user_id}`, {
    method: 'POST',
    body: fd,
  });

  const payload = await res.json();
  if (res.ok) {
    return [null, payload];
  } else {
    return [payload, null];
  }
}

export const getPositions = async (trade_id: string) => {
  const res = await fetch(`${API_BASE_URL}/position/trade/${trade_id}`);
  const paylaod = await res.json();

  if (res.ok) {
    return [null, paylaod];
  } else {
    return [paylaod, null];
  }
}

export const deletePositons = async (params: {trade_id: string, contractor_id: string}) => {
  const res = await fetch(`${API_BASE_URL}/position`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  const paylaod = await res.json();

  if (res.ok) {
    return [null, paylaod];
  } else {
    return [paylaod, null];
  }
}