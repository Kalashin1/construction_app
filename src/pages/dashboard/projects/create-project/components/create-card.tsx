import { getFile, uploadProject } from "../../../helper/uploads";

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
      style={{ width: '100% !important' }}
      onClick={action}
    >
      {label}
    </button>
  );
};

const CreateCard = () => {
  const uploadNewProject = async () => {
    const [err, file] = await getFile({
      'application/*': ['.pdf', '.xlsx', '.xls']
    }, 'project');
    if (err) {
      console.log(err)
    } else if (file) {
      console.log(file)
      const [error, response] = await uploadProject(
        Math.floor(Math.random() * 100000).toString(),
        file
      )
      if (error) {
        alert('oops something happened!')
        console.log(error);
      } else if (response) {
        alert('project uploaded successfully')
        console.log(response)
      }
    }
  }
  return (
    <div className="bg-white rounded-sm shadow p-4 md:p-8 flex flex-col md:flex-row justify-between items-centera
    space-y-4 space-x-4 dark:border-navy-700 dark:bg-navy-800 dark:text-accent">
      <div>
        <Button
          label="PDF File"
          action={uploadNewProject}
        />
      </div>
      <div>
        <Button
          label="Excel File"
          action={uploadNewProject}
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