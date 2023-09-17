const Trades = () => {
  return (
    <div className="bg-white rounded-md shadow-md dark:border-navy-700 dark:bg-navy-800 dark:text-white">
      <div className="p-8 flex flex-row justify-between items-center">
        <h3>
          <span className="mr-2">
            <i className="fas fa-file-lines text-xl" />
          </span>
          <span className="text-md">
            Trades
          </span>
        </h3>

        <div className="flex flex-row">
          <button className="bg-blue-700 px-4 py-2 rounded-md text-white mr-3">
            <i className="fas fa-pen-to-square" />
            <span className="ml-1">Capacity Planning</span>
          </button>
          <button>
            <span>
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      <div className="p-6">
        <ul className="list-disc">
          <li className="flex flex-row justify-between items-center my-4">
            <div className="text-green-500 text-lg">
              <span className="mr-2">
                <i className="fas fa-bolt-lightning" />
              </span>
              <span>
                Electric (i)
              </span>
            </div>

            <span>
              <i className="fas fa-times" />
            </span>
          </li>
          <li className="flex flex-row justify-between items-center">
            <div className="text-blue-500 text-lg">
              <span className="mr-2">
                <i className="fas fa-sink" />
              </span>
              <span>
                Plumbing (i)
              </span>
            </div>

            <span>
              <i className="fas fa-times" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trades;