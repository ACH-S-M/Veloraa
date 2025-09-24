import React from "react";
import { NavBar } from "./navbar";
import { Navlogo } from "./nav-logo";
import { Navaccount } from "./nav-account";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./mobile-sidebar";

export function Navbaruser(){
    const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // cek saat pertama kali render
        window.addEventListener("resize", handleResize); // update kalau di-resize

        return () => window.removeEventListener("resize", handleResize); // cleanup
      }, []);
    return <div className={` ${!isMobile ? "flex w-full  bg-blue-400 p-3 justify-between sticky top-0 z-50 items-center"
     : "flex justify-between bg-blue-400  p-3 fixed z-50 w-full" } `}>
        <Navlogo></Navlogo>
        <div className={` ${isMobile ? "hidden" : "w-1/2 flex  items-center justify-end"} p-3.5`}>
          <NavBar></NavBar>
          <Navaccount></Navaccount>
        </div>
        {isMobile && <MobileSidebar />}
    </div>
}
