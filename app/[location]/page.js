import LocationInfo from "@/components/LocationInfo";
import React from "react";

const page = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default page;
