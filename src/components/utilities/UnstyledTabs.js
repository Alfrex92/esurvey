import styled, { keyframes } from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  TabPanel as UnstyledTabPanel
} from "react-tabs";
import {
  spaceS,
  spaceM,
  spaceL,
  mainColor,
  secondaryColor
} from "../../styles/utilities/tools";

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: center;
  margin: ${spaceM} 0;
`;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled"
})`
  cursor: pointer;
  margin-right: ${spaceM};
  background-color: #fff;
  color: ${secondaryColor};
  padding: ${spaceS} ${spaceL};
  border-radius: ${spaceS};

  &:last-of-type {
    margin-right: 0;
  }

  &.selected {
    background-color: ${mainColor};
    color: white;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

const TabPanel = styled(UnstyledTabPanel).attrs({
  selectedClassName: "selected"
})`
  position: relative;
  z-index: 10;
  display: none;
  opacity: 0;
  &.selected {
    display: block;
    opacity: 1;
    animation: ${fadeIn} 1.2s ease-in;
  }
`;

Tab.tabsRole = "Tab";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, TabPanel };
