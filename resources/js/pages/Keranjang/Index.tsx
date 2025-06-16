import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Navbaruser } from '@/components-user/navbar-user';
interface Produk {
    ID_Produk: number;
    nama_produk: string;
    harga: number ;
    gambar: string;
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
    const handleRemoveFromCart = (produkId: number) => {
        router.delete(route('keranjang.remove', produkId), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Keranjang" />
            <Navbaruser></Navbaruser>
            <div className=" bg-white  w-full min-h-screen h-auto pt-36 p-5">
                <h1 className="text-2xl font-bold mb-6 text-black">Keranjang Belanja</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center ">
                        <p className="text-gray-500">Keranjang belanja Anda kosong</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {cartItems.map((item) => (
                            <Card key={item.produk_id}>
                                <CardHeader>
                                    <CardTitle className="flex justify-between items-center">
                                        <span>{item.produk.nama_produk}</span>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleRemoveFromCart(item.produk_id)}
                                        >
                                            Hapus
                                        </Button>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-4">
                                        {item.produk.gambar && (
                                            <img
                                                alt={item.produk.nama_produk}
                                                className="w-24 h-24 object-cover rounded"
                                            />
                                        )}
                                        <div>
                                            {/* <p className="text-lg font-semibold">
                                                Rp {item.produk.harga.toLocaleString('id-ID')}
                                            </p> */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <div className="mt-6 flex justify-end">
                            <Button
                                onClick={() => router.visit(route('checkout'))}
                                className="w-full sm:w-auto"
                            >
                                Lanjut ke Pembayaran
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
