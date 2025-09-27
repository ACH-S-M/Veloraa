import { Head, Link, usePage } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';

type Produk = {
    id: number;
    nama_produk: string;
    harga_produk: number;
    gambar_produk?: string;
    stok: number;
};

type PageProps = {
    query: string;
    results: Produk[];
};

export default function SearchIndex() {
    const { props } = usePage<PageProps>();
    const { query, results } = props;

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex flex-col">
            <Head title={query ? `Hasil: ${query}` : 'Pencarian'} />
            <Navbaruser />
            <main className="flex-1 container mx-auto px-4 pt-16 pb-12">
                {/* Enhanced Header Section */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-red-600/10 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
                        <div className="flex items-center gap-4">
                            <div className="bg-gradient-to-br from-pink-500 to-red-500 p-3 rounded-2xl shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                                    Hasil Pencarian
                                </h1>
                                {query && (
                                    <p className="text-gray-600 mt-1">
                                        Menampilkan hasil untuk <span className="font-semibold text-pink-600">"{query}"</span>
                                    </p>
                                )}
                                {results && results.length > 0 && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        {results.length} produk ditemukan
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {(!results || results.length === 0) && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-xl opacity-30"></div>
                            <div className="relative bg-white p-8 rounded-full shadow-2xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 text-pink-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            Tidak ada hasil ditemukan
                        </h3>
                        <p className="text-gray-500 max-w-md">
                            Coba gunakan kata kunci yang berbeda atau periksa ejaan pencarian Anda
                        </p>
                    </div>
                )}

                {/* Enhanced Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {results?.map((p, index) => (
                        <Link
                            key={p.id}
                            href={`/detail/${p.id}`}
                            className="group block transform hover:scale-[1.02] transition-all duration-300"
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                        >
                            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/50 group-hover:border-pink-200">
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-red-500/0 group-hover:from-pink-500/5 group-hover:to-red-500/5 transition-all duration-300 z-10"></div>

                                {/* Product Image */}
                                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                                    {p.gambar_produk ? (
                                        <img
                                            src={`/img/produk/${p.gambar_produk}`}
                                            alt={p.nama_produk}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-12 w-12 mb-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-sm">No Image</span>
                                        </div>
                                    )}

                                    {/* Stock Badge */}
                                    <div className="absolute top-3 right-3">
                                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            p.stok > 0
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {p.stok > 0 ? `Stok: ${p.stok}` : 'Habis'}
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-pink-700 transition-colors duration-300">
                                        {p.nama_produk}
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                                                Rp {p.harga_produk.toLocaleString('id-ID')}
                                            </span>
                                        </div>

                                        <div className="bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Results Summary */}
                {results && results.length > 0 && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg">
                            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                            <span className="text-gray-600 font-medium">
                                Menampilkan {results.length} produk
                            </span>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

