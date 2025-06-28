import { Head, router, usePage } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';
import { Button } from '@/components/ui/button';
import { PageProps, Produk } from '@/types';
import { useState } from 'react';
import { ModalProduk } from '@/components/ui/ModalProduk';

export default function DetailProduk({
    ID_Produk,
    nama_produk,
    harga_produk,
    gambar_produk,
    deskripsi_produk
}: Produk) {

    const { auth } = usePage<PageProps>().props;
    const [isLoading, setIsLoading] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [Modal,ShowModal] = useState(false);

    const handleAddToCart = () => {
        setIsLoading(true);
        router.post(route('keranjang.add', ID_Produk), {}, {
            preserveScroll: true,
            onSuccess: () => {
                setIsLoading(false);
                if (auth.user) {
                    ShowModal(true);
                } else {
                    alert('Gagal, silahkan Login terlebih Dahulu');
                }
            },
            onError: () => {
                setIsLoading(false);
            }
        });
    };

    return (
        <>
            <Head title="Detail" />
            <Navbaruser />

            {/* Hero Background */}
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-bounce"></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
                </div>

                <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">



                    {/* Main Product Section */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm  border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                            {/* Product Image Section */}
                            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                                {/* Decorative Elements */}
                                <div className="absolute top-6 left-6 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
                                <div className="absolute bottom-6 right-6 w-4 h-4 bg-indigo-500 rounded-full opacity-30"></div>
                                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-blue-300 rounded-full opacity-20"></div>

                                {/* Image Container */}
                                <div className="relative">
                                    {!imageLoaded && (
                                        <div className="absolute inset-0 bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
                                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <img
                                        src={gambar_produk.startsWith('img/produk/') ? `/${gambar_produk}` : `/img/produk/${gambar_produk}`}
                                        alt={nama_produk}
                                        className={`max-w-full max-h-96 object-contain rounded-2xl shadow-lg transition-all duration-700 transform hover:scale-105 ${
                                            imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        onLoad={() => setImageLoaded(true)}
                                    />


                                </div>
                            </div>

                            {/* Product Info Section */}
                            <div className="p-8 lg:p-12 space-y-6">

                                {/* Product Title */}
                                <div className="space-y-3">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                        {nama_produk}
                                    </h1>

                                    {/* Category Badge */}
                                    <div className="flex items-center gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                            🥤 Minuman Botol
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                            ✅ Tersedia
                                        </span>
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-gray-600 mb-1">Harga</p>
                                            <p className="text-3xl font-bold text-gray-900">
                                                Rp {harga_produk.toLocaleString('id-ID')}
                                            </p>
                                        </div>
                                        <div className="bg-white rounded-full p-3 shadow-md">
                                            <span className="text-2xl">💰</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-3">
                                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                        📝 Deskripsi Produk
                                    </h2>
                                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                                        <p className="text-gray-700 leading-relaxed">
                                            {deskripsi_produk}
                                        </p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-green-500">🚚</span>
                                            <span className="font-medium text-gray-900">Pengiriman</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Gratis ongkir</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-blue-500">🔒</span>
                                            <span className="font-medium text-gray-900">Garansi</span>
                                        </div>
                                        <p className="text-sm text-gray-600">100% Original</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-4 pt-4">
                                    <Button
                                        onClick={handleAddToCart}
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Menambahkan...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-xl">🛒</span>
                                                <span>Masukkan Keranjang</span>
                                            </div>
                                        )}
                                    </Button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✅</span>
                                        <span>Produk Original</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-blue-500">🔐</span>
                                        <span>Pembayaran Aman</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-purple-500">⚡</span>
                                        <span>Proses Cepat</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                            <div className="text-center">
                                <div className="text-3xl mb-3">🚀</div>
                                <h3 className="font-semibold text-gray-900 mb-2">Pengiriman Cepat</h3>
                                <p className="text-sm text-gray-600">Dikirim dalam 1-2 hari kerja</p>
                            </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                            <div className="text-center">
                                <div className="text-3xl mb-3">🎯</div>
                                <h3 className="font-semibold text-gray-900 mb-2">Kualitas Terjamin</h3>
                                <p className="text-sm text-gray-600">Produk berkualitas tinggi</p>
                            </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                            <div className="text-center">
                                <div className="text-3xl mb-3">💬</div>
                                <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                                <p className="text-sm text-gray-600">Siap membantu 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Modal && <ModalProduk show={Modal} onClose={() => ShowModal(false)} />}

        </>
    );
}
