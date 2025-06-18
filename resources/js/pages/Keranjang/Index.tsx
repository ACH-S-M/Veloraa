import { Button } from '@/Components/ui/button';
import { Navbaruser } from '@/components-user/navbar-user';
import { PageProps } from '@/types';
import { Head, router } from '@inertiajs/react';
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
    produk: Produk;
}

interface Props extends PageProps {
    cartItems: CartItem[];
}

export default function Index({ cartItems }: Props) {
    const [quantities, setQuantities] = useState<Record<number, number>>(() => {
        // Initialize quantities for each product to 1
        const initialQuantities: Record<number, number> = {};
        cartItems.forEach((item) => {
            initialQuantities[item.produk_id] = 1;
        });
        return initialQuantities;
    });

    const handleQuantityChange = (produkId: number, change: number) => {
        setQuantities((prev) => ({
            ...prev,
            [produkId]: Math.max(1, (prev[produkId] || 1) + change),
        }));
    };

    const handleRemoveFromCart = (produkId: number) => {
        router.delete(route('keranjang.remove', produkId), {
            preserveScroll: true,
        });
    };

    return (
        <div>
            <Head title="Keranjang" />
            <Navbaruser />
            <div className="flex min-h-screen w-full flex-col pt-6 bg-white lg:flex-row lg:justify-evenly lg:p-5">
                {cartItems.length === 0 ? (
                    <div className="text-center pt-36">
                        <h1 className="mb-6 text-2xl font-bold text-black">Keranjang Belanja</h1>
                        <p className="text-gray-500">Keranjang belanja Anda kosong</p>
                    </div>
                ) : (
                    <>
                        <div className="w-full space-y-3 lg:w-1/2 md:pt-36">
                            <h1 className="mb-3 text-2xl font-bold text-black lg:text-3xl">Keranjang Belanja</h1>
                            {cartItems.map((item) => (
                                <div key={item.produk_id} className="flex h-auto flex-col items-center border-2 p-2 sm:flex-row sm:h-40">
                                    <img
                                        src={
                                            item.produk.gambar_produk.startsWith('img/produk/')
                                                ? `/${item.produk.gambar_produk}`
                                                : `/img/produk/${item.produk.gambar_produk}`
                                        }
                                        alt={item.produk.nama_produk}
                                        className="h-28 w-28 object-cover"
                                    />
                                    <div className="flex-1 p-4 text-center sm:text-left">
                                        <p className="font-semibold text-black">{item.produk.nama_produk}</p>
                                        <p className="text-lg font-bold text-black">
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
                                    <div className="flex items-center gap-2 p-4">
                                        <button
                                            className="h-8 w-8 rounded-full bg-cyan-800 text-lg font-bold text-white"
                                            onClick={() => handleQuantityChange(item.produk_id, 1)}
                                        >
                                            +
                                        </button>
                                        <span className="text-lg font-semibold text-black">{quantities[item.produk_id]}</span>
                                        <button
                                            className="h-8 w-8 rounded-full bg-cyan-800 text-lg font-bold text-white"
                                            onClick={() => handleQuantityChange(item.produk_id, -1)}
                                        >
                                            −
                                        </button>
                                    </div>
                                    <button className="w-full bg-red-600 p-2 text-white sm:h-full sm:w-auto sm:p-4"
                                     onClick={() => handleRemoveFromCart(item.produk_id)}>
                                        🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 w-full lg:ml-7 lg:w-1/2 md:pt-36 ">
                            <div className="mx-auto max-w-md rounded-2xl border border-black p-6 shadow-sm">
                                <h2 className="mb-6 text-xl font-semibold text-teal-800">Ringkasan Pembayaran</h2>

                                <div className="mb-2 flex justify-between text-black">
                                    <span>Harga</span>
                                    <span>Rp.{cartItems.reduce((total, item) =>
                                         total + item.produk.harga_produk * quantities[item.produk_id], 0) .toLocaleString('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                        })
                                        .replace('Rp', '')
                                        .trim()}

                                         </span>
                                </div>

                                <div className="mb-6 flex justify-between text-black">
                                    <span>Ongkos kirim</span>
                                    <span>Rp 0,00</span>
                                </div>

                                <div className="mb-6 flex justify-between font-bold text-black">
                                    <span>Total Harga</span>
                                    <span>
                                            Rp.{cartItems.reduce((total, item) =>
                                                total + item.produk.harga_produk * quantities[item.produk_id], 0).toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                })
                                                .replace('Rp', '')
                                                .trim()}
                                    </span>
                                </div>

                                <div className="flex justify-end">
                                    <button className="w-full rounded-full bg-teal-800 px-5 py-2 font-semibold text-white transition duration-200 hover:bg-teal-700 sm:w-auto" onClick={() => router.visit(route('checkout'))}>
                                        Bayar Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
