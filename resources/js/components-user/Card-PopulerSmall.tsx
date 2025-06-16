import React from "react";
import { ShoppingCart } from "lucide-react";
import { type PropsProdukPopuler } from '@/types';

interface CardPopulerSmallProps {
    Produk: PropsProdukPopuler[];
}

export function Card_PopulerSmall({Produk}: CardPopulerSmallProps) {
    return <>
            {Produk.map((item) =>
                    <div key={item.ID_Produk} className="bg-[#f5f5f5] container-samping w-11/12 flex flex-col md:w-9/12  gap-2 mb-3 shadow-2xl ">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
                        <div className="w-full h-[230px]">
                                {item.gambar_produk ? (
                                    <img
                                        src={item.gambar_produk.startsWith('img/produk/') ? `/${item.gambar_produk}` : `/img/produk/${item.gambar_produk}`}
                                        alt={item.nama_produk}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-4xl font-bold text-gray-400">No Image</span>
                                )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">{item.nama_produk}</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold text-gray-800 mb-4">{item.harga_produk}</p>
                                <button className="p-3 w-1/5 bg-blue-500 mt-3 text-white px-4 py-2 rounded-md flex gap-1 items-center hover:bg-blue-600 transition-colors">
                                        <ShoppingCart></ShoppingCart>Beli
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
            )}
    </>
}
