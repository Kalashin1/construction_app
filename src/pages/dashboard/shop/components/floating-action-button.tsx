const FloatingActionButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <div 
    className="rounded-full z-50 bg-amber-400 text-white font-bold flex justify-center items-center fixed bottom-2 right-4 w-14 h-14 self-end shadow-md"
    onClick={action}
  >
    <div>
      $60
    </div>
  </div>
);

export default FloatingActionButton;