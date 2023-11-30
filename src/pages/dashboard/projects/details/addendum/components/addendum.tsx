/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useParams } from "react-router-dom";
import { getProject } from "../../../../helper/project";
import { NotificationComponent, notify } from "../../../../components/notification/toast";
import { IProject, PositionInterface, ProjectPositions, TradeInterface, User } from "../../../../../../types";
import { useContext, useEffect, useState } from "react";
import { getAllTrades, getPositions } from "../../../../profie/trades/components/helper";
import { Button } from "../../../../components/current-projects";
import { addNewAddendum } from "../../../helper";
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import AddendumTable from "./addendum-table";
import { UserAuthContext } from "../../../../../../App";
import { getUserById } from "../../../../helper/user";

const AddAddenDum = () => {
  const { project_id } = useParams()
  const [project, setProject] = useState<IProject | null>(null)
  const { user } = useContext(UserAuthContext);

  const [trades, updateTrades] = useState<TradeInterface[] | null>(null);
  const navigate = useNavigate();
  const [selectedTrade, updateSelectedTrade] = useState<{ id: string, name: string } | null>();
  // @ts-ignore
  const [positions, updatePositions] = useState<PositionInterface[] | null>(null)
  const [selectedPositions, updateSelectedPositions] = useState<string | null>(null)

  const [executors, setExecutors] = useState<User[]>([])
  const [executor, setExecutor] = useState<string>('')

  const [crowd, updateCrowd] = useState(0);
  const [additive, updateAdditive] = useState('');
  const [price, updatePrice] = useState(0);
  const [shortText, updateShortText] = useState('');
  const [longText, updateLongText] = useState('');
  const [units, setUnits] = useState('')

  const [comment, setComment] = useState('')

  const [addendums, setAddendums] = useState<ProjectPositions[]>([]);

  useEffect(() => {
    const setUp = async () => {
      const [error, _project] = await getProject(project_id!);
      if (error) {
        notify(
          (<NotificationComponent message="error fetching project" />),
          {
            className: "bg-red-500 text-white",
            closeOnClick: true
          }
        );
        console.log(error);
      }

      if (_project) {
        setProject(_project)
        const _executors = await Promise.all(_project.executors.map(async (exe) => {
          const [, user] = await getUserById(exe);
          if (user) return user;
        }))
        setExecutors(_executors as User[])
        const [error, _trades] = await getAllTrades();
        if (error) {
          notify(
            (<NotificationComponent message={'oops something happened!'} />),
            {
              className: `bg-red-700 font-bold text-white`,
              closeOnClick: true,
            }
          )
          console.log(error)
        }

        if (_trades) {
          updateTrades(_trades);
          console.log(_trades)
        }
      }
    }

    setUp()
  }, [project_id])

  const selectPosition = async (trade: { name: string, id: string }) => {
    if (trade.name === selectedTrade?.name) {
      updateSelectedTrade(null);
      return;
    } else {
      updateSelectedTrade(trade)
    }
    const [error, positions] = await getPositions(trade.id);
    if (error) {
      notify(
        (<NotificationComponent message={'Error fetching positions'} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (positions) {
      notify(
        (<NotificationComponent message={'Positions retrived successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      updatePositions(positions)
    }
  }

  const addNewPosition = async () => {
    const [error, payload] = await addNewAddendum(
      project_id!,
      selectedTrade?.id!,
      addendums,
      user?._id!,
      user?.role === 'executor' ? project?.contractor! : executor,
      comment
    );
    if (error) {
      notify(
        (<NotificationComponent message={'Error adding positions'} />),
        {
          className: `bg-red-700 font-bold text-white`,
          closeOnClick: true,
        }
      )
      console.log(error)
    }

    if (payload) {
      notify(
        (<NotificationComponent message={'Addendum added successfully!'} />),
        {
          className: `bg-green-500 font-bold text-white`,
          closeOnClick: true,
        }
      )
      updatePositions(positions);
      navigate(`/detail/${project_id}`)
    }
  }

  const addAddendums = () => {
    if (selectedTrade?.name === 'other') {
      setAddendums([...addendums, {
        crowd: crowd.toString(),
        status: 'CREATED',
        billed: false,
        tradeName: selectedTrade?.name,
        section: additive,
        price,
        shortText,
        longText,
        units,
        external_id: '06.09.01.00X0'
      }])
      return;
    }
    const positionParams = positions?.find((pos) => pos.external_id == selectedPositions)
    console.log(positionParams)
    setAddendums([...addendums, {
      ...positionParams!,
      crowd: crowd.toString(),
      status: 'CREATED',
      billed: false,
      tradeName: selectedTrade?.name,
      section: additive,
    }])

  }

  return (
    <>
      <div className="bg-white dark:bg-navy-800 rounded-sm shadow-sm">
        <div className="px-6 py-4">
          <i className="fas fa-user mr-2" />
          <span>{project?.external_id} - </span>
          Main Order Items - New Addendum
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

        <div>
          <div className="px-6 py-4 flex flex-row justify-between items-center">
            <div className="w-2/5">
              <label className="block">
                <span>Select Trade</span>
                <Select
                  // @ts-ignore
                  options={trades && trades.map((trade) => ({ label: trade.name, value: trade._id }))}
                  // @ts-ignore
                  onChange={v => {
                    selectPosition({ name: v?.label!, id: v?.value! });
                    updateSelectedPositions(null)
                  }}
                />


              </label>
            </div>

            <div className="w-2/5 mx-4">
              <label className="block">
                <span>Select Position</span>
                <Select
                  // @ts-ignore
                  options={positions && positions.map((pos) => ({ label: pos.shortText, value: pos.external_id }))}
                  // @ts-ignore
                  onChange={v => updateSelectedPositions(v?.value)}
                />

              </label>
            </div>

            <div className="w-1/5">
              <label className="block">
                <span>LV Position</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
                  disabled
                  defaultValue={selectedPositions!}
                  type="text"
                />
              </label>

            </div>
          </div>

          <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
            <div className="w-1/5">
              <label className="block">
                <span>Crowd</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  type="text"
                  defaultValue={crowd}
                  onChange={e => updateCrowd(Number(e.target.value))}
                />
              </label>

            </div>
            <div className="w-1/5">
              <label className="block">
                <span>Unit</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
                  type="text"
                  onChange={(e) => setUnits(e.target.value)}
                  defaultValue={positions?.find((pos) => pos.external_id === selectedPositions)?.units}
                  disabled={selectedTrade && selectedTrade.name === 'other' ? false : true}
                />
              </label>

            </div>
            <div className="w-1/5">
              <label className="block">
                <span>Price</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  type="number"
                  onChange={(e) => updatePrice(parseFloat(e.target.value))}
                  value={positions?.find((pos) => pos.external_id === selectedPositions)?.price}
                  disabled={selectedTrade && selectedTrade.name === 'other' ? false : true}
                />
              </label>

            </div>
            <div className="w-1/5">
              <label className="block">
                <span>trade</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent cursor-not-allowed"
                  type="text"
                  defaultValue={selectedTrade?.name}
                  disabled
                />
              </label>

            </div>
            <div className="w-2/5">
              <label className="block">
                <span>Additive</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-150 dark:bg-navy-900 px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  type="text"
                  value={additive}
                  onChange={e => updateAdditive(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
            <div className="w-4/12">
              <label className="block">
                <span>Short Description</span>
                <textarea
                  rows={4}
                  placeholder=" Enter Text"
                  className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"
                  onChange={(e) => updateShortText(e.target.value)}
                  disabled={selectedTrade && selectedTrade.name === 'other' ? false : true}
                  defaultValue={positions?.find((pos) => pos.external_id === selectedPositions)?.shortText}
                ></textarea>
              </label>
            </div>
            <div className="w-8/12">
              <label className="block">
                <span>Long Description</span>
                <textarea
                  rows={4}
                  placeholder=" Enter Text"
                  className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"
                  onChange={(e) => updateLongText(e.target.value)}
                  disabled={selectedTrade && selectedTrade.name === 'other' ? false : true}
                  defaultValue={positions?.find((pos) => pos.external_id === selectedPositions)?.longText}
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

        <div className="px-6 py-4 flex flex-row justify-between items-center space-x-4 my-2">
          <Button
            label="Cancel"
            color="bg-red-500 dark:bg-red-500"
            action={() => navigate(`/detail/${project_id}`)}
          />
          <Button
            label="Add Addendum"
            color="bg-green-500 dark:bg-green-500"
            action={addAddendums}
          />
        </div>


      </div >
      {addendums && (<AddendumTable
        updateAddendums={setAddendums}
        addendums={addendums}
      />)}
      {user?.role === 'contractor' && (<Select
        options={executors.map((exe) => ({ value: exe._id, label: exe.first_name }))}
        onChange={v => {
          setExecutor(v?.value!);
        }}
      />)}
      <div className="w-full">
        <label className="block">
          <span>Add Comment</span>
          <textarea
            rows={4}
            placeholder=" Enter Text"
            className="form-textarea w-full resize-none rounded-lg bg-slate-150 p-2.5 placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300"
            onChange={(e) => setComment(e.target.value)}
            defaultValue={comment}
          ></textarea>
        </label>
      </div>
      <div className="flex justify-center items-center my-2">
        <Button color="bg-gray-300 shadow-md dark:bg-navy-700" label="Add Addendum" action={addNewPosition}></Button>
      </div>
    </>
  )
}

export default AddAddenDum;