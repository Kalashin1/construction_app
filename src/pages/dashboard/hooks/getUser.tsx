import { useEffect, useState } from "react";
import { getUserFromToken } from "../helper/user";

export const useGetUserFromToken = (token: string) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortController = new AbortController()
    const setUp = async () => {
      const [err, _user] = await getUserFromToken(token, abortController)
      if (err) setError(err);
      if (_user) setUser(_user); 
    }

    setUp()
    return () => abortController.abort();
  }, [token])

  return {
    user,
    error
  }
}