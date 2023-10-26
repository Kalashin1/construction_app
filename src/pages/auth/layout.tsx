import { ReactNode } from "react";
import { AuthHeader, AuthImage } from "./components";
import ToastComponent from "../dashboard/components/notification/toast";

type Props = {
  children: ReactNode
}

const Layout = ({
  children
}: Props) => {
  return (
    <>
    <ToastComponent />
      <AuthHeader />
      <div className="flex flex-row w-screen">
        <AuthImage />
        <main
          className="flex w-full flex-col h-screen items-center bg-white dark:bg-navy-700"
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;