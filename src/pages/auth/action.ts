import {API_BASE_URL} from "../../navigation/constants";
import { User } from "../../types";

export type LoginParam = {
  email: string;
  password: string;
};

export type SignupParam = {
  role?: string;
  type: string;
  first_name?: string;
  last_name?: string;
  position: string;
} & LoginParam;

type AppError = {
  message: string;
  errorMessage: string;
}

export const login = async (payload: LoginParam): Promise<[AppError | null, User|null]> => {
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

export const createAccount = async (payload: SignupParam): Promise<[AppError | null, User|null]> => {
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

export const generateUserId = async(role: string, referrer: string) => {
  const res = await fetch(`${API_BASE_URL}/make-user`, {
    method: "POST",
    body: JSON.stringify({role, referrer }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(res.ok) {
    const user = await res.json();
    return user;
  }
}

export const forgotPassword = async ({email}: { email?: string, phone?: string } ) => {
  const res = await fetch(`${API_BASE_URL}/request-password-reset`, {
    method: 'POST',
    body: JSON.stringify({email}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (res.ok) {
    const code = await res.json();
    return [null, code] 
  } else {
    return [await res.json(), null]
  }
}

export const resetPassword = async ({ email, password, token }: Partial<User>) => {
  const res = await fetch(`${API_BASE_URL}/reset-password`, {
    method: 'POST',
    body: JSON.stringify({ email, password, token: parseFloat(token!)}),
    headers: {'Content-Type': 'application/json'}
  });

  if (res.ok) {
    const user = await res.json();
    return [null, user];
  } else {
    return [await res.json(), null];
  }
}