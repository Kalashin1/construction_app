
const DeclineProjectFloatingActionButton = ({
  action
}: {
  action: (...args: unknown[]) => void;
}) => (
  <div className="rounded-full bg-red-700 flex justify-center items-center fixed top-34 md:top-48 z-50 right-4 w-12 h-12 self-end shadow-md cursor-pointer" onClick={action}>
    <div>
      <i className="fas fa-times text-2xl text-white" />
    </div>
  </div>
);

export default DeclineProjectFloatingActionButton;