import { Head } from '@inertiajs/react';
import Slider from '../../components/ui/carousel';
import {Navbaruser} from '@/components-user/navbar-user';
import { Popular } from '@/components-user/Layout-popular';
import {  type TypeProdukPopuler} from '@/types';
import { type TypeBarangKategori } from '@/types';
import { Kategori } from '@/components-user/kategori';


type DashboardProps = TypeProdukPopuler & TypeBarangKategori;
export default function Dashboard({Produk, IKategori} :DashboardProps) {

    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content pt-24 md:pt-36 bg-white pb-6">
                        <Slider></Slider>
                        <Popular Produk={Produk}></Popular>
                        <Kategori IKategori={IKategori}></Kategori>
             </div>
           </>
    );
}
