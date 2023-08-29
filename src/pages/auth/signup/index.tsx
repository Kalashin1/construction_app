import { AuthHeader, AuthImage, OAuthButton, Input, Button } from "../components";
import { EmailIcon, PasswordIcon, UserIcon } from "../svg";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../svg/google";

function Signup() {

  const navigate = useNavigate();

  return (
    <>
      <AuthHeader />
      <div className="flex flex-row w-screen">
        <AuthImage />
        <main
          className="flex w-full flex-col items-center bg-white dark:bg-navy-700"
        >
          <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
            <div className="mt-4">
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
              <p className="text-tiny+ uppercase">or sign up with email</p>

              <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
            </div>
            <div className="mt-4 space-y-4">
              <Input
                placeholder="Name"
                type="text"
                icon={<UserIcon />}
              />
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
              <Input
                placeholder="Confirm Password"
                type="password"
                icon={<PasswordIcon />}
              />
              <div className="mt-4 flex items-center space-x-2">
                <input
                  className="form-checkbox is-basic h-5 w-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  type="checkbox"
                />
                <p className="line-clamp-1">
                  <Link
                    to={'/login'}
                    className="text-slate-400 hover:underline dark:text-navy-300"
                  >
                    I agree
                  </Link>
                </p>
              </div>
            </div>
            <Button
              label="Create Account"
              action={() => navigate('/login')}
            />
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Already have an account? </span>
                <Link
                  className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                  to={'/login'}
                >Sign In</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Signup;