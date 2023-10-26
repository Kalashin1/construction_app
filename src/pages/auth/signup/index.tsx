import { OAuthButton, Input, Button } from "../components";
import { EmailIcon, PasswordIcon, UserIcon } from "../svg";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../svg/google";
import Layout from "../layout";
import { SCREENS } from "../../../navigation/constants";
import { useCreateUserAccount } from "../hooks";
import { completeRegistration } from "../../dashboard/helper/user";
import { FormEvent } from "react";
import { notify, NotificationComponent } from "../../dashboard/components/notification/toast"

function Signup() {

  const navigate = useNavigate();

  const {
    email,
    setEmail,
    setEmailError,
    password,
    setPassword,
    iAccept,
    setIAccept,
    error,
    setPasswordConfirm,
    passwordConfirm,
    passwordError,
    emailError,
    token,
    setPasswordError,
    tokenError,
    setToken,
    // updateTokenError,
    // createUserAccount,
    isLoading,
    setIsLoading,
    setError,
  } = useCreateUserAccount();

  const createAccount = async (e: Event | FormEvent) => {
    e.preventDefault();
    setPasswordError(false)
    setEmailError(false);
    setIsLoading(true)

    // const _user = await createUserAccount({ email, password, type: "EMAIL", role: 'admin' })
    // if (_user) {
    //   alert('account created successfully');
    //   sessionStorage.setItem('userToken', _user.token)
    //   navigate(SCREENS.PROFILE);
    // }
    if (password !== passwordConfirm) {
      setIsLoading(false)
      setPasswordError(true)
      setError('passwords do not match!')
      return;
    }

    setEmailError(false);
    const [err, _user] = await completeRegistration(token, {
      email,
      password
    });
    setIsLoading(false)
    if (err) {
      alert('oops something happened!')
      console.log(err)
      if (err.errorMessage.includes('email already exists')) {
        setError(err.errorMessage);
        setEmailError(true)
      }
    } else if (_user) {
      sessionStorage.setItem('userToken', _user.user.token)
      notify(
        (<NotificationComponent message="account created successfully" />),
        {
          className: `bg-green-700 font-bold text-white`,
          closeOnClick: true,
          onClose() {
            navigate(SCREENS.PROFILE);
          }
        }
      )
    }

  }

  return (
    <Layout>
      <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
        <img
          className="mx-auto h-48 w-48 lg:hidden relative top-12"
          src="/images/magga-logo.svg"
          alt="logo"
        />
        <div className="text-center">
          <h2
            className="text-2xl font-semibold text-slate-600 dark:text-navy-100"
          >
            Willkommen in MAGGA
          </h2>
          <p className="text-slate-400 dark:text-navy-300">
            Bitte registrieren Sie sich um Fortzufahren
          </p>
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
            {/* or sign up with email */}
            Oder mit E-Mail registrieren
          </p>

          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <form onSubmit={e => createAccount(e)} className="mt-4 space-y-4">

          <Input
            placeholder="magga@magga.de"
            type="email"
            value={email}
            errorMessage={error}
            showError={emailError}
            required={true}
            handleChange={setEmail}
            icon={<EmailIcon />}
          />
          <Input
            placeholder="Passwort"
            type="password"
            value={password}
            required={true}
            handleChange={setPassword}
            errorMessage={error}
            showError={passwordError}
            icon={<PasswordIcon />}
          />
          <Input
            placeholder="Passwort bestätigen"
            type="password"
            value={passwordConfirm}
            required={true}
            errorMessage={error}
            showError={passwordError}
            handleChange={setPasswordConfirm}
            icon={<PasswordIcon />}
          />
          <Input
            placeholder="Enter the token that was generated for you"
            type="text"
            value={token}
            errorMessage={error}
            showError={tokenError}
            required={true}
            handleChange={setToken}
            icon={<UserIcon />}
          />
          <div className="mt-4 flex items-center space-x-2">
            <input
              className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
              type="checkbox"
              checked={iAccept}
              required
              onChange={() => setIAccept(!iAccept)}
            />
            {
              !iAccept && error.includes(' accept the terms') &&
              (<small className="text-red-500">Accept the terms and conditions</small>)
            }
            <p className="line-clamp-1">
              <Link
                to={'/login'}
                className="text-slate-400 hover:underline dark:text-navy-300"
              >
                {/* I agree */}
                Allgemeine Geschäftsbedingungen akzeptieren
              </Link>
            </p>
          </div>
          <Button
            label="Konto erstellen"
            action={(e: unknown) => createAccount(e as Event)}
            disabled={isLoading}
          />
        </form>
        <div className="mt-4 text-center text-xs+">
          <p className="line-clamp-1">
            <span>
              {/* Already have an account?  */}
              Ich habe bereits ein Konto
            </span>
            <Link
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              to={SCREENS.LOGIN}
            >
              {/* Sign In */}
              Anmelden
            </Link>
          </p>
        </div>
      </div>
    </Layout                                                                                      >
  );
}

export default Signup;