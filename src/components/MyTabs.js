import React from "react";
import { Tabs } from "react-tabs";
import { Tab, TabList, TabPanel } from "./utilities/UnstyledTabs";
import Players from "./Players";
import Btn from "./layout/Btn";
import VoteDescription from "./layout/VoteDescription";

//  se puede perder estado local en rerender

const MyTabs = () => (
  <div className="container">
    <Tabs>
      <TabList>
        <Tab>
          <Btn text="Japan" />
        </Tab>
        <Tab>
          <Btn text="Taiwan" />
        </Tab>
      </TabList>
      <TabPanel>
        <VoteDescription country="jp" countryName="Japan" />
        <Players country="jp" />
      </TabPanel>
      <TabPanel>
        <VoteDescription country="zh" countryName="Taiwan" />
        <Players country="zh" />
      </TabPanel>
    </Tabs>
  </div>
);

export default MyTabs;
