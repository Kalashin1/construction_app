const BackToTopFloatingActionButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <div 
    className="rounded-full z-50 bg-green-600 flex justify-center items-center fixed bottom-44 right-6 w-10 h-10 self-end shadow-md cursor-pointer"
    onClick={action}
  >
    <div>
      <i className="fas fa-chevron-up text-white" />
    </div>
  </div>
);

export default BackToTopFloatingActionButton;