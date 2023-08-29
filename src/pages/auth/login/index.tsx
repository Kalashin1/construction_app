import { EmailIcon, PasswordIcon } from "../svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthHeader, AuthImage, OAuthButton, Input, Button } from "../components";
import {GithubIcon, GoogleIcon} from "../svg/"

function Login() {

  const navigate = useNavigate()

  return (
    <>
      <AuthHeader />
      <div className="flex flex-row w-screen">
        <AuthImage />
        <main
          className="flex w-full flex-col items-center bg-white dark:bg-navy-700"
        >
          <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
            <div className="text-center">
              <img
                className="mx-auto h-16 w-16 lg:hidden"
                src="/images/app-logo.svg"
                alt="logo"
              />
              <div className="mt-4">
                <h2
                  className="text-2xl font-semibold text-slate-600 dark:text-navy-100"
                >
                  Welcome To Lineone
                </h2>
                <p className="text-slate-400 dark:text-navy-300">
                  Please sign up to continue
                </p>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
            <OAuthButton
                icon={<GoogleIcon />}
                label="Google"
              />
              <OAuthButton
                icon={<GithubIcon />}
                label="Github"
              />
            </div>
            <div className="my-7 flex items-center space-x-3">
              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
              <p className="text-tiny+ uppercase">or sign in with email</p>

              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </div>
            <div className="mt-4 space-y-4">
              <Input
                placeholder="Johndoe@gmail.com"
                type="email"
                icon={<EmailIcon />}
              />
              <Input
                placeholder="Password"
                type="password"
                icon={<PasswordIcon />}
              />
            </div>
            <Button 
              label="Sign In"
              action={() => navigate('/')}
            />
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Don't have an account? </span>
                <Link
                  className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  to={`/`}
                >Sign up</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;