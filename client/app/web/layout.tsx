"use client";

import React from "react";

import SearchWeb from "@/components/webs/Search";
import SidebarWeb from "@/components/webs/Sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <section className="flex flex-col w-full gap-8 h-[100vh]">
        <div className="w-full">
          <SearchWeb />
        </div>
        <div className="flex flex-col md:flex-col lg-flex-row gap-8 overflow-auto">
          <div className="lg:w-[25%]">
            {" "}
            <SidebarWeb />
          </div>
          <div className="overflow-auto lg:w-[75%]"> {children}</div>
        </div>
      </section>
    </>
  );
}
