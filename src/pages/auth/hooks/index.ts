import { useState } from "react";
import { login, createAccount, SignupParam } from "../action";
import { User } from "../../../types";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [emailError, updateEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, updatePasswordError] = useState(false);

  const [errorMessage, updateErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const funcWrapper = async () => {
    updateEmailError(false);
    updatePasswordError(false);
    setIsLoading(true);
    updateErrorMessage("");
    const [err, _user] = await login({ email, password });
    setIsLoading(false);
    if (err) {
      alert("oops something happened");
      console.log(err);
      if (err.errorMessage.includes("incorrect password")) {
        updatePasswordError(true);
        updateErrorMessage(err.errorMessage);
        return;
      } else if (err.errorMessage.includes("no user with that email")) {
        updateEmailError(true);
        updateErrorMessage(err.errorMessage);
      }
    } else if (_user) {
      setUser(_user);
      return _user
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    errorMessage,
    isLoading,
    user,
    funcWrapper,
  };
};

export const useCreateUserAccount = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [token, setToken] = useState('');
  const [tokenError, updateTokenError] = useState(false)

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [iAccept, setIAccept] = useState(true)

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<User| null>(null);

  const createUserAccount = async (param: SignupParam) => {
    setIsLoading(true);
    setEmailError(false);
    setPasswordError(false);
    setError('')

    if(password !== passwordConfirm) {
      setIsLoading(false)
      setPasswordError(true)
      setError('passwords do not match!')
      return;
    }

    if (!iAccept) {
      setIsLoading(false);
      setError('Please accept the terms and conditions')
      return;
    }

    const [err, _user] = await createAccount(param);
    
    setIsLoading(false);
    
    if (err) {
      alert('oops something happened, please try again');
      console.log(err.message)
      if (err.message == `${param.type.toLocaleLowerCase()} already exits`) {
        setEmailError(true)
        setError(err.message);
        return;
      }
    } else if (_user) {
      setUser(_user);
      setEmail('')
      setPassword('');
      return _user
    }
  }

  return {
    email,
    setEmail,
    setEmailError,
    password,
    setPassword,
    emailError,
    passwordError,
    passwordConfirm,
    setPasswordConfirm,
    setIAccept,
    error,
    isLoading,
    setIsLoading,
    iAccept,
    user,
    createUserAccount,
    setPasswordError,
    token,
    updateTokenError,
    tokenError,
    setToken,
    setError,
  }
}
