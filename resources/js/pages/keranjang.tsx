import { useState } from "react";
import React from "react";
import {Navbaruser} from '@/components-user/navbar-user';
export default function Keranjang(){
    const [count,counter] = useState(0);
    const harga = 50000;
    const total = harga * count
    return <>
        <Navbaruser></Navbaruser>
        <div className="content md:pt-24">
                <h1>Keranjang</h1>
                <h1>harga barang {harga}</h1>
                <h1>total barang : {count}</h1>
                <div className="btn flex gap-3">
                    <button onClick={()=> counter(count+1)}>tambah barang</button>
                    <button onClick={()=> counter(count-1)}>kurang barang</button>
                </div>
                <h1>total harga : {total}</h1>
        </div>
    </>
}
