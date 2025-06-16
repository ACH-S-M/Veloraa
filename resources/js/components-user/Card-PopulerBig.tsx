import { type BigPopuler } from '@/types';
import { ShoppingCart } from 'lucide-react';

export function Card_PopulerBig({ Produk }: BigPopuler) {
    return (
        <>
            <div className="w-11/12 overflow-hidden bg-[#f5f5f5] shadow-2xl hover:scale-105">
                <div className="w-auto bg-gradient-to-br from-blue-400 to-blue-600  text-center">
                        {Produk.gambar_produk ? (
                            <img
                                src={Produk.gambar_produk.startsWith('img/produk/') ? `/${Produk.gambar_produk}` : `/img/produk/${Produk.gambar_produk}`}
                                alt={Produk.nama_produk}
                                className="w-full h-full object-cover mx-auto"
                            />
                        ) : (
                            <span className="text-4xl font-bold text-gray-400">No Image</span>
                        )}
                    <div className="text-white">
                        <span className="text-sm"></span>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="mb-2 font-semibold text-gray-800">{Produk.nama_produk}</h3>
                    <div className="flex items-center justify-between">
                        <p className="mb-4 text-xl font-bold text-gray-800"></p>
                        <button className="mt-3 flex w-1/5 items-center gap-1 rounded-md bg-blue-500 p-3 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                            <ShoppingCart></ShoppingCart>Beli
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
