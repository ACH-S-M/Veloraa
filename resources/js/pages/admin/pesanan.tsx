import AppLayout from '@/layouts/app-layout-admin';
import { Head } from '@inertiajs/react';
interface Pesanan {
    No_pesanan: number;
    pelanggan_id: number;
    tanggal_pemesanan:string;
    total_harga: number;
    status: string;
    alamat_pengiriman: string;
    kota: string;
    kode_pos: string;
    nomor_telepon: string;
}
interface listPesanan {
    Produkdipesan: Pesanan[];
}
export default function Pesanan({ Produkdipesan }: listPesanan) {
    return (
        <>
            <AppLayout>
                <Head title="Laposan Pesanan "></Head>
                <div className="content min-h-screen w-full bg-white p-2.5">
                    <div className="overflow-x-auto rounded-xl shadow-md">
                        <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
                            <thead className="bg-[#5A94C1] text-white uppercase">
                                <tr>
                                    <th className="px-4 py-3">No Pesanan</th>
                                    <th className="px-4 py-3">ID Pelanggan</th>
                                    <th className="px-4 py-3">Tanggal Pemesanan</th>
                                    <th className="px-4 py-3">Total Harga</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Alamat Pengiriman</th>
                                    <th className="px-4 py-3">Kota</th>
                                    <th className="px-4 py-3">Kode Pos</th>
                                    <th className="px-4 py-3">Nomor Telepon</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* contoh dummy row */}
                                {Produkdipesan.map((item) => (
                                    <tr className="border-t hover:bg-blue-50" key={item.No_pesanan}
                                    onClick={() => alert(item.total_harga)}>
                                        <td className="px-4 py-2">{item.No_pesanan}</td>
                                        <td className="px-4 py-2">{item.pelanggan_id}</td>
                                        <td className="px-4 py-2">{item.tanggal_pemesanan}</td>
                                        <td className="px-4 py-2">{item.total_harga}</td>
                                        <td className="px-4 py-2">{item.status}</td>
                                        <td className="px-4 py-2">{item.alamat_pengiriman}</td>
                                        <td className="px-4 py-2">{item.kota}</td>
                                        <td className="px-4 py-2">{item.kode_pos}</td>
                                        <td className="px-4 py-2">{item.nomor_telepon}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
