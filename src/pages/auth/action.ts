import {CLIENT_BASE_URL} from "../../navigation/constants";
import { User } from "../../types";

export type LoginParam = {
  email: string;
  password: string;
};

export type SignupParam = {
  role?: string;
  type: string
} & LoginParam;

type AppError = {
  message: string;
  errorMessage: string;
}

export const login = async (payload: LoginParam): Promise<[AppError | null, User|null]> => {
  const res = await fetch(`${CLIENT_BASE_URL}/login`, {
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

export const createAccount = async (payload: SignupParam): Promise<[AppError | null, User|null]> => {
  console.log(payload.email)
  const res = await fetch(`${CLIENT_BASE_URL}/register`, {
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