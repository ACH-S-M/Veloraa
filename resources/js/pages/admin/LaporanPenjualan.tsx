import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout-admin';
import { Head, useForm } from '@inertiajs/react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { ProdukProps} from '@/types';
export default function TambahBarang({ Produk} : ProdukProps) {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        harga: '',
        deskripsi: '',
        stok: '',
        gambar: null as File | null,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('produk.store'), {
            onSuccess: () => {
                setShowModal(false);
                reset();
            }
        });
    };

    return (
        <AppLayout>
            <Head title="Tambah Barang" />

            <div className="overflow-x-auto rounded-xl p-4">
                {/* Tombol untuk buka modal */}
                <Button
                    className="mb-5 rounded-xl bg-[#5A94C1] p-2 text-white"
                    onClick={() => setShowModal(true)}
                >
                    Tambah Produk
                </Button>

                {/* Modal Tambah Produk */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
                            <h2 className="text-xl font-bold mb-4 text-black">Tambah Produk</h2>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Produk
                                    </label>
                                    <input
                                        id="nama"
                                        type="text"
                                        placeholder="Masukkan nama produk"
                                        className="w-full border mb-3 p-2 rounded text-black"
                                        value={data.nama}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setData('nama', e.target.value)}
                                    />
                                    {errors.nama && <div className="text-sm text-red-600">{errors.nama}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="harga" className="block text-sm font-medium text-gray-700 mb-1">
                                        Harga
                                    </label>
                                    <input
                                        id="harga"
                                        type="number"
                                        placeholder="Masukkan harga produk"
                                        className="w-full border mb-3 p-2 rounded text-black"
                                        value={data.harga}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setData('harga', e.target.value)}
                                    />
                                    {errors.harga && <div className="text-sm text-red-600">{errors.harga}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="stok" className="block text-sm font-medium text-gray-700 mb-1">
                                        Stok
                                    </label>
                                    <input
                                        id="stok"
                                        type="number"
                                        placeholder="Masukkan jumlah stok"
                                        className="w-full border mb-3 p-2 rounded text-black"
                                        value={data.stok}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setData('stok', e.target.value)}
                                        min="0"
                                    />
                                    {errors.stok && <div className="text-sm text-red-600">{errors.stok}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-1">
                                        Deskripsi
                                    </label>
                                    <textarea
                                        id="deskripsi"
                                        placeholder="Masukkan deskripsi produk"
                                        className="w-full border mb-3 p-2 rounded text-black"
                                        value={data.deskripsi}
                                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setData('deskripsi', e.target.value)}
                                        rows={4}
                                    />
                                    {errors.deskripsi && <div className="text-sm text-red-600">{errors.deskripsi}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="gambar" className="block text-sm font-medium text-gray-700 mb-1">
                                        Gambar Produk
                                    </label>
                                    <input
                                        id="gambar"
                                        type="file"
                                        className="w-full border mb-3 p-2 rounded text-black"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setData('gambar', e.target.files[0]);
                                            }
                                        }}
                                    />
                                    {errors.gambar && <div className="text-sm text-red-600">{errors.gambar}</div>}
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#5A94C1] text-white rounded hover:bg-[#417aa1]"
                                        disabled={processing}
                                    >
                                        {processing ? 'Menyimpan...' : 'Simpan'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Tabel produk */}
                <table className="w-full overflow-hidden rounded-xl border border-gray-200">
                    <thead>
                        <tr className="bg-[#5A94C1] text-white">
                            <th className="px-4 py-4 text-left font-semibold">ID Produk</th>
                            <th className="px-4 py-4 text-left font-semibold">Nama Produk</th>
                            <th className="px-4 py-4 text-left font-semibold">Harga Produk</th>
                            <th className="px-4 py-4 text-left font-semibold">Stok</th>
                            <th className="px-4 py-4 text-left font-semibold">Deskripsi</th>
                            <th className="px-4 py-4 text-left font-semibold">Jumlah Terjual</th>
                        </tr>
                    </thead>
                  {Produk.map((item) => (
                          <tbody className="bg-amber-50 text-gray-800">
                          <tr className="border-b border-gray-100 transition-colors hover:bg-[#E5F1FA]">
                              <td className="px-4 py-4 font-medium text-black">{item.ID_Produk}</td>
                              <td className="px-4 py-4 text-black">{item.nama_produk}</td>
                              <td className="px-4 py-4">{item.harga_produk}</td>
                              <td className="px-4 py-4">{item.stok}</td>
                              <td className="px-4 py-4">{item.deskripsi_produk}</td>
                              <td className="px-4 py-4">{item.barang_terjual}</td>

                          </tr>
                      </tbody>
                  ))}
                </table>
            </div>
        </AppLayout>
    );
}
