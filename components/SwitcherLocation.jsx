"use client";
import { getLatLonList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SwitcherLocation = () => {
  const [isList, setIsList] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        const data = await getLatLonList();
        setList(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setIsList(false);
      }
    }
    getList();
  }, []);

  return (
    <div className="relative">
      <div className=" flex justify-center items-center gap-4">
        <button>
          <Image
            className="size-9"
            src="/assets/icons/location.svg"
            alt="link icon"
            height={200}
            width={200}
          />
        </button>

        <button
          onClick={() => setIsList(!isList)}
          className=" flex justify-center items-center gap-2
        "
        >
          <Image
            className="size-9 hover:bg-re"
            src="/assets/icons/switch.svg"
            alt="link icon"
            height={200}
            width={200}
          />
          <h2 className=" text-white font-semibold">Switch</h2>
        </button>
      </div>

      {isList && (
        <div className="absolute h-48 overflow-scroll left-0 top-12 z-[999] w-full mx-auto min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-2/5">
          <ul className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer">
            {list[0]?.map((location) => (
              <li key={location?.location}>
                <Link
                  href={`/${location?.location}?latitude=${location?.latitude}&longitude=${location?.longitude}`}
                  className=" text-5xl "
                >
                  {location?.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SwitcherLocation;
