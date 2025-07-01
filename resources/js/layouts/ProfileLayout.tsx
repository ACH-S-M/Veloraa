import React from "react";
import { NavItem } from "@/types";
type Proops = {
    children: React.ReactNode;
  };
export default function ProfileLayout({children} :Proops){
    const Navprofile:NavItem[] = [
     {title:"Profile Akun",
        href:route('profile.edit')
      },
      {title:"Alamat Pengiriman",
        href:route('profile.alamat')
      }


    ]
    return <div>
            <div className="navprofile flex w-full p-5 gap-7 items-center bg-blue-500 pt-32  ">
                    {Navprofile.map((item) => (
                        <ul>
                            <li className="hover:cursor-pointer"><a href={item.href}>{item.title}</a></li>

                        </ul>
                    ))}
            </div>
            <div>{children} </div>

    </div>
}

