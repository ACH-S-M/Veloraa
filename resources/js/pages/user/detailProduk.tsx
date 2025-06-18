import { Head, router, usePage } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';
import { Button } from '@/components/ui/button';
import { PageProps,Produk } from '@/types';


export default function DetailProduk({
    ID_Produk,
    nama_produk,
    harga_produk,
    gambar_produk,
    deskripsi_produk
}: Produk) {

    const { auth} = usePage<PageProps>().props;

    const handleAddToCart = () => {
        router.post(route('keranjang.add', ID_Produk), {}, {
            preserveScroll: true,
            onSuccess: () => {
                if (auth.user) {
                    alert('Berhasil Menambahkan Ke keranjang');
                } else {
                    alert('Gagal, silahkan Login terlebih Dahulu');
                }
            }
        });
    };

    return (
        <>
            <Head title="Detail" />
            <Navbaruser />

            <div className="w-full bg-white p-4 pt-36">
                {/* Detail Produk */}
                <div className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2">
                    {/* Gambar Produk */}
                    <img
                        src={gambar_produk.startsWith('img/produk/') ? `/${gambar_produk}` : `/img/produk/${gambar_produk}`}
                        alt={nama_produk}
                        className="w-[500px] p-2.5"
                    />

                    {/* Info Produk */}
                    <div className="border-l-2 w-full p-4">
                        <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">{nama_produk}</h1>
                        <p className="mt-2 text-2xl font-bold text-black">Rp {harga_produk.toLocaleString('id-ID')}</p>
                        <p className="mt-2 text-sm text-gray-500">Kategori: Minuman Botol</p>

                        <div className="mt-6">
                            <h2 className="mb-1 font-semibold text-blue-600">Deskripsi Produk</h2>
                            <p className="text-gray-700">{deskripsi_produk}</p>
                        </div>

                        <Button
                            onClick={handleAddToCart}
                            className="mt-6 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            🛒 Masukkan Keranjang
                        </Button>
                    </div>
                </div>

            </div>
        </>
    );
}
