import { mapPin, wallet } from "@/app/Icons";
import React from "react";
import HeaderLables from "./HeaderLables";
import Skillinfo from "./Skillinfo";
import Requirements from "./Requirements";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <section className="bg-white border border-red w-10/12  h-full">
      {/*header on inner container */}
      <div className="flex flex-col py-[36px] bg-white border-b border-[#E7E7E7] px-[40px]">
        <div className="flex flex-row items-center gap-4 pb-[24px]">
          <h1 className="text-[#3D3D3D] font-semibold text-[36px]">
            Senior Product Designer
          </h1>
          <div className="flex flex-row gap-4 ">
            <h3 className="text-[#888888] font-medium text-[14px] flex flex-row items-center gap-2">
              {" "}
              <div className="w-2 h-2 rounded-full bg-[#D1D1D1]" />
              posted 2 days ago
            </h3>
            <div className="text-[#067647] font-medium text-[12px] flex flex-row items-center gap-2 border border-[#ABEFC6] bg-[#ECFDF3] max-w-fit px-6 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#17B26A]" />
              Open
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[16px] items-center">
          <HeaderLables icon={mapPin} text="Delaware, USA" />
          <div className="w-2 h-2 rounded-full bg-[#D1D1D1]" />
          <HeaderLables icon={wallet} text="$300k-$400k" />
        </div>
      </div>
      {/* skills required container */}
      <div className="flex flex-row gap-[64px] px-[40px] py-[24px] border-b border-[#E7E7E7]">
        {/* skill required*/}
        <div className="flex flex-col gap-[8px] w-[170px]">
          <h2 className="text-[#6E6D6D] font-regular text-[14px]">
            Skills Required
          </h2>
          <div className="flex flex-col gap-[8px]">
            <Skillinfo image="./figma.svg" text="Figma" />
            <Skillinfo image="./Adobe.svg" text="Adobe Illustrator" />
            <Skillinfo image="./XD.svg" text="Adobe XD" />
          </div>
        </div>
        {/* requirements*/}
        <Requirements heading="Preferred Language" requirement="English" />
        <Requirements heading="Type" requirement="Full time" />
        <Requirements
          heading="Years of Experience"
          requirement="3+ Years of Experience"
        />
      </div>
      {/* About job*/}

      <div className="px-[40px] py-[24px]">
        <h1 className="text-[14px] font-medium text-[#6E6D6D] pb-[8px]">About the job</h1>
        <p className="text-[16px] font-medium text-[#3D3D3D] pb-[4px]">
          1. Handle the UI/UX research design
          <br />
          2. Work on researching on latest web applications designs & trends
          <br />
          3. Work on conceptualizing and visualizing
          <br />
          4. Work on creating graphics content and other graphic related works
          <br />
        </p>
        <h3 className="flex flex-row items-center text-[16px] font-medium text-[#3D3D3D] ">Benefits:</h3>
        <p className="flex flex-row items-center text-[16px] font-medium text-[#3D3D3D] ">
          <p className="w-2 h-2 rounded-full bg-[#3D3D3D]/[0.8] mr-4" />
          Health insurance <br />
        </p>
        <p className="flex flex-row items-center text-[16px] font-medium text-[#3D3D3D] ">
          <p className="w-2 h-2 rounded-full bg-[#3D3D3D]/[0.8] mr-4" />
          Health insurance <br />
        </p>
        
        <h3>Supplemental pay types:</h3>
        <p className="flex flex-row items-center text-[16px] font-medium text-[#3D3D3D] ">
          <p className="w-2 h-2 rounded-full bg-[#3D3D3D]/[0.8] mr-4" />
          Performance bonus <br />
        </p>
        <p className="flex flex-row items-center text-[16px] font-medium text-[#3D3D3D] ">
          <p className="w-2 h-2 rounded-full bg-[#3D3D3D]/[0.8] mr-4" />
          Yearly bonus <br />
        </p>
        <p className="text-[16px] font-medium text-[#3D3D3D]  ">
        Work Location: In person
        </p>
      </div>
      <Footer/>
    </section>
  );
};

export default MainContainer;
