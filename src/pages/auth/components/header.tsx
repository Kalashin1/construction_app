const AuthHeader = () => {
  return (
    <div className="fixed top-0 hidden p-6 lg:block lg:px-12">
      <a href="#" className="flex items-center space-x-2">
        <img className="h-12 w-12" src="images/app-logo.svg" alt="logo" />
        <p
          className="text-xl font-semibold uppercase text-slate-700 dark:text-navy-100"
        >
          lineone
        </p>
      </a>
    </div>
  );
};

export default AuthHeader;