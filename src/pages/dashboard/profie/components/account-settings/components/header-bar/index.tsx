/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { UserAuthContext } from '../../../../../../../App'
import { getFile, uploadLogoURL } from '../../../../../helper/uploads'
import {useContext} from 'react';

const HeaderBar = ({
  id
}: {
  id: string
}) => {

  const {user, setCurrentUser} = useContext(UserAuthContext)

  const uploadImage = async (type: string) => {
    const [err, file] = await getFile();
    if (err) {
      console.log(err)
    } else if (file) {
      const [error, payload] = await uploadLogoURL(
        user?._id!,
        type,
        file
      )
      if (error) {
        alert('oops something happened!');
        console.log(error)
      } else if (payload) {
        console.log(payload);
        alert(`${type} updated successfully!`);
        setCurrentUser!(payload)
      }
      console.log(file)
    }
  }
  return (
    <>
      <div className="my-4 px-4 bg-white rounded shadow-sm font-bold py-4 dark:bg-navy-600 dark:text-white">
        <h3>MAGGA ID: {id}</h3>
      </div>
      <div className="bg-white rounded-md shadow-sm my-4 dark:bg-navy-600">
        <div className="flex flex-row justify-between p-4">
          <h3 className="px-2">
            <span>
              <i className="far fa-image" />
            </span>
            <span className="pl-2">
              Logo & Icon
            </span>
          </h3>

          <div className="grid grid-cols-3 gap-x-0">
            <button onClick={() => uploadImage('logo')}>
              <i className="fas fa-pen-to-square mr-2" />
              <span className="ml-2">
                Logo
              </span>
            </button>

            <button onClick={() => uploadImage('icon')}>
              <i className="fas fa-pen-to-square" />
              <span className="ml-2">
                Icon
              </span>
            </button>

            <button onClick={() => uploadImage('invoiceLogo')}>
              <i className="fas fa-pen-to-square" />
              <span className="ml-2">
                Invoice logo
              </span>
            </button>

          </div>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

        <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between w-full">
          <h3>Logo</h3>
          <h3>Icon</h3>
          <h3>Invoice Logo</h3>
        </div>
        <div className="grid grid-cols-3 px-6 py-4 gap-x-4 justify-between">
          <span>
            <img src={user?.logoUrl && user?.logoUrl.logo} className='w-20 h-20 object-cover rounded-full' />
          </span>
          <span>
            {user?.logoUrl && user?.logoUrl.icon ? (<img src={user?.logoUrl.icon} className='w-20 h-20 object-cover rounded-full' />): ('No Image')}
          </span>
          <span>
          {user?.logoUrl && user?.logoUrl.invoiceLogo ? (<img src={user?.logoUrl.invoiceLogo} className='w-20 h-20 object-cover rounded-full' />): ('No Image')}
          </span>

        </div>
      </div>
    </>
  )
}
export default HeaderBar;