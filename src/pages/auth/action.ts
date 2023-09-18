import {API_BASE_URL} from "../../navigation/constants";

export type LoginParam = {
  email: string;
  password: string;
};

export type SignupParam = {
  role?: string;
  type: string
} & LoginParam;

export const login = async (payload: LoginParam) => {
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else{
    return [await res.json(), null];
  }
}

export const createAccount = async (payload: SignupParam) => {
  console.log(payload.email)
  const res = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  }) 

  
  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else{
    return [await res.json(), null];
  }
}