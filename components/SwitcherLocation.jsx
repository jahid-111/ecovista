"use client";
import { getLatLonList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SwitcherLocation = () => {
  const [isList, setIsList] = useState(false);
  const [list, setList] = useState([]);
  console.log(list[0]);
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
      <button>
        <Image
          onClick={() => setIsList(!isList)}
          className="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
          height={200}
          width={200}
        />
      </button>

      {isList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {list[0].map((location) => (
              <li key={location?.location}>
                <Link
                  href={`/${location?.location}?latitude=${location?.latitude}&longitude=${location?.longitude}`}
                  className=" bg-green-300 hover:bg-red-200"
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
