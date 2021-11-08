import React, { useRef, useEffect, useState } from "react";
import {
  TabHeaderContainer,
  StylizedTab,
  StylizedPanel,
  TabsHolder,
  TabSlider,
  inactiveTab,
} from "./styles";
export const Tab = ({ label, active, onClick }) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
    >
      {label}
    </StylizedTab>
  );
};

export const Tabs = ({ selectedTab, onChange, children }) => {
  const ContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setContainerWidth(ContainerRef.current.getBoundingClientRect().width);
  }, [ContainerRef]);

  const sliderWidth = containerWidth / children.length;
  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };
    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });
  return (
    <TabHeaderContainer ref={ContainerRef}>
      <TabsHolder>{tabs}</TabsHolder>
      <TabSlider width={sliderWidth} index={selectedTab} />
    </TabHeaderContainer>
  );
};

export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;
  return (
    <StylizedPanel hidden={hidden} active={!hidden}>
      {children}
    </StylizedPanel>
  );
};
