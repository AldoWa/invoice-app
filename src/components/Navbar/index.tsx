import { useContext } from "react";

import Image from "next/image";

import Avatar from "@/assets/image-avatar.jpg";
import Logo from "@/assets/logo.svg";
import Icon from "@/assets/icon-sun.svg";
import Moon from "@/assets/icon-moon.svg";

import { ThemeContext } from "@/context/themeContext";

function LogoComponent() {
  return (
    <div className="bg-invoice-01 lg:min-h-[103px] lg:w-full w-20 rounded-r-[20px] flex items-center justify-center relative overflow-hidden">
      <Image src={Logo} alt="Logo" width={31} height={29} className="z-10" />
      <div className="bg-invoice-02 absolute -bottom-16 lg:-bottom-12 rounded-l-[20px] min-h-[103px] w-full z-0"></div>
    </div>
  );
}

function Themes() {
  const { changeTheme, theme } = useContext(ThemeContext);

  const handleTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light")
  };

  return ( 
    <div className="flex lg:justify-center items-center lg:max-h-full">
      <Image
        src={theme === "light" ? Icon : Moon}
        alt="Icon"
        width={28}
        height={28}
        onClick={handleTheme}
        className="cursor-pointer"
      ></Image>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className=" bg-invoice-03 lg:max-w-[103px] flex lg:flex-col justify-between lg:rounded-r-[20px] lg:h-screen lg:w-28 z-50 lg:relative fixed w-full">
      <LogoComponent />
      <div className="flex lg:block gap-8">
        <Themes />
        <div className="border border-[#494E6E] lg:mt-8 lg:mb-6"></div>
        <Image
          src={Avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full mx-auto my-4"
        />
      </div>
    </nav>
  );
}
