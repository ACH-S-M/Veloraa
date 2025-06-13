import React from "react";
import { ShoppingCart } from "lucide-react";
import { type TypeBarangPopuler} from '@/types';
export function Card_PopulerSmall({Barang}:TypeBarangPopuler){
    return <>
            {Barang.map((item) =>
                    <div className="container-samping w-11/12 flex flex-col md:w-9/12  gap-2 mb-3 ">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden ">
                        <div className="bg-orange-500 p-4 text-center">
                            <div className="flex justify-center space-x-2">
                                <div className="w-8 h-16 bg-orange-600 rounded"></div>
                                <div className="w-8 h-16 bg-orange-600 rounded"></div>
                                <div className="w-8 h-16 bg-orange-600 rounded"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">{item.nama_produk}</h3>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold text-gray-800 mb-4">{item.harga}</p>
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
