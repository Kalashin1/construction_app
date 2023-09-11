const ScopeOfService = () => {
  return (
    <div>
      <h3 className="my-6 text-lg font-bold">Scope of services</h3>
      <div className="bg-white rounded-md shadow w-full">
        <div className="p-6 flex flex-col md:flex-row justify-between">
          <h3>Actions & Filters</h3>

          <button className="my-4 md:my-0 bg-transparent border-gray-800 border py-1 px-2 md:px-4 rounded-md">Multiple Selection</button>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        <div className="flex p-6 flex-col md:flex-row justify-between">
          <button className="my-4 md:my-0 bg-transparent border-gray-800 border py-1 px-2 md:px-4 rounded-md">Complete all Positions</button>
          <button className="my-4 md:my-0 bg-transparent border-gray-800 border py-1 px-2 md:px-4 rounded-md">Show only your own positions</button>
        </div>
      </div>
    </div>
  );
};

export default ScopeOfService;