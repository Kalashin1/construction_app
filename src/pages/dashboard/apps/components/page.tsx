import { Link } from "react-router-dom";
import { SCREENS } from "../../../../navigation/constants";

const Header = () => {
  return (
    <div className="mt-12 text-center">
      <div className="avatar h-16 w-16">
        <div className="is-initial rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white">
          <i className="fa-solid fa-shapes text-2xl"></i>
        </div>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-slate-600 dark:text-navy-100">
        MAGGA Applications
      </h3>
      <p className="mt-0.5 text-base">
        List of prebuilt applications of MAGGA
      </p>
    </div>
  )
}


const Apps = () => (
  <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-info text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Chat App
      </h2>
      <p className="mt-1">
        MAGGA prebuilt Messaging UI kit includes designs for social
        chat.
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.CHAT} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-warning text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Shop
      </h2>
      <p className="mt-1">
        MAGGA Shop is responsive and high-quality UI design kit
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.SHOP} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-primary text-white dark:bg-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M12.5293 18L20.9999 8.40002" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M3 13.2L7.23529 18L17.8235 6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Todo App
      </h2>
      <p className="mt-1">
        MAGGA Todo UI kit is a simple to-do list and an task management
        app.
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.TODO} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-secondary text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        File Manager
      </h2>
      <p className="mt-1">
        MAGGA File Manager UI Kit is designed with modern design trends.
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.FILE_MANAGER} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-secondary text-white">
          <i className="fas fa-envelope" />
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Mail
      </h2>
      <p className="mt-1">
        MAGGA Email UI Kit is designed with modern design trends.
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.MAIL} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
    <div className="card p-4 sm:p-5">
      <div className="avatar h-12 w-12">
        <div className="is-initial rounded-full bg-warning text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
          </svg>
        </div>
      </div>
      <h2 className="mt-5 line-clamp-1 text-base font-medium tracking-wide text-slate-700 dark:text-navy-100">
        Kanban Board
      </h2>
      <p className="mt-1">
        The Kanban Board to keep track of your personal and work tasks.
      </p>
      <div className="mt-5 pb-1">
        <Link to={SCREENS.KANBAN} className="border-b border-dashed border-current pb-0.5 font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70">View Application</Link>
      </div>
    </div>
  </div>
)

const Page = () => {
  return (
    <>
      <Header />
      <Apps />
    </>
  );
};

export default Page;