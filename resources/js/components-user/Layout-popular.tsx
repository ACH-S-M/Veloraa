import React from "react";

import { type  TypeBarangPopuler} from '@/types';
import { Card_PopulerBig } from "./Card-PopulerBig";
import { Card_PopulerSmall } from "./Card-PopulerSmall";


export  function Popular({Barang}:TypeBarangPopuler){
    const barangBesar = Barang[0];              // paling laris
    const barangKecil = Barang.slice(1, 3);     // dua berikutnya
    return <div>
       <section className="container mx-auto w-full  py-8  mb-0">
         <h2 className="text-2xl font-bold text-gray-800 mb-6 ps-36">Produk Terpopuler</h2>
         <div className="grid mx-auto grid-cols-1 md:grid-cols-2  gap-6 w-full md:ps-36 ">
            <Card_PopulerBig Barang={barangBesar}></Card_PopulerBig>
             <div className="other-popular flex flex-col">
                    <Card_PopulerSmall Barang={barangKecil}></Card_PopulerSmall>
             </div>
         </div>
    </section>
    </div>
}
