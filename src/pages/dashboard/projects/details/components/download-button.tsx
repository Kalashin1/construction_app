type Props = {
  action: (...args: unknown[]) => void;
}

const DownloadProjectActionButton = ({
  action
}: Props) => (
  <div 
    className="rounded-full z-50 bg-black flex justify-center items-center fixed bottom-20 right-6 w-10 h-10 self-end shadow-md cursor-pointer"
    onClick={action}
  >
    <div>
      <i className="fas fa-ellipsis-vertical text-white text-xl" />
    </div>
  </div>
);

export default DownloadProjectActionButton;