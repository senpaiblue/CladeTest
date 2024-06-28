import React from "react";

const Requirements = ({heading,requirement}:{heading:string,requirement:string}) => {
  return (
    <div className="flex flex-col gap-[8px] w-[170px]">
      <h2 className="text-[#6E6D6D] font-regular text-[14px]">
        {heading}
      </h2>
      <h3 className="text-[#3D3D3D] font-semibold text-[16px]">{requirement}</h3>
    </div>
  );
};

export default Requirements;
