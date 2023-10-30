import { EmailIcon, PasswordIcon } from "../svg";
import {
  Link,
  useNavigate
} from "react-router-dom";
import { OAuthButton, Input, Button } from "../components";
import { GoogleIcon } from "../svg/"
import Layout from "../layout";
import { SCREENS } from "../../../navigation/constants";
import { useLogin } from "../hooks";
import { FormEvent } from 'react';
import { notify, NotificationComponent } from "../../dashboard/components/notification/toast";

function Login() {

  const navigate = useNavigate();
  const {
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    errorMessage,
    funcWrapper,
    isLoading
  } = useLogin();
  
  const loginUser = async (e: Event | FormEvent) => {
    e.preventDefault();
    const [error, _user] = await funcWrapper();
    if (_user) {
      sessionStorage.setItem('userToken', _user.token)
      notify(
        (<NotificationComponent message="login successful" />),
        {
          className: `bg-green-700 font-bold text-white`,
          closeOnClick: true,
          onClose() {
            setTimeout(() => {
              if (
                !_user.first_name ||
                !_user.last_name ||
                !_user.avatar ||
                !_user.address ||
                !_user.bankDetails ||
                !_user.phone ||
                !_user.username ||
                !_user.email ||
                // (_user.role === 'employee' && !_user.taxIdNumber) ||
                // (_user.role === 'employee' && !_user.socialSecurityNumber) ||
                (_user.role !== 'employee' || 'admin' && !_user.billingDetails) ||
                (_user.role !== 'employee' || 'admin' && !_user.documents)
              )
                navigate(SCREENS.PROFILE)
              else navigate(SCREENS.DASHBOARD);
            }, 1500)
          },
        }
      );
    } 
    
    if (error) {
      notify(
        (<NotificationComponent message={`error something happened ${error}`} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,

        }
      )
      console.log('something happened', error)
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
              Willkommen in MAGGA
            </h2>
            <p className="text-slate-400 dark:text-navy-300">
              Bitte melden Sie sich an, um fortzufahren
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
            Oder mit E-Mail Anmelden
          </p>

          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <form onSubmit={e => loginUser(e)} className="mt-4 space-y-4">
          <Input
            placeholder="magga@magga.de"
            type="email"
            value={email}
            errorMessage={errorMessage}
            showError={emailError}
            handleChange={setEmail}
            icon={<EmailIcon />}
          />
          <Input
            placeholder="Passwort"
            type="password"
            value={password}
            showError={passwordError}
            errorMessage={errorMessage}
            handleChange={setPassword}
            icon={<PasswordIcon />}
          />
          <Button
            label="Anmelden"
            disabled={isLoading}
            action={(e: unknown) => loginUser(e as Event)}
          />
        </form>

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
        <div className="mt-4 text-center text-xs+">
          <p className="line-clamp-1">
            <span>
              {/* Don't have an account?  */}
              Forgot Password?
            </span>
            <Link
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              to={`${SCREENS.FORGOT_PASSWORD}`}
            >
              {/* Sign up */}
              Reset Password
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;