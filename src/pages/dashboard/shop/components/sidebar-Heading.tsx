const SidebarHeading = () => {
  return (
    <div>
      <div>
        <h3>Draft #001</h3>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>


      <div>
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