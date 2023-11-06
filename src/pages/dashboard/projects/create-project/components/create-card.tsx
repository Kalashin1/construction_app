/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../../../../App";
import { createProjectParam } from "../../../../../types";
import { createProject } from "../../../helper/project";
import { getFile, uploadProject } from "../../../helper/uploads";
import { useContext } from 'react';
import { SCREENS } from "../../../../../navigation/constants";
import { notify, NotificationComponent } from "../../../components/notification/toast";

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
  const { user } = useContext(UserAuthContext)
  const navigate = useNavigate()
  const uploadNewProject = async () => {
    const [err, files] = await getFile(
      {
        'application/*': ['.pdf', '.xlsx', '.xls']
      },
      'project',
      true
    );
    if (err) {
      console.log(err)
    } else if (files) {
      console.log(files)
      for (const file of files) {
        const [error, response] = await uploadProject(user?._id!, file);
        if (error) {
          notify(
            (<NotificationComponent message={'oops something happened!'} />),
            {
              className: `bg-red-700 font-bold text-white`,
              closeOnClick: true,
            }
          )
          console.log(error);
        }

        if (response) {
          notify(
            (<NotificationComponent message={'project uploaded successfully'} />),
            {
              className: `bg-success font-bold text-white`,
              closeOnClick: true,
            }
          )
          const [projectErr, project] = await makeProject(response)
          if (projectErr) {
            notify(
              (<NotificationComponent message={'oops something happened! ' + projectErr.message} />),
              {
                className: `bg-red-600 font-bold text-white`,
                closeOnClick: true,
              }
            )
            console.log(projectErr);
          }

          else if (project) {
            notify(
              (<NotificationComponent message={'project created successfully'} />),
              {
                className: `bg-success font-bold text-white`,
                closeOnClick: true,
              }
            )
            console.log(project);
          }
        }
      }
      navigate(SCREENS.PROJECTS);
    }
  }
  const makeProject = async (response: createProjectParam) => {
    return createProject(response);
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