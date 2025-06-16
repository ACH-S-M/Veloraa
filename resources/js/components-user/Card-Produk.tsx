import { TypeBarangKategori } from '@/types';
import { Link } from '@inertiajs/react';

export function Produk({ IKategori }: TypeBarangKategori) {
    return (
        <>
            {/* Card Produk */}

            {IKategori.map((item) => (
                <Link
                    key={item.ID_Produk}
                    href={`/detail/${item.ID_Produk}`}
                    className="block overflow-hidden rounded-xl bg-gray-100 shadow transition-shadow hover:shadow-md" >
                    <div className="overflow-hidden rounded-xl bg-gray-100 shadow">
                        {item.gambar_produk ? (
                                <img
                                    src={item.gambar_produk.startsWith('img/produk/') ? `/${item.gambar_produk}` : `/img/produk/${item.gambar_produk}`}
                                    alt={item.nama_produk}
                                    className="w-full max-h-[200px] h-full object-cover"
                                />
                            ) : (
                                <span className="text-4xl font-bold text-gray-400">No Image</span>
                            )}
                        <div className="p-4">
                            <p className="mb-2 text-xl text-black">{item.nama_produk}</p>
                            <p className="mb-4 font-semibold text-teal-700">{item.harga_produk}</p>
                            <button className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5m1.4-5L6 6m1 7h10m0 0l1.4 5M9 21h6"
                                    />
                                </svg>
                                Beli
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}
