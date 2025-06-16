import { Head } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';

interface CartItem {
    id: number;
    produk: {
        id: number;
        nama_produk: string;
        gambar_produk: string;
        harga_produk: number;
    };
    quantity: number;
    price: number;
}

interface Cart {
    id: number;
    items: CartItem[];
}

export default function Cart({ cart }: { cart: Cart }) {
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <Head title="Keranjang"></Head>
            <div className="w-full bg-white">
                <Navbaruser />
                <div className="container mx-auto px-4 py-8 pt-36">
                    <h1 className="mb-8 text-2xl font-bold">Keranjang Belanja</h1>

                    {cart.items.length === 0 ? (
                        <div className="text-center text-gray-500">
                            Keranjang belanja Anda kosong
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="px-4 py-2 text-left">Produk</th>
                                        <th className="px-4 py-2 text-left">Harga</th>
                                        <th className="px-4 py-2 text-left">Jumlah</th>
                                        <th className="px-4 py-2 text-left">Total</th>
                                        <th className="px-4 py-2 text-left">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.items.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.produk.gambar_produk.startsWith('img/produk/')
                                                            ? `/${item.produk.gambar_produk}`
                                                            : `/img/produk/${item.produk.gambar_produk}`}
                                                        alt={item.produk.nama_produk}
                                                        className="h-16 w-16 object-cover"
                                                    />
                                                    <span>{item.produk.nama_produk}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">Rp {item.price.toLocaleString()}</td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button className="rounded bg-gray-200 px-2 py-1">-</button>
                                                    <span>{item.quantity}</span>
                                                    <button className="rounded bg-gray-200 px-2 py-1">+</button>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4">
                                                Rp {(item.price * item.quantity).toLocaleString()}
                                            </td>
                                            <td className="px-4 py-4">
                                                <button className="text-red-500 hover:text-red-700">
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan={3} className="px-4 py-4 text-right font-bold">
                                            Total:
                                        </td>
                                        <td className="px-4 py-4 font-bold">
                                            Rp {total.toLocaleString()}
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>

                            <div className="mt-8 flex justify-end">
                                <button className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
