import AQIComponent from "@/components/AQIComponent";
import React from "react";

const AQIPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQIComponent lat={latitude} lon={longitude} />;
};

export default AQIPage;
