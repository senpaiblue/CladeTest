"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { bellDot, briefcase, chevronDown, handCoins, messages } from "@/app/Icons";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-[40px] py-[18px] border-b border-[#E7E7E7]">
      <div>
        <Image src="/LogoMain.svg" alt="atlassian" width={100} height={62}/>
      </div>
      <Tabs
        defaultValue="jobs"
        className="w-[400px] border border-[#D1D1D1] rounded-[36px] items "
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="jobs" className="gap-2">
            {briefcase}Jobs
          </TabsTrigger>
          <TabsTrigger value="Messages" className="gap-2">
            {messages}Messages
          </TabsTrigger>
          <TabsTrigger value="Payments" className="gap-2">
            {handCoins}Payments
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-row items-center justify-center gap-6">
        {bellDot}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-row items-center justify-center">
            <Image
              src="/AtlassianLogo.png"
              alt="Profile"
              width={40}
              height={40}
            />
            {chevronDown}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
