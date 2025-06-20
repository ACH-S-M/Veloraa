import { Head } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';

interface Produk {
    nama_produk: string;
    harga_produk: number;
    gambar_produk: string;
}

interface DetailPesanan {
    produk: Produk;
    jumlah: number;
    harga: number;
}

interface Pesanan {
    No_pesanan: number;
    tanggal_pemesanan: string;
    total_harga: number;
    status: string;
    alamat_pengiriman: string;
    kota: string;
    kode_pos: string;
    nomor_telepon: string;
    details: DetailPesanan[];
}

interface Props {
    pesanan: Pesanan | null;
}

export default function LaporanPembelian({ pesanan }: Props) {
    return (
        <div>
            <Head title="Laporan Pembelian" />
            <Navbaruser />
            <div className="min-h-screen bg-white pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="mb-8 text-3xl font-bold text-teal-800">Laporan Pembelian</h1>
                    {pesanan ? (
                        <div className="rounded-lg border p-6 shadow-sm text-black">
                            <h2 className="mb-4 text-xl font-semibold text-teal-800">Pesanan #{pesanan.No_pesanan}</h2>
                            <div className="mb-2">Tanggal: {pesanan.tanggal_pemesanan}</div>
                            <div className="mb-2">Status: {pesanan.status}</div>
                            <div className="mb-2">Alamat: {pesanan.alamat_pengiriman}, {pesanan.kota}, {pesanan.kode_pos}</div>
                            <div className="mb-2">Nomor Telepon: {pesanan.nomor_telepon}</div>
                            <div className="mt-4">
                                <h3 className="mb-2 font-semibold">Detail Produk:</h3>
                                <div className="space-y-2">
                                    {pesanan.details.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between border-b pb-2">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={item.produk.gambar_produk.startsWith('img/produk/') ? `/${item.produk.gambar_produk}` : `/img/produk/${item.produk.gambar_produk}`}
                                                    alt={item.produk.nama_produk}
                                                    className="h-12 w-12 object-cover"
                                                />
                                                <div>
                                                    <p className="font-semibold text-black">{item.produk.nama_produk}</p>
                                                    <p className="text-sm text-gray-600">Rp {item.harga.toLocaleString('id-ID')}</p>
                                                </div>
                                            </div>
                                            <span className="text-black">x {item.jumlah}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-6 border-t pt-4 flex justify-between">
                                <span className="font-semibold">Total</span>
                                <span className="font-bold text-teal-800">Rp {pesanan.total_harga.toLocaleString('id-ID')}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">Tidak ada pesanan ditemukan.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
