import TemperatureComponent from "@/components/TemperatureComponent";
import React from "react";

const TemperaturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <TemperatureComponent lat={latitude} lon={longitude} />;
};

export default TemperaturePage;
