import { type TypeProdukPopuler } from '@/types';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';


export function Card_PopulerSmall({ Produk }: TypeProdukPopuler) {
    return (
        <>
            {Produk.map((item) => (
                <Link href={`/detail/${item.ID_Produk}`}>
                    <div key={item.ID_Produk} className="container-samping mb-3 flex w-11/12 flex-col gap-2 bg-[#f5f5f5] shadow-2xl md:w-9/12">
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            <div className="h-[230px] w-full">
                                {item.gambar_produk ? (
                                    <img
                                        src={
                                            item.gambar_produk.startsWith('img/produk/')
                                                ? `/${item.gambar_produk}`
                                                : `/img/produk/${item.gambar_produk}`
                                        }
                                        alt={item.nama_produk}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-4xl font-bold text-gray-400">No Image</span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="mb-2 font-semibold text-gray-800">{item.nama_produk}</h3>
                                <div className="flex items-center justify-between">
                                    <p className="mb-4 text-xl font-bold text-gray-800">{item.harga_produk}</p>
                                    <button className="mt-3 flex w-1/5 items-center gap-1 rounded-md bg-blue-500 p-3 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                                        <ShoppingCart></ShoppingCart>Beli
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
