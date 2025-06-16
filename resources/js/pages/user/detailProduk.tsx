import { Head } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';
export default function DetailProduk({
    nama_produk,
    harga_produk,
    gambar_produk,
    deskripsi_produk,
    stok,
    barang_terjual,
}: {
    nama_produk: string;
    harga_produk: number;
    gambar_produk: string;
    deskripsi_produk: string;
    stok: number;
    barang_terjual: number;
}) {
    return (
        <>
            <Head title="Detail"></Head>
            <Navbaruser></Navbaruser>
            <div className="w-full bg-white p-4 md:pt-36">
                {/* Detail Produk */}
                <div className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2 ">
                    {/* Gambar Produk */}
                    <img src={gambar_produk.startsWith('img/produk/') ? `/${gambar_produk}` : `/img/produk/${gambar_produk}`} alt={nama_produk} />

                    {/* Info Produk */}
                    <div className='border-l-2 w-full p-4'>
                        <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">{nama_produk}</h1>
                        <p className="mt-2 text-2xl font-bold text-black">{harga_produk}</p>
                        <p className="mt-2 text-sm text-gray-500">Kategori: Minuman Kaleng</p>

                        <div className="mt-6">
                            <h2 className="mb-1 font-semibold text-blue-600">Deskripsi Produk</h2>
                            <p className="text-gray-700">{deskripsi_produk}</p>
                        </div>

                        <button className="mt-6 flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2 text-white shadow hover:bg-blue-600">
                            🛒 Masukkan Keranjang
                        </button>
                    </div>
                </div>

                {/* Barang Lainnya */}
                <div className="mt-12">
                    <h3 className="mb-6 text-xl font-semibold">Barang Lainnya</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {/* Card Produk */}
                        <div className="overflow-hidden rounded-xl bg-white shadow-md">
                            <img src="/img/nescafe.png" className="h-40 w-full object-cover" alt="Nescafe" />
                            <div className="p-4">
                                <p className="mb-2 text-sm text-gray-700">Nescafe Ice Black 220ml perkarton isi 24pcs</p>
                                <p className="font-semibold text-blue-700">Rp. 157.150</p>
                                <button className="mt-2 rounded-md bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600">🛒 Beli</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="overflow-hidden rounded-xl bg-white shadow-md">
                            <img src="/img/strawberry-milk.png" className="h-40 w-full object-cover" alt="Ultra Milk" />
                            <div className="p-4">
                                <p className="mb-2 text-sm text-gray-700">Susu UHT varian strawberry 250ml perkarton isi 24pcs</p>
                                <p className="font-semibold text-blue-700">Rp. 157.150</p>
                                <button className="mt-2 rounded-md bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600">🛒 Beli</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="overflow-hidden rounded-xl bg-white shadow-md">
                            <img src="/img/sprite.png" className="h-40 w-full object-cover" alt="Sprite" />
                            <div className="p-4">
                                <p className="mb-2 text-sm text-gray-700">Sprite kaleng varian lemonade 330ml perisi isi 24 pcs</p>
                                <p className="font-semibold text-blue-700">Rp. 109.000</p>
                                <button className="mt-2 rounded-md bg-blue-500 px-4 py-1 text-sm text-white hover:bg-blue-600">🛒 Beli</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
