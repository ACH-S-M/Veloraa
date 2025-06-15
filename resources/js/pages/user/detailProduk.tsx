import { Head } from "@inertiajs/react";

export default function DetailProduk({ nama_produk, harga_produk }: { nama_produk: string; harga_produk: number }) {
    return (

        <>
        <Head title="Detail">

        </Head>
            <h1>{nama_produk}</h1>
            <h2>{harga_produk}</h2>
        </>
    );
}
