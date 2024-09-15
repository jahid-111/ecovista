"use client";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(null);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, router, searchParams]);

  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-100 text-gray-600">
      {loading && (
        <>
          <Image
            src="/assets/icons/sun.svg"
            alt="Loading..."
            height={500}
            width={500}
            className="border rounded-md my-4"
          ></Image>

          <p className="  text-6xl font-semibold text-red-600 text-center">
            Detecting... Location
          </p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
