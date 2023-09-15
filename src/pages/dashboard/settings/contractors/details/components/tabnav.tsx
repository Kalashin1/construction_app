import {Dispatch, SetStateAction} from 'react';

type TabNavLink = {
  text: string;
  icon: string;
}

const TabNav = ({
  links,
  changeTab
}: {
  links: Array<TabNavLink>,
  changeTab: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="md:col-span-4">
      <div className="bg-white rounded-md shadow-md p-4 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <nav>
          <ul>
            <li className="py-1 px-4">
              <h3 className="font-bold my-2">MAGGA</h3>
            </li>
            <li className="py-1 px-4">
              <p>
                <span className="mr-2">
                  <i className="fas fa-location-dot" />
                </span>
                Musterstraße. XXXXX, Stadt
              </p>
            </li>
            <li className="py-1 px-4 mb-12">
              <p>
                <span className="mr-2">
                  <i className="fas fa-envelope" />
                </span>
                magga@gmail.com
              </p>
            </li>
            {links.map((sbL, index) => (
              <li
                key={index} 
                className="hover:bg-blue-200 hover:text-gray-500 py-4 px-2 cursor-pointer rounded"
                onClick={() => changeTab(index)}
              >
                <div className="text-ml">
                  <span className="mr-4">
                    <i className={sbL.icon} />
                  </span>
                  {sbL.text}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TabNav;