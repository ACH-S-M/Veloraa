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
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'selesai':
            case 'completed':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'dibatalkan':
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'diproses':
            case 'processing':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div>
            <Head title="Laporan Pembelian" />
            <Navbaruser />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    {/* Header Section */}
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Laporan Pembelian
                        </h1>
                        <p className="text-gray-600">Detail informasi pesanan Anda</p>
                    </div>

                    {pesanan ? (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Order Header */}
                            <div className="bg-gradient-to-r bg-blue-400 p-6 text-white">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">
                                            Pesanan #{pesanan.No_pesanan}
                                        </h2>
                                        <p className="text-teal-100">
                                            {new Date(pesanan.tanggal_pemesanan).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(pesanan.status)}`}>
                                            {pesanan.status}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Shipping Information */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Informasi Pengiriman
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Alamat Pengiriman</p>
                                            <p className="text-gray-800 font-medium">
                                                {pesanan.alamat_pengiriman}
                                            </p>
                                            <p className="text-gray-700">
                                                {pesanan.kota}, {pesanan.kode_pos}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Nomor Telepon</p>
                                            <p className="text-gray-800 font-medium flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                {pesanan.nomor_telepon}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Detail Produk
                                    </h3>
                                    <div className="space-y-4">
                                        {pesanan.details.map((item, idx) => (
                                            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={item.produk.gambar_produk.startsWith('img/produk/') ? `/${item.produk.gambar_produk}` : `/img/produk/${item.produk.gambar_produk}`}
                                                            alt={item.produk.nama_produk}
                                                            className="h-16 w-16 object-cover rounded-lg border border-gray-200"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-lg font-medium text-gray-900 truncate">
                                                            {item.produk.nama_produk}
                                                        </h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Harga satuan: Rp {item.harga.toLocaleString('id-ID')}
                                                        </p>
                                                    </div>
                                                    <div className="flex-shrink-0 text-right">
                                                        <div className="bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
                                                            <p className="text-sm font-medium text-teal-800">
                                                                Qty: {item.jumlah}
                                                            </p>
                                                        </div>
                                                        <p className="text-lg font-semibold text-gray-900 mt-2">
                                                            Rp {(item.harga * item.jumlah).toLocaleString('id-ID')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Total Section */}
                                <div className="border-t border-gray-200 pt-6">
                                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-800">Total Pembayaran</h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    {pesanan.details.length} item{pesanan.details.length > 1 ? 's' : ''}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-bold text-teal-800">
                                                    Rp {pesanan.total_harga.toLocaleString('id-ID')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                            <div className="max-w-md mx-auto">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Tidak Ada Pesanan
                                </h3>
                                <p className="text-gray-600">
                                    Pesanan yang Anda cari tidak ditemukan atau belum ada pesanan yang tersedia.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
