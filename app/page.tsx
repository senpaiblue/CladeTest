
import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import Options from "@/components/Options";
import RightContainer from "@/components/RightContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Options/>
      <div className="flex flex-row">
      <MainContainer/>
      <RightContainer/>
      </div>
    </main>
  );
}
