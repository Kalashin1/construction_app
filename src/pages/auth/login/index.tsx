import { EmailIcon, PasswordIcon } from "../svg";
import { Link, useNavigate } from "react-router-dom";
import { OAuthButton, Input, Button } from "../components";
import { GoogleIcon } from "../svg/"
import Layout from "../layout";

function Login() {

  const navigate = useNavigate()

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
        <div className="mt-4 space-y-4">
          <Input
            placeholder="magga@magga.de"
            type="email"
            icon={<EmailIcon />}
          />
          <Input
            placeholder="Passwort"
            type="password"
            icon={<PasswordIcon />}
          />
        </div>
        <Button
          label="Anmelden"
          action={() => navigate('/dashboard')}
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

export default Login;