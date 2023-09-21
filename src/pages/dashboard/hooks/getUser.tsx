import { getUserFromToken } from "../helper/user";
import { User } from "../../../types";

export const useGetUserFromToken = (token: string) => {
  const getUser = async (abCnt?: AbortController): Promise<[Error | null, User | null]> => {
    const [err, _user] = await getUserFromToken(token, abCnt);
    return [err, _user]
  }

  return {
    getUser,
  }
}