import { ReactNode } from "react";
import { AuthHeader, AuthImage } from "./components";

type Props = {
  children: ReactNode
}

const Layout = ({
  children
}: Props) => {
  return (
    <>
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