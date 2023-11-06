import { ProjectPositions } from "../../../../../types";
import { formatter } from "../../../helper/tools";

const DraftPositions = ({
  positions
}: {
  positions: ProjectPositions[]
}) => {
  const titles = ['Position', 'Description', ' ', 'Number', 'Unit Price', '% Ownership', 'Total price']
  return (
    <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
      <table className="is-zebra w-full text-left">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <th className="whitespace-nowrap  bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5" key={index}>
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {positions && positions.map((position, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                {position.external_id}
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <div>
                  <p className="text-xs+">
                    {position.shortText}
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                <p className="font-medium text-slate-600 dark:text-navy-100">
                  Apartment
                </p>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                {position.crowd}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                100%
              </td>
              <td className="whitespace-nowrap rounded-r-lg px-4 py-3 text-right font-semibold sm:px-5">
                {position.price}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right sm:px-5">
                {formatter.format((Number(position?.crowd) * position.price!))}
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default DraftPositions;