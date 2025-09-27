import { type TypeProdukPopuler } from '@/types';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

export function Card_PopulerSmall({ Produk }: TypeProdukPopuler) {
    return (
        <>
            {Produk.map((item) => (
                <Link href={`/detail/${item.ID_Produk}`}>
                    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-md">
                        {/* Product Image */}
                        {item.gambar_produk ? (
                            <img 
                                src={item.gambar_produk.startsWith('img/produk/') ? `/${item.gambar_produk}` : `/img/produk/${item.gambar_produk}`}
                                alt={item.nama_produk}
                                className="h-80 w-full object-cover" 
                            />
                        ) : (
                            <div className="h-80 w-full bg-gray-200 flex items-center justify-center">
                                <span className="text-2xl font-bold text-gray-400">No Image</span>
                            </div>
                        )}

                        {/* Product Details */}
                        <div className="space-y-3 p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{item.nama_produk}</h2>

                            {/* Price */}
                            <div className="flex items-center gap-2">
                                <p className="text-xl font-bold text-gray-900">Rp {item.harga_produk.toLocaleString('id-ID')}</p>
                            </div>

                            {/* Stock */}
                            <p className="text-sm text-gray-500">Stock: {item.stok} pcs</p>

                            {/* Button */}
                            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600">
                                <ShoppingCart size={18} /> Tambah Ke Keranjang
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
