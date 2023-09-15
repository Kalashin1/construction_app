import { useState } from "react";

const Documents = () => {
  const [currentTab, updateCurrentTab] = useState(1)
  return (
    <div>
      <h3 className="my-6 text-lg font-bold">Documents</h3>

      <div className="bg-white rounded-md w-full shadow-md p-8 dark:border-navy-700 dark:bg-navy-800 dark:text-white">
        <div className="grid grid-cols-2 md:grid-cols-5 justify-between">
          <div className="cursor-pointer my-4 md:my-0 mr-2 md:mr-0" onClick={() => updateCurrentTab(1)}>files (1)</div>
          <div className="cursor-pointer my-4 md:my-0 mr-2 md:mr-0" onClick={() => updateCurrentTab(2)}>Images (89)</div>
          <div className="cursor-pointer my-4 md:my-0 mr-2 md:mr-0 hidden md:block" onClick={() => updateCurrentTab(3)}>360° images (7)</div>
          <div className="cursor-pointer my-4 md:my-0 mr-2 md:mr-0" onClick={() => updateCurrentTab(4)}>Upload</div>
          <div className="cursor-pointer my-4 md:my-0 mr-2 md:mr-0" onClick={() => updateCurrentTab(5)}>Print</div>
        </div>
        <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>

        <div>
          {currentTab === 1 ? (
            <div id="pane-1" className="p-8 border">
              Files
            </div>
          ) :
            currentTab == 2 ? (
              <div id="pane-2" className="p-8 border">
                Images
              </div>
            ) :
              currentTab == 3 ? (
                <div id="pane-3" className="p-8 border">
                  Images 360
                </div>
              ) :
                currentTab == 4 ? (
                  <div id="pane-4" className="p-8 border">
                    upload
                  </div>
                ) :
                  currentTab == 5 ? (
                    <div id="pane-5" className="p-8 border">
                      Print
                    </div>
                  )
                  :(<></>)
          }
        </div>
      </div>
    </div>
  );
};

export default Documents;