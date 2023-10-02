import { getUserFromToken } from "../helper/user";
import { User } from "../../../types";

export const useGetUserFromToken = (token: string) => {
  const getUser = async (abCnt?: AbortController, _token?: string): Promise<[Error | null, User | null]> => {
    const [err, _user] = await getUserFromToken(_token ?? token, abCnt);
    return [err, _user]
  }

  return {
    getUser,
  }
}