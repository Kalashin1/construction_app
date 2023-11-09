import { API_BASE_URL } from "../../../../../navigation/constants"
import { PositionInterface, TradeInterface } from "../../../../../types";

export const getAllTrades = async (): Promise<[object|null, TradeInterface[]|null]> => {
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
  'painting':{
    icon: 'fas fa-edit',
    classNames: 'text-red-500 border-red-500'
  },
  'plumbing': {
    icon: 'fas fa-sink',
    classNames: 'text-blue-500 border-blue-500'
  },
  'Electricity': {
    icon: 'fas fa-bolt-lightning',
    classNames: 'text-green-500 border-green-500'
  },
  'bricklaying': {
    icon: ' fas fa-brick',
    classNames: 'text-gray-800 border-gray-800'
  },
  'carpentary': {
    icon: 'fas fa-cog',
    classNames: 'text-yellow-500 border-yellow-500'
  },
  'cleaning': {
    icon: 'fas fa-broom',
    classNames: 'text-brown-800 border-brown-800'
  },
  'flooring': {
    icon: 'fas fa-floor',
    classNames: 'text-teal-500 border-teal-500'
  },
  'abestos': {
    icon: 'fas fa-roof',
    classNames: 'text-orange-300 border-orange-300'
  },
  'other': {
    icon: 'fas fa-list',
    classNames: 'text-pink-800 border-pink-800'
  },
  'tiles': {
    icon: 'fas fa-tiles',
    classNames: 'text-purple-500 border-purple-500'
  }
}

export const uploadPostionFile = async (user_id: string, files: File[]): Promise<[null|Error, [PositionInterface[]]|null]> => {
  const fd = new FormData();
  files.forEach((file) => {
    fd.append('position', file);
  })
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