import { FC, ReactNode } from "react";

export type DropdownProps = {
  children: ReactNode
}

export const Dropdown: FC<DropdownProps> = ({
  children
}) => (
  <div>
    <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
      {children}
    </div>
  </div>
)
