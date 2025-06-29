import { PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';
import { useState } from 'react';

interface Produk {
    ID_Produk: number;
    nama_produk: string;
    harga_produk: number;
    gambar_produk: string;
}

interface CartItem {
    produk_id: number;
    pelanggan_id: number;
    produk: Produk;
    quantity: number;
}

interface Props extends PageProps {
    cartItems: CartItem[];
    alamat: string;
    no_telp: string;
    kota:string;
    kode_pos:string;
}

export default function Index({ cartItems, alamat, no_telp,kota,kode_pos }: Props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shippingDetails, setShippingDetails] = useState({
        alamat: alamat || '',
        kota: kota || '',
        kode_pos: kode_pos || '',
        nomor_telepon: no_telp || '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setShippingDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('Submitting data:', shippingDetails); // Debug log

        router.post(route('checkout.process'), {
            ...shippingDetails
        }, {
            onSuccess: () => {
                alert('Berhasil Membuat Pesanan')
                setIsSubmitting(false);
                router.visit(route('user.laporanPembelian'));
            },
            onError: (errors) => {
                console.error('Submission errors:', errors); // Debug log
                setIsSubmitting(false);
                alert('Terjadi kesalahan saat memproses pesanan');
            }
        });
    };

    const totalHarga = cartItems.reduce((total, item) =>
        total + item.produk.harga_produk * item.quantity, 0);

    return (
        <div>
        <Head title="Checkout" />
        <Navbaruser />
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-teal-800 mb-2">Checkout</h1>
                    <p className="text-teal-600">Lengkapi detail pengiriman untuk menyelesaikan pesanan Anda</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Shipping Details Form */}
                    <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-8">
                            <div className="bg-teal-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-teal-800">Detail Pengiriman</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label className="block text-sm font-semibold text-teal-700 mb-2">
                                    Alamat Lengkap
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="alamat"
                                        value={shippingDetails.alamat}
                                        onChange={handleInputChange}
                                        className="w-full rounded-xl border-2 border-teal-100 p-4 text-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 pl-12"
                                        required
                                        placeholder={alamat || "Masukkan alamat lengkap"}
                                    />
                                    <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <label className="block text-sm font-semibold text-teal-700 mb-2">
                                        Kota
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="kota"
                                            value={shippingDetails.kota}
                                            onChange={handleInputChange}
                                            className="w-full rounded-xl border-2 border-teal-100 p-4 text-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 pl-12"
                                            required
                                            placeholder='Kota'
                                        />
                                        <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-semibold text-teal-700 mb-2">
                                        Kode Pos
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="kode_pos"
                                            value={shippingDetails.kode_pos}
                                            onChange={handleInputChange}
                                            className="w-full rounded-xl border-2 border-teal-100 p-4 text-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 pl-12"
                                            required
                                            placeholder='Kode Pos'
                                        />
                                        <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-semibold text-teal-700 mb-2">
                                    Nomor Telepon
                                </label>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="nomor_telepon"
                                        value={shippingDetails.nomor_telepon}
                                        onChange={handleInputChange}
                                        className="w-full rounded-xl border-2 border-teal-100 p-4 text-gray-800 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 pl-12"
                                        required
                                        placeholder={no_telp || 'Masukkan nomor telepon'}
                                    />
                                    <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-300 to-blue-400 px-8 py-4 text-white font-semibold text-lg shadow-lg hover:from-blue-400 hover:to-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Memproses...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Proses Pesanan
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-8">
                            <div className="bg-teal-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-teal-800">Ringkasan Pesanan</h2>
                        </div>

                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.produk_id} className="flex items-center justify-between border-b border-teal-50 pb-6 hover:bg-teal-25 -mx-4 px-4 rounded-lg transition-colors duration-200">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <img
                                                src={
                                                    item.produk.gambar_produk.startsWith('img/produk/')
                                                        ? `/${item.produk.gambar_produk}`
                                                        : `/img/produk/${item.produk.gambar_produk}`
                                                }
                                                alt={item.produk.nama_produk}
                                                className="h-20 w-20 object-cover rounded-lg shadow-md"
                                            />
                                            <div className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-lg">{item.produk.nama_produk}</p>
                                            <p className="text-teal-600 font-semibold">
                                                Rp {item.produk.harga_produk.toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-100">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-teal-700">Total Pembayaran</span>
                                <div className="text-right">
                                    <span className="text-3xl font-bold text-teal-800">
                                        Rp {totalHarga.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                                <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm font-semibold text-blue-800">Informasi Pengiriman</p>
                                    <p className="text-xs text-blue-600 mt-1">Pesanan akan diproses dalam 1-2 hari kerja setelah pembayaran dikonfirmasi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
