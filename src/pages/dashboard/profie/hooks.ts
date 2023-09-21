import { updateUserProfile } from "../helper/user";
import { User } from "../../../types";

export const useUpateProfile = () => {

  const makeUpdate = ({
    first_name,
    last_name,
    phone,
    username,
    _id,
  }: Partial<User>) => updateUserProfile({
    first_name,
    last_name,
    phone,
    username,
    _id,
  });
  return {
    makeUpdate,
  }
};
