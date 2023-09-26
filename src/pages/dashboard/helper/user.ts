import { API_BASE_URL } from "../../../navigation/constants";
import { User, UserBankDetails } from "../../../types";

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

export const getUserById =async (id:string) => {
  const res = await fetch(`${API_BASE_URL}/user/id/${id}`);
  if (res.ok) {
    const paylaod = await res.json()
    return [null, paylaod];
  } else {
    const error = await res.json();
    return [error, null];
  }
}

export const updateUserProfile = async (
  {
    _id,
    avatar,
    phone,
    username,
    first_name,
    last_name,
    bankDetails,
    billingDetails,
    numberRanges,
    numberRangesLocal,
  }: Partial<User>,
  abortController?: AbortController
): Promise<[Error | null, User | null]> => {
  const res = await fetch(`${API_BASE_URL}/user/${_id}`, {
    method: "PATCH",
    body: JSON.stringify({
      avatar,
      username,
      phone,
      first_name,
      last_name,
      bankDetails,
      billingDetails,
      numberRanges,
      numberRangesLocal
    }),
    headers: {
      "Content-Type": "application/json",
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

export const completeRegistration = async (
  generatedId: string,
  param: Pick<User, "email" | "password">
) => {
  const res = await fetch(
    `${API_BASE_URL}/complete-registration/${generatedId}`,
    {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const payload = await res.json();
  if (res.ok) {
    return [null, payload];
  } else {
    return [payload, null];
  }
};

export const assingEmployee = async (owner_id:string, employee_id: string) => {
  const res = await fetch(`${API_BASE_URL}/assign_employee/${owner_id}/${employee_id}`, {
    method: 'PATCH'
  });
  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null]
  }
}

export const retrieveEmployees = async (owner_id: string) => {
  const res = await fetch(`${API_BASE_URL}/employee/${owner_id}`);
  const payload = await res.json();

  if (res.ok) return [null, payload];
  else return [payload, null];
};

export const assignStandIn = async (
  owner_id: string,
  employee: Pick<User, "email" | "role"> & { id: string }
) => {
  const res = await fetch(`${API_BASE_URL}/assign-stand-in/${owner_id}`, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const payload = await res.json();
    return [payload, null];
  }
};


export const updateUserBankDetails = async (
  owner_id: string,
  existingDetails: UserBankDetails, 
  newDetails: UserBankDetails
) => {
  const res = await fetch(`${API_BASE_URL}/update-bank/${owner_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      existingDetails,
      newDetails
    })
  });

  if (res.ok) {
    const payload = await res.json()
    return [null, payload];
  } else {
    const error = await res.json()
    return [error, null];
  }

}

export const deleteUserBankDetails = async (
  owner_id: string, 
  existingBankDetails: UserBankDetails
) => {
  console.log(existingBankDetails)
  const res = await fetch(`${API_BASE_URL}/delete-bank-details/${owner_id}`, {
    method: 'DELETE',
    body: JSON.stringify({existingBankDetails}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (res.ok) {
    const paylaod = await res.json();
    return [null, paylaod]
  } else { 
    const error = await res.json()
    return [error, null]
  }
}

export const deleteEmployeeStandIn = async (owner_id: string, employee_id: string) => {
  const res = await fetch(`${API_BASE_URL}/stand-in`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      owner_id,
      employee_id
    })
  });
  if(res.ok) {
    const payload = await res.json();
    return [null, payload];
  } else {
    const error = await res.json();
    return [error, null];
  }
}