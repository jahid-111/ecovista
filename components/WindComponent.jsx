import React from "react";
import Card from "./Card";
import Image from "next/image";
import { getWindData } from "@/lib/weather-info";

const WindComponent = async ({ lat, lon }) => {
  const { speed, deg } = await getWindData(lat, lon);

  return (
    <Card>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          width={100}
          height={100}
        />
        <h3 className="feature-title">{speed} m/s</h3>
        <span className="feature-name">{deg} degrees </span>
      </div>
    </Card>
  );
};

export default WindComponent;
