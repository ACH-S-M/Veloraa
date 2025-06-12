import React from "react";
import { ShoppingCart } from "lucide-react";

export function Card_PopulerBig(){
    return <>
        <div className="bg-[#f5f5f5] shadow-2xl overflow-hidden hover:scale-105 w-11/12  ">
                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 text-center w-full ">
                            <div className="bg-blue-500 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-white text-4xl font-bold">F</span>
                            </div>
                            <div className="text-white">
                                <span className="text-sm">Splash Effect</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-2">

                            </h3>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold text-gray-800 mb-4"></p>
                                <button className="p-3 w-1/5 bg-blue-500 mt-3 text-white px-4 py-2 rounded-md flex gap-1 items-center hover:bg-blue-600 transition-colors">
                                    <ShoppingCart></ShoppingCart>Beli
                                </button>
                            </div>
                        </div>
                    </div>
    </>
}
