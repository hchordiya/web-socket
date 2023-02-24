import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopDashboard from "./topDashboard.component";

const TopDashboardContainer = () => {
    const navigate=useNavigate()
    const [tabValue, setTabValue] = useState<string>("/home");
    const onChange = (
      event: React.SyntheticEvent<Element, Event>,
      value: string
    ) => {
      setTabValue(value);
      navigate(value)
    };
  return <TopDashboard onChange={onChange} tabValue={tabValue} />;
};

export default TopDashboardContainer;
