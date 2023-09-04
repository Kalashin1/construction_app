const Button = ({
  label,
  action
}: {
  label: string;
  action: (...args: unknown[]) => void;
}) => {
  return (
    <button
      className="btn h-12 bg-primary text-base font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      style={{ width: '100% !important'}}
      onClick={action}
    >
      {label}
    </button>
  );
};

const CreateCard = () => {
  return (
    <div className="bg-white rounded-sm shadow p-4 md:p-8 flex flex-col md:flex-row justify-between items-center
    space-y-4 space-x-4">
      <div>
        <Button
          label="PDF File"
          action={() => { }}
        />
      </div>
      <div>
        <Button
          label="Excel File"
          action={() => { }}
        />
      </div>
      <div>
        <Button
          label="Manual Configurator"
          action={() => { }}
        />
      </div>
    </div>
  )
}

export default CreateCard;