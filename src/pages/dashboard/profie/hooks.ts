import { updateUserProfile } from "../helper/user";
import { User } from "../../../types";

export const useUpateProfile = () => {

  const makeUpdate = ({
    first_name,
    last_name,
    phone,
    username,
    _id,
    address,
    socialSecurityNumber,
    taxIdNumber
  }: Partial<User>) => updateUserProfile({
    first_name,
    last_name,
    phone,
    username,
    _id,
    address,
    socialSecurityNumber,
    taxIdNumber
  });
  return {
    makeUpdate,
  }
};
