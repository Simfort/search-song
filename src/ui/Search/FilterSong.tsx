"use client";
import { motion } from "framer-motion";
import { redirect, useSearchParams } from "next/navigation";

export default function FilterSong() {
  const search = useSearchParams();

  return (
    <motion.div
      layout
      className="bg-(--color-accent) h-[60px] rounded-full col-start-6 col flex justify-between col-end-8 mt-6 ">
      <button
        onClick={() => {
          redirect("?filter=popular");
        }}
        className="w-1/1 rounded-full cursor-pointer  relative">
        <span className="z-20 relative"> Popular</span>
        {search.get("filter") != "rate" && (
          <motion.div
            layoutId="ball"
            transition={{ type: "spring" }}
            className="absolute  z-10 h-1/1 w-1/1 bg-background top-0 rounded-full"></motion.div>
        )}
      </button>

      <button
        onClick={() => {
          redirect("?filter=rate");
        }}
        className="w-1/1 cursor-pointer rounded-full relative">
        <span className="z-20 relative">Rated</span>
        {search.get("filter") == "rate" && (
          <motion.div
            transition={{ type: "spring" }}
            layoutId="ball"
            className="absolute z-10 h-1/1 w-1/1 bg-background top-0 rounded-full"></motion.div>
        )}
      </button>
    </motion.div>
  );
}
