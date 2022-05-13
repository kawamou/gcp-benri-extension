import { useState } from "react";
import { ListPage } from "./ListPage";
import { EditPage } from "./EditPage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const App = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="App w-[400px]">
      <div className="mx-6">
        <Tabs>
          <div className="mb-8">
            <TabList>
              <div className={"flex flex-row"}>
                <Tab
                  className={`flex-1 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium ${
                    openTab == 1 ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                >
                  New
                </Tab>
                <Tab
                  className={`flex-1 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium ${
                    openTab == 2 ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                >
                  All
                </Tab>
              </div>
            </TabList>
          </div>
          <div className="mb-8">
            <TabPanel>
              <EditPage></EditPage>
            </TabPanel>
            <TabPanel>
              <ListPage></ListPage>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
