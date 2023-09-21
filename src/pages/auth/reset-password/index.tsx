import { PasswordIcon, UserIcon} from "../svg";
import { 
  Link,
  useNavigate
} from "react-router-dom";
import { OAuthButton, Input, Button } from "../components";
import { GoogleIcon } from "../svg/"
import Layout from "../layout";
import { SCREENS } from "../../../navigation/constants";
import {useEffect, useState } from "react";
import { resetPassword} from "../action";
import { getUserFromToken } from "../../dashboard/helper/user";
import { User } from "../../../types";

const ResetPassword = () => {

  const navigate = useNavigate()

  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [user, updateUser] = useState<User|null>(null)
  const jwt = sessionStorage.getItem('userToken');

  
  useEffect(() => {
    const abtCnt = new AbortController()
    const setUp = async () => {
      const [err, _user] = await getUserFromToken(jwt!, abtCnt);
      if (err) {
        setIsLoading(false)
        alert('You are not logged in, please log in to continue');
        return;
      } else if (_user) {
        console.log(_user);
        updateUser(_user)
      }
    }

    setUp();
    return () => abtCnt.abort()
  }, [jwt])

  const requestPasswordResetToken = async (e: Event) => {
    setIsLoading(true)
    e.preventDefault()
    const [error, _user] = await resetPassword({
      email: user?.email,
      token: code,
      password,
    })
    setIsLoading(false)
    if (error) {
      alert('oops something happened!, try again')
      console.log(error)
    } else if (_user) {
      alert('Password reset successfully!')
      updateUser(_user);
      navigate(SCREENS.LOGIN)
    }
  }


  return (
    <Layout>
      <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
        <div className="text-center">
          <img
            className="mx-auto h-48 w-48 lg:hidden relative top-12"
            src="/images/magga-logo.svg"
            alt="logo"
          />
          <div>
            <h2
              className="text-2xl font-semibold text-slate-600 dark:text-navy-100"
            >
              Reset Password
            </h2>
            <p className="text-slate-400 dark:text-navy-300">
              Enter the code that was sent to your email
            </p>
          </div>
        </div>

        <div className="mt-10 flex space-x-4">
          <OAuthButton
            icon={<GoogleIcon />}
            label="Google"
          />

        </div>
        <div className="my-7 flex items-center space-x-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p className="text-tiny+">
            {/* or sign in with email */}
            Any of them is fine, email or phone
          </p>

          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <div className="mt-4 space-y-4">
          <Input
            placeholder="1234"
            type="text"
            value={code}
            handleChange={setCode}
            icon={<UserIcon />}
          />
          <Input
            placeholder=""
            type="password"
            value={password}
            handleChange={setPassword}
            icon={<PasswordIcon />}
          />
         
        </div>
        <Button
          label="Anmelden"
          disabled={isLoading}
          action={(e: unknown) => requestPasswordResetToken(e as Event)}
        />
        <div className="mt-4 text-center text-xs+">
          <p className="line-clamp-1">
            <span>
              {/* Don't have an account?  */}
              Kein Konto?
            </span>
            <Link
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              to={`/`}
            >
              {/* Sign up */}
              bitte hier registrieren
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;