import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function TambahBarang() {
    const [showModal, setShowModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        harga: '',
        gambar: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('produk.store'), {
            onSuccess: () => {
                setShowModal(false);
                reset(); // reset form
            }
        });
    };

    return (
        <>
            <Head title="Tambah Barang" />
            <div className="overflow-x-auto rounded-xl p-4">
                <Button className='bg-[#5A94C1] p-2 rounded-xl mb-5 text-white'
                        onClick={() => setShowModal(true)}>
                    Tambah Produk
                </Button>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
                            <h2 className="text-xl font-bold mb-4">Tambah Produk</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="block mb-1 text-sm">Nama Produk</label>
                                    <input type="text" className="w-full border px-3 py-2 rounded"
                                           value={data.nama}
                                           onChange={e => setData('nama', e.target.value)} />
                                    {errors.nama && <div className="text-sm text-red-600">{errors.nama}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="block mb-1 text-sm">Harga</label>
                                    <input type="number" className="w-full border px-3 py-2 rounded"
                                           value={data.harga}
                                           onChange={e => setData('harga', e.target.value)} />
                                    {errors.harga && <div className="text-sm text-red-600">{errors.harga}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-1 text-sm">Gambar</label>
                                    <input type="file" onChange={e => setData('gambar', e.target.files[0])} />
                                    {errors.gambar && <div className="text-sm text-red-600">{errors.gambar}</div>}
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button type="button"
                                            onClick={() => setShowModal(false)}
                                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                                        Batal
                                    </button>
                                    <button type="submit"
                                            className="px-4 py-2 bg-[#5A94C1] text-white rounded hover:bg-[#417aa1]"
                                            disabled={processing}>
                                        Simpan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Tabel produk tetap di bawah sini */}
                {/* ... */}
            </div>
        </>
    );
}
