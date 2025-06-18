import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Navbaruser } from '@/components-user/navbar-user';
import { useState } from 'react';
import { router } from '@inertiajs/react';

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
    quantity:number;

}

interface Props extends PageProps {
    cartItems: CartItem[];
    user: any;
}

export default function Index({ cartItems, user }: Props) {
    const [shippingDetails, setShippingDetails] = useState({
        alamat: '',
        kota: '',
        kode_pos: '',
        nomor_telepon: '',
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
        router.post(route('checkout.process'), {
            ...shippingDetails,
            cartItems
        });
    };

    const totalHarga = cartItems.reduce((total, item) =>
         { return total + item.produk.harga_produk * item.quantity}, 0);

    return (
        <div>
            <Head title="Checkout" />
            <Navbaruser />
            <div className="min-h-screen bg-white pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="mb-8 text-3xl font-bold text-teal-800">Checkout</h1>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Shipping Details Form */}
                        <div className="rounded-lg border p-6 shadow-sm">
                            <h2 className="mb-6 text-xl font-semibold text-teal-800">Detail Pengiriman</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Alamat Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="alamat"
                                        value={shippingDetails.alamat}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border p-2 text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Kota
                                    </label>
                                    <input
                                        type="text"
                                        name="kota"
                                        value={shippingDetails.kota}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border p-2  text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Kode Pos
                                    </label>
                                    <input
                                        type="text"
                                        name="kode_pos"
                                        value={shippingDetails.kode_pos}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border p-2  text-black"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Nomor Telepon
                                    </label>
                                    <input
                                        type="tel"
                                        name="nomor_telepon"
                                        value={shippingDetails.nomor_telepon}
                                        onChange={handleInputChange}
                                        className="w-full rounded-md border p-2  text-black "
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-teal-800 px-6 py-3 text-white transition duration-200 hover:bg-teal-700"
                                >
                                    Proses Pesanan
                                </button>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="rounded-lg border p-6 shadow-sm">
                            <h2 className="mb-6 text-xl font-semibold text-teal-800">Ringkasan Pesanan</h2>

                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.produk_id} className="flex items-center justify-between border-b pb-4">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={
                                                    item.produk.gambar_produk.startsWith('img/produk/')
                                                        ? `/${item.produk.gambar_produk}`
                                                        : `/img/produk/${item.produk.gambar_produk}`
                                                }
                                                alt={item.produk.nama_produk}
                                                className="h-16 w-16 object-cover"
                                            />
                                            <div>
                                                <p className="font-semibold text-black">{item.produk.nama_produk}</p>
                                                <p className="text-sm text-gray-600">
                                                    Rp {item.produk.harga_produk.toLocaleString('id-ID')}
                                                </p>
                                            </div>

                                        </div>
                                        <h1 className='text-black'>X {item.quantity}</h1>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-bold text-teal-800">
                                        Rp {totalHarga.toLocaleString('id-ID')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
