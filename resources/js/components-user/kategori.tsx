import React from "react";
import { ButtonKategori }  from "@/components/ui/buttonKategori";
import { TypeBarangKategori } from "@/types";
import { Produk } from "./Card-Produk";


export function Kategori({IKategori}:TypeBarangKategori)   {
     const KategoriNav = [
            "Semua",
            "Soda",
            "Minuman Kaleng",
            "Air Mineral",
            "Susu"

    ]
    return (

        <>
            <div className="container px-4 md:ps-38 md:pt-2">
                {/* Judul */}
                <h1 className="mb-4 text-3xl font-bold text-black">Kategori</h1>

                {/* Filter Button */}
                <div className="mb-8 flex flex-wrap gap-3 ">
                      {KategoriNav.map((item, index) =>
                            <ButtonKategori key={index} title={item}></ButtonKategori>
                    )}
                </div>

                {/* Grid Produk */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    <Produk IKategori={IKategori}></Produk>
                </div>
            </div>
        </>
    );
}
