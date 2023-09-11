import { ReactNode } from "react";

const Message = () => (
  <div className="chat-footer fixed bottom-0 flex w-full h-12 shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800 left-0 md:left-64">
    <div className="-ml-1.5 flex flex-1 space-x-2 pl-4">
      <button className="btn h-9 w-9 shrink-0 mt-1.5 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
        <i className="fas fa-paperclip" />
      </button>

      <input type="text" className="form-input h-12 w-10/12 md:w-7/12 lg:w-8/12 xl:w-9/12 bg-transparent placeholder:text-slate-400/70" placeholder="Write the message" />
      
      <div className="-mr-1.5 flex mt-1.5">
        
        <button className="btn h-9 w-9 shrink-0 rounded-full p-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
          <i className="far fa-paper-plane" />
        </button>
      </div>
    </div>

  </div>
)

const Reply = ({
  assets
}: {
  assets?: ReactNode
}) => {
  return (
    <div className="flex items-start space-x-2.5 sm:space-x-5 my-4">
      <div className="avatar">
        <img className="rounded-full" src="images/100x100.png" alt="avatar" />
      </div>

      <div className="flex flex-col items-start space-y-3.5">
        <div className="mr-4 max-w-lg sm:mr-10">
          <div className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-sm dark:bg-navy-700 dark:text-navy-100">
            Hello My Dear. Lorem ipsum dolor sit amet, consectetur.
          </div>
          <p className="ml-auto mt-1 text-right text-xs text-slate-400 dark:text-navy-300">
            08:16
          </p>
        </div>
        {assets && assets}
      </div>
    </div>
  )
}

const SentMessage = () => (
  <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
    <div className="flex flex-col items-end space-y-3.5">
      <div className="ml-4 max-w-lg sm:ml-10">
        <div className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Assumenda necessitatibus, ratione. Voluptatum.
        </div>
      </div>
      <div className="ml-4 max-w-lg sm:ml-10">
        <div className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-sm dark:bg-accent dark:text-white">
          And that’s why a 15th century
        </div>
        <p className="ml-auto mt-1 text-left text-xs text-slate-400 dark:text-navy-300">
          08:16
        </p>
      </div>
    </div>
    <div className="avatar">
      <img className="rounded-full" src="images/100x100.png" alt="avatar" />
    </div>
  </div>
)

const DownloadButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);

const Asset = () => (
  <div className="group relative">
    <img className="h-full rounded-lg object-cover" src="images/800x600.png" alt="image" />
    <div className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <button className="btn h-9 w-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
        <DownloadButton />
      </button>
    </div>
  </div>
)

const Assets = () => (
  <div className="mr-4 max-w-lg sm:mr-10">
    <div className="grid grid-cols-12 gap-2">

      <div
        className="col-span-12 grid grid-cols-2 gap-2"
      >
        {[0, 1, 2, 3].map((v) => (
          <Asset key={v} />
        ))}
      </div>
    </div>
    <p className="mt-1 text-xs text-slate-400 dark:text-navy-300 text-right">
      08:21
    </p>
  </div>
)

const Chat = () => {
  return (
    <div className="scrollbar-sm grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] md:px-12 lg:px-8 py-5 transition-all duration-[.25s]">
      <div className="space-y-5"></div>
      <div className="mx-4 flex items-center space-x-3">
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <p>Sunday</p>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      </div>
      <Reply />
      <SentMessage />
      <Reply assets={(<Assets />)} />
      <Message />
    </div>
  )
}

export default Chat;