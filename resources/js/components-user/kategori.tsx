import React from "react";
import { Button } from "@/components/ui/button";

export function Kategori(){
    return <div className="ps-8 md:ps-36">
        <h1 className="text-3xl text-black mb-3 font-bold">Kategori</h1>
        <div className="kategori flex">
            <Button className="p-2 bg-yellow-300">Semua</Button>
        </div>
    </div>
}
