import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { User } from "../../../../../types";
import { getUserFromToken} from "../../../helper/user";
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../../../navigation/constants";

export const DisabledInput = ({
  label,
  disabled,
  name,
  value,
  handleChange,
  defaultValue,
}: {
  label: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  defaultValue?: string;
  handleChange?: Dispatch<SetStateAction<string>>
}) => (
  <div className="my-2">
    <label className="flex flex-row items-center">
      <span className="text-md text-slate-400 dark:text-navy-300 mr-4 md:w-2/5">
        {label}
      </span>
      <input
        disabled={disabled}
        className="form-input w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary disabled:pointer-events-none disabled:select-none disabled:border-none disabled:bg-zinc-100 dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent dark:disabled:bg-navy-600"
        placeholder="Disabled"
        type="text"
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => handleChange && handleChange(e.target.value)}
      />
    </label>
  </div>
)

const NumberRangeInvoice = ({
  title,
  showFooter = true,
  type,
  user
}: {
  title: string;
  showFooter?: boolean;
  type: 'numberRangesLocal' | 'numberRanges';
  user?: User;
}) => {
  const numberRangeType = (user && user[`${type}`]) ?? [];
  const _draft = (numberRangeType![0]) ?? {};
  const invoice = (numberRangeType![1] ?? {});
  const draftForm = useRef<HTMLFormElement | null>(null);
  const invoiceForm = useRef<HTMLFormElement | null>(null);

  // const updateNumberRange = async () => {

  //   const {
  //     nextNumber: { value: nextNumber },
  //     Dprefix: { value: prefix },
  //   } = draftForm.current!;
  //   const {
  //     invoicePrefix: { value: invoicePrefix },
  //     invoiceNextNumber: { value: invoiceNextNumber }
  //   } = invoiceForm.current!;
   
  //   const [err, payload] = await updateUserProfile({
  //     _id: user?._id,
  //     [type]: [
  //       { prefix, nextNumber, type: 'DRAFT' },
  //       { prefix: invoicePrefix, nextNumber: invoiceNextNumber, type: 'INVOICE' }
  //     ]
  //   });
  //   if (err) {
  //     alert("oops something happened!")
  //     console.log(err);
  //   } else if (payload) {
  //     alert('number range set successfully!')
  //     console.log(payload)
  //   }
  // }
  return (
    <div className="bg-white rounded-md shadow-sm my-4 dark:bg-navy-600">
      <div className="flex flex-row justify-between p-4">
        <h3 className="px-2">
          <span>
            <i className="fas fa-list" />
          </span>
          <span className="pl-2">
            {title}
          </span>
        </h3>

        <div>

          {/* <button
            className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
            onClick={updateNumberRange}
          >
            Save
          </button> */}
        </div>
      </div>
      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

      <div className="grid grid-cols-2 px-6 py-4 gap-x-4 justify-between w-full">
        <div>
          <h3>Draft</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <form
            className="my-4"
            ref={draftForm}
          >
            <DisabledInput
              label="Prefix"
              defaultValue={_draft?.prefix}
              disabled={true}
              name="Dprefix"
            />
            <DisabledInput
              label="Next Number"
              defaultValue={_draft?.nextNumber?.toString()}
              name="nextNumber"
              disabled={true}
            />
          </form>

        </div>
        <div>
          <h3>The Invoice</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <form
            className="my-4"
            ref={invoiceForm}
          >
            <DisabledInput
              label="Prefix"
              defaultValue={invoice?.prefix}
              name="invoicePrefix"
              disabled={true}
            />
            <DisabledInput
              label="Next Number"
              defaultValue={invoice?.nextNumber?.toString()}
              name="invoiceNextNumber"
              disabled={true}
            />
          </form>

        </div>

      </div>

      <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
      {showFooter && (<h3 className="px-8 py-2">Manual numbering was chosen for invoices.</h3>)}
    </div>
  )
}

const HeaderBar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('userToken')
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const setUp = async () => {
      const abCnt = new AbortController();
      const [err, _user] = await getUserFromToken(token!, abCnt);
      if (!_user || err) {
        navigate(SCREENS.LOGIN)
      }

      if (_user) {
        setUser(_user);
      }
    }

    setUp()
  }, [navigate, token])
  return (
    <div>
      <div className="my-4 px-4 bg-white rounded shadow-sm font-bold py-4 dark:bg-navy-600 dark:text-white">
        <div className="flex flex-row justify-between">
          <h3>
            <span className="font-bold">Note :</span>
            <span className="font-normal">If you want to change the number ranges, please contact the MAGGA Support Team.</span></h3>

          <span>
            <i className="fas fa-times" />
          </span>
        </div>
      </div>
      {user && (<NumberRangeInvoice
        title="Number Ranges invoices"
        type="numberRanges"
        user={user}
      />)}
      {user &&(<NumberRangeInvoice
        title="Number ranges for internal activity allocation"
        showFooter={false}
        type="numberRangesLocal"
        user={user}
      />)}
    </div>
  )
}

const NumberRangeComponent = () => {
  return (
    <HeaderBar />
  );
};

export default NumberRangeComponent;