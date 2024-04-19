"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(0);

  const handleInputClick = (itemNum: number) => {
    if (active === itemNum) {
      setActive(0);
    } else {
      setActive(itemNum);
    }
  };

  return (
    <header className="mt-[17px] w-[92%]  m-auto max-w-[1920px] md:mt-[29px] 3xl:w-[75%] 3xl:mt-[60px]">
      <nav className="flex justify-between items-center">
        <div>
          <Image
            className="w-[33px] h-[33px] 3xl:hidden"
            src="/MobileHeader1Webdoors.svg"
            alt="HeaderFirst"
            width={33}
            height={33}
          />
          <nav className="hidden 3xl:flex text-[18px] leading-[22.5px] font-bold gap-[50px]">
            <a
              style={{
                color: active === 1 ? "white" : "",
                borderBottom: active === 1 ? "2px solid white" : "",
              }}
              onClick={() => handleInputClick(1)}
              href="#"
            >
              Services
            </a>
            <a
              style={{
                color: active === 2 ? "white" : "",
                borderBottom: active === 2 ? "2px solid white" : "",
              }}
              onClick={() => handleInputClick(2)}
              href="#"
            >
              Projects
            </a>
            <a
              style={{
                color: active === 3 ? "white" : "",
                borderBottom: active === 3 ? "2px solid white" : "",
              }}
              onClick={() => handleInputClick(3)}
              href="#"
            >
              About
            </a>
          </nav>
        </div>
        <div className="3xl:-translate-x-[90px]">
          <Image
            className="w-[24.93px] h-[37px] md:w-[31px] md:h-[46px] 3xl:w-[39px] 3xl:h-[59px]"
            src="/MobileHeader2Webdoors.svg"
            alt="headerSecond"
            width={24.93}
            height={37}
          />
        </div>
        <div className="3xl:flex 3xl:items-center 3xl:gap-[50px]">
          <Image
            className="hidden 3xl:flex 3xl:w-[50px] 3xl:h-[50px]"
            src="/desktopheaderblackmember.svg"
            alt="blackmember"
            width={33}
            height={33}
          />
          <Image
            className="w-[37px] h-[19px] 3xl:w-[46px] 3xl:h-[25px]"
            src="/MobileHeader3Webdoors.svg"
            alt="headerThird"
            width={37}
            height={19}
          />
        </div>
      </nav>
    </header>
  );
}
