import React from "react";
import { NavBar } from "./navbar";
import { Navlogo } from "./nav-logo";
import { Navbarside } from "./Navbar-side";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { HeaderSearch } from "./headerSearch";

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
    return <div className={` ${!isMobile ? "flex w-full  bg-white p-3 gap-16 sticky top-0 z-50 items-center border-b-2 border-b-amber-800"
     : "flex justify-between bg-blue-400  p-3 fixed z-50 w-full" } `}>
        <Navlogo></Navlogo>
        <div className={` ${isMobile ? "hidden" : "min-w-9/12 flex  items-center"} p-3.5`}>
          <NavBar></NavBar>
          <HeaderSearch></HeaderSearch>
            <Navbarside></Navbarside>



        </div>
        {isMobile && <MobileSidebar />}
    </div>
}
