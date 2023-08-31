import { ReactNode, FC } from "react";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar";

type Props = {
  children: ReactNode;
  lang?: string
}

const Layout: FC<Props> = ({
  children,
}) => {
  return (
    <>
      <Sidebar />
      <AppWrapper />
      <main className="main-content w-full pb-8">
        {children}
      </main>
    </>
  );
}

export default Layout;