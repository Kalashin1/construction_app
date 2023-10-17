import { API_BASE_URL } from "../../../../../../navigation/constants"

export type CreateContractPayload = {
  contractor_id: string,
  executor_id: string,
  position_ids: string[],
  trade_id: string,
}

export type GetContractPayload = { 
  contractor: string;
  executor: string;
  status: string
}

export const createContract = async (params: CreateContractPayload) => {
  const res = await fetch(`${API_BASE_URL}/contract`, {
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  }
}

export const getContract = async (params: GetContractPayload) => {
  const res = await fetch(`${API_BASE_URL}/contract`, {
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH'
  });

  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  } 
}

export const getContractById = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/contract/id/${id}`);
  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  } 
}

export type acceptContractParams = {executor_id: string, contract_id: string}

export const acceptContract = async (params: acceptContractParams) => {
  const res = await fetch(`${API_BASE_URL}/contract/accept`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  } 
}

export const rejectContract = async (params: acceptContractParams) => {
  const res = await fetch(`${API_BASE_URL}/contract/reject`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  } 
}

export const terminateContract = async (params: {contract_id: string}) => {
  const res = await fetch(`${API_BASE_URL}/contract/terminate`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const payload = await res.json()
  if (res.ok) {
    return [null, payload]
  } else {
    return [payload, null]
  } 
}