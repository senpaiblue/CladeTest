import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const types = [
  { id: 1, name: "Job preview" },
  { id: 2, name: "Applicants" },
  { id: 3, name: "Match" },
  { id: 4, name: "Messages" },
];

const Options = () => {
  return (
       <Tabs
        defaultValue="Job preview"
        className=" border-b border-[#D1D1D1] w-full px-[40px]"
      >
        <TabsList className="w-full py-0 flex flex-row gap-[16px] items-center justify-start">
          <TabsTrigger className="data-[state=active]:bg-white w-[100px] data-[state=active]:border-b data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 rounded-[0px]  data-[state=active]:border-[#DC4A2D] data-[state=active]:text-[#DC4A2D]" value="Job preview" >
          Job preview
          </TabsTrigger>
          <TabsTrigger value="Applicants" className="data-[state=active]:bg-white w-[100px] data-[state=active]:border-b data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 rounded-[0px]  data-[state=active]:border-[#DC4A2D] data-[state=active]:text-[#DC4A2D]">
          Applicants
          </TabsTrigger>
          <TabsTrigger value="Payments" className="data-[state=active]:bg-white w-[100px] data-[state=active]:border-b data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 rounded-[0px]  data-[state=active]:border-[#DC4A2D] data-[state=active]:text-[#DC4A2D]">
          Match
          </TabsTrigger>
          <TabsTrigger value="Messages" className="data-[state=active]:bg-white w-[100px] data-[state=active]:border-b data-[state=active]:border-t-0 data-[state=active]:border-l-0 data-[state=active]:border-r-0 rounded-[0px]  data-[state=active]:border-[#DC4A2D] data-[state=active]:text-[#DC4A2D]">
          Messages
          </TabsTrigger>
        </TabsList>
      </Tabs>
  );
};

export default Options;
