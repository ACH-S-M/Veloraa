import { Head } from "@inertiajs/react";

export default function DetailProduk({ nama_produk, harga_produk, gambar_produk, deskripsi_produk, stok, barang_terjual }: { nama_produk: string; harga_produk: number; gambar_produk: string; deskripsi_produk: string; stok: number; barang_terjual: number }) {
    return (

        <>
        <Head title="Detail">

        </Head>
            <h1>{nama_produk}</h1>
            <h2>{harga_produk}</h2>
            <h3>{deskripsi_produk}</h3>
            <h4>{stok}</h4>
            <h5>{barang_terjual}</h5>
            <img src={gambar_produk.startsWith('img/produk/') ? `/${gambar_produk}` : `/img/produk/${gambar_produk}`} alt={nama_produk} />
        </>
    );
}
