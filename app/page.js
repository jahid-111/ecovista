import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense
      fallback={
        <h3
          className=" text-5xl h-screen text-red-500 font-semibold
         bg-gray-200 p-20"
        >
          Loading...
        </h3>
      }
    >
      <LocationDetector />
    </Suspense>
  );
}
