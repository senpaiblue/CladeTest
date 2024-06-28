import React from "react";
import { Button } from "./ui/button";
import { eye, messages, messagesList, pencil, trash2, userCheck, users } from "@/app/Icons";
import RightContainerLists from "./RightContainerLists";

const RightContainer = () => {
  return (
    <div className="bg-[#FCFCFC] border border-red w-3/12 flex flex-col items-center">
      {/* inner main container*/}
      <div className="px-[24px] py-[36px] w-full ">
        <div className="flex flex-row gap-[16px] w-full pb-[16px]">
          <Button className="bg-[#FEF4F2] border border-[#DC4A2D] rounded-[8px] text-[#DC4A2D] font-medium text-[16px] px-[24px] py-[16px] gap-[8px] w-[150px] hover:bg-[#DC4A2D] hover:text-white">
            {trash2}
            Delete job
          </Button>
          <Button className="bg-[#DC4A2D] border-2 border-[#FEF4F2] rounded-[8px] text-white font-medium text-[16px] px-[24px] py-[16px] gap-[8px] w-[140px] hover:bg-[#FEF4F2] hover:text-[#DC4A2D] hover:border-[#DC4A2D]">
            {pencil}
            Edit job
          </Button>
        </div>
        <div className="flex flex-col gap-[16px] items-center justify-center w-full">
        <RightContainerLists icon={users} text="Applicants" number="400"/>
        <RightContainerLists icon={userCheck} text="Matches" number="100"/>
        <RightContainerLists icon={messagesList} text="Messages" number="147"/>
        <RightContainerLists icon={eye} text="Views" number="800"/>
        </div>
      </div>
    </div>
  );
};

export default RightContainer;
