import AppLayout from '@/layouts/app-layout-admin';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
export default function AdminNih() {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            href: '/dashboard',
        },
    ];
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Menu" />
                <div className="min-h-screen bg-white">
                    <div className="mx-auto max-w-7xl p-5">
                        {/* Header */}
                        <div className="mb-8 rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-lg">
                            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                                <div>
                                    <h1 className="mb-3 text-3xl font-bold text-[#5A94C1]">🥤 Dashboard Penjualan</h1>
                                    <p className="text-xl text-gray-600">Hasil laporan keuntungan</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500">Hari ini</div>
                                    <div className="text-2xl font-bold text-[#5A94C1]">15 Juni 2025</div>
                                </div>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                            <div className="hover:shadow-3xl transform rounded-3xl border-l-8 border-[#5A94C1] bg-white/95 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:-translate-y-3">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-6xl">💰</div>
                                    <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">+12%</div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-700">Total Penjualan</h3>
                                <div className="mb-2 text-4xl font-bold text-[#5A94C1]">Rp 2.450.000</div>
                                <p className="text-gray-500">45 transaksi hari ini</p>
                            </div>

                            <div className="hover:shadow-3xl transform rounded-3xl border-l-8 border-[#5A94C1] bg-white/95 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:-translate-y-3">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-6xl">📦</div>
                                    <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-600">+8%</div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-700">Stok Barang</h3>
                                <div className="mb-2 text-4xl font-bold text-[#5A94C1]">1.200</div>
                                <p className="text-gray-500">Tersedia di gudang</p>
                            </div>

                            <div className="hover:shadow-3xl transform rounded-3xl border-l-8 border-[#5A94C1] bg-white/95 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:-translate-y-3">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-6xl">🧑‍🤝‍🧑</div>
                                    <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">+5%</div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-700">Pelanggan Baru</h3>
                                <div className="mb-2 text-4xl font-bold text-[#5A94C1]">35</div>
                                <p className="text-gray-500">Mendaftar minggu ini</p>
                            </div>

                            <div className="hover:shadow-3xl transform rounded-3xl border-l-8 border-[#5A94C1] bg-white/95 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:-translate-y-3">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="text-6xl">📈</div>
                                    <div className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">-3%</div>
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-700">Retur Barang</h3>
                                <div className="mb-2 text-4xl font-bold text-[#5A94C1]">5</div>
                                <p className="text-gray-500">Dikembalikan pelanggan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
