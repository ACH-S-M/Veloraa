import { Navbaruser } from '@/components-user/navbar-user';
import { PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

interface Produk {
    ID_Produk: number;
    nama_produk: string;
    harga_produk: number;
    gambar_produk: string;
    // Add other product fields as needed
}

interface CartItem {
    produk_id: number;
    pelanggan_id: number;
    quantity: number;
    produk: Produk;
}

interface Props extends PageProps {
    cartItems: CartItem[];
}

export default function Index({ cartItems }: Props) {
    const [quantities, setQuantities] = useState<Record<number, number>>(() => { //constanta quantity adalah state dengan generic class number number
       //inisiasi jumlah kuantity awal (1)
        const initialQuantities: Record<number, number> = {};
        cartItems.forEach((item) => {
            initialQuantities[item.produk_id] = item.quantity; //ini state item.produk_id dari interface
        });
        return initialQuantities; // balikin State total_produk secara live ke mysql > keranjang.quantity
    });

    const handleQuantityChange = async (produkId: number, change: number) => {
        const newQuantity = Math.max(1, (quantities[produkId] || 1) + change);//Mengubah jumlah (quantity) produk dalam keranjang belanja dan update ke backend via API (dengan axios.patch).
            //Fetch data dari Controller keranjang.quantity
        try {
            const response = await axios.patch(route('keranjang.updateQuantity', produkId), { //sett url nya ke rute controller
                quantity: newQuantity
            });

            const { data } = response;

            if (response.status === 200) { //kalo berhasil
                setQuantities(prev => ({  // set quantity berdasarkan state yang dikasin pengguna
                    ...prev,
                    [produkId]: data.quantity //Sesuaikan Produk Id debgan Quantity yang ada di keranjang
                }));
            } else {
                alert(data.message);   //kasih alert kalo gagal.
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data?.message || 'Terjadi kesalahan saat mengupdate jumlah produk');
            } else {
                alert('Terjadi kesalahan saat mengupdate jumlah produk');
            }
        }
    };

    const handleRemoveFromCart = (produkId: number) => {
        router.delete(route('keranjang.remove', produkId), { //ini buat button handle nya dia manggil rute keanjang.remove
            preserveScroll: true, // kalo true nanti dia ga scroll ke atas

        });
    };

    return (
        <div>
            <Head title="Keranjang" />
            <Navbaruser />

<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-pink-200 rounded-full opacity-20"></div>
    </div>

    <div className="relative z-10 flex min-h-screen w-full flex-col pt-6 lg:flex-row lg:justify-evenly lg:p-5">
        {cartItems.length === 0 ? (
            <div className="text-center pt-36 w-full">
                <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6">
                            <span className="text-6xl">🛒</span>
                        </div>
                        <div className="flex justify-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>

                    <h1 className="mb-4 text-3xl font-bold text-gray-800">Keranjang Belanja</h1>
                    <p className="text-gray-500 mb-8 text-lg">Keranjang belanja Anda masih kosong</p>

                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Mulai Belanja
                    </button>
                </div>
          </div>
        ) : (
            <>
                {/* Cart Items Section */}
                <div className="w-full space-y-6 lg:w-1/2 pt-16 md:pt-36 px-4">

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Keranjang Belanja</h1>
                        <p className="text-gray-600">
                            {cartItems.length} item{cartItems.length > 1 ? 's' : ''} dalam keranjang
                        </p>
                    </div>

                    {/* Cart Items */}
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div
                                key={item.produk_id}
                                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="flex flex-col sm:flex-row items-center p-6">

                                    {/* Product Image */}
                                    <div className="relative mb-4 sm:mb-0 sm:mr-6">
                                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
                                            <img
                                                src={
                                                    item.produk.gambar_produk.startsWith('img/produk/')
                                                        ? `/${item.produk.gambar_produk}`
                                                        : `/img/produk/${item.produk.gambar_produk}`
                                                }
                                                alt={item.produk.nama_produk}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        {/* Product badge */}
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                            ✓
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                                        <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                                            {item.produk.nama_produk}
                                        </h3>
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                                Premium
                                            </span>
                                            <span className="text-green-600 text-sm">✓ Tersedia</span>
                                        </div>
                                        <p className="text-2xl font-bold text-gray-800">
                                            Rp{' '}
                                            {item.produk.harga_produk
                                                .toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                })
                                                .replace('Rp', '')
                                                .trim()}
                                        </p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 mb-4 sm:mb-0 sm:mr-4">
                                        <button
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center text-xl"
                                            onClick={() => handleQuantityChange(item.produk_id, -1)}
                                        >
                                            −
                                        </button>

                                        <div className="bg-gray-50 rounded-lg px-4 py-2 border-2 border-gray-200 min-w-[60px] text-center">
                                            <span className="text-lg font-bold text-gray-800">
                                                {quantities[item.produk_id]}
                                            </span>
                                        </div>

                                        <button
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center text-xl"
                                            onClick={() => handleQuantityChange(item.produk_id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                        onClick={() => handleRemoveFromCart(item.produk_id)}
                                    >
                                        <span className="text-lg">🗑️</span>
                                        <span className="hidden sm:inline">Hapus</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Summary Section */}
                <div className="mt-8 w-full lg:ml-7 lg:w-1/2 md:pt-36 px-4">
                    <div className="sticky top-24">
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-8 max-w-md mx-auto">

                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-white text-2xl">💳</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Ringkasan Pembayaran</h2>
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-4 mb-8">

                                {/* Subtotal */}
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600 flex items-center gap-2">
                                        <span className="text-blue-500">💰</span>
                                        Subtotal
                                    </span>
                                    <span className="font-semibold text-gray-800">
                                        Rp.{cartItems.reduce((total, item) =>
                                            total + item.produk.harga_produk * quantities[item.produk_id], 0)
                                            .toLocaleString('id-ID', {
                                                style: 'currency',
                                                currency: 'IDR',
                                            })
                                            .replace('Rp', '')
                                            .trim()}
                                    </span>
                                </div>

                                {/* Shipping */}
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600 flex items-center gap-2">
                                        <span className="text-green-500">🚚</span>
                                        Ongkos Kirim
                                    </span>
                                    <div className="text-right">
                                        <span className="font-semibold text-green-600">GRATIS</span>
                                        <div className="text-xs text-gray-500 line-through">Rp 15.000</div>
                                    </div>
                                </div>

                                {/* Discount */}
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="text-gray-600 flex items-center gap-2">
                                        <span className="text-orange-500">🎁</span>
                                        Diskon
                                    </span>
                                    <span className="font-semibold text-orange-600">-Rp 0</span>
                                </div>

                                {/* Total */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                            <span className="text-blue-600">🏷️</span>
                                            Total Pembayaran
                                        </span>
                                        <span className="text-2xl font-bold text-blue-600">
                                            Rp.{cartItems.reduce((total, item) =>
                                                total + item.produk.harga_produk * quantities[item.produk_id], 0)
                                                .toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                })
                                                .replace('Rp', '')
                                                .trim()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                                    onClick={() => router.visit(route('checkout'))}
                                >
                                    <span className="text-xl">💳</span>
                                    <span>Bayar Sekarang</span>
                                </button>

                                <button className="w-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                    <span className="text-lg">🛍️</span>
                                    <span>Lanjut Belanja</span>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="flex flex-col items-center">
                                        <span className="text-green-500 text-lg mb-1">🔒</span>
                                        <span className="text-xs text-gray-600">Aman</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-blue-500 text-lg mb-1">⚡</span>
                                        <span className="text-xs text-gray-600">Cepat</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-purple-500 text-lg mb-1">✅</span>
                                        <span className="text-xs text-gray-600">Terpercaya</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
</div>
</div>
 );}

