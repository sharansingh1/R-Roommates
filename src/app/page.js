"use client";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Header />
    </div>
  );
};

export default Page;
