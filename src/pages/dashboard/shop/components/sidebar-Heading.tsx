const SidebarHeading = () => {
  return (
    <div className="flex flex-row justify-between ml-4 py-6">
      <div className="flex flex-row my-2 px-4">
        <h3 className="mr-4">Draft #001</h3>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>


      <div className="flex flex-row justify-between items-center space-x-4 mr-4">
        <span>
          <i className="fas fa-plus" />
        </span>
        <span>
          <i className="fas fa-trash" />
        </span>
        <span>
          <i className="fas fa-ellipsis-vertical" />
        </span>
      </div>
    </div>
  );
};

export default SidebarHeading;