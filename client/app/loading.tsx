"use client";

import { motion } from "framer-motion";
export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-center z[-1]  w-full h-[100vh]">
        <motion.div
          className="border-4 border-gray-400 border-t-gray-800 rounded-full w-12 h-12 animate-spin ease-in-out"
          style={{ borderTopColor: "#333" }}
        />
      </div>
    </>
  );
}
