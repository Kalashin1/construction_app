const ChatFloatingActionButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <div 
    className="rounded-full z-50 bg-blue-700 flex justify-center items-center fixed bottom-56 right-6 w-10 h-10 self-end shadow-md cursor-pointer"
    onClick={action}
  >
    <div>
      <i className="fas fa-comments text-white" />
    </div>
  </div>
);

export default ChatFloatingActionButton;