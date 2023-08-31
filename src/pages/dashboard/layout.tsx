import { ReactNode, FC, useState, useEffect } from "react";
import AppWrapper from "./components/app-wrapper";
import Sidebar from "./components/sidebar";

type Props = {
  children: ReactNode;
  lang?: string
}

const Layout: FC<Props> = ({
  children,
}) => {
  const [showSidebar, updateShowSidebar] = useState(true);
  const deviceWidth = window.innerWidth;

  useEffect(() => {
    if (deviceWidth < 560) updateShowSidebar(false)
  }, [deviceWidth])

  return (
    <>
      {showSidebar && (
        <Sidebar 
          closeSidebar={() => updateShowSidebar(false)}
        />
      )}
      <AppWrapper toggleSidebar={() => updateShowSidebar(!showSidebar)} />
      <main className="main-content w-full pb-8">
        {children}
      </main>
    </>
  );
}

export default Layout;