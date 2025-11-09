"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function TitleFilter({ filter }: { filter: string }) {
  return (
    <AnimatePresence mode="wait">
      {" "}
      {filter === "today" || !filter ? (
        <motion.h1
          key={"today"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="col-start-1 text-center  col-end-13 mt-5 ">
          Popular Songs
        </motion.h1>
      ) : (
        <motion.h1
          key={"rated"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="col-start-1 text-center  col-end-13 mt-5 ">
          Rated Songs
        </motion.h1>
      )}
    </AnimatePresence>
  );
}
