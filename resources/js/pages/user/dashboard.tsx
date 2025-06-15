
import { Head } from '@inertiajs/react';
import Slider from '../../components/ui/carousel';
import {Navbaruser} from '@/components-user/navbar-user';
import { Popular } from '@/components-user/Layout-popular';
import { type TypeBarangPopuler} from '@/types';
import { type TypeBarangKategori } from '@/types';
import { Kategori } from '@/components-user/kategori';


type DashboardProps = TypeBarangPopuler & TypeBarangKategori;
export default function Dashboard({Barang,IKategori} :DashboardProps) {
    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content md:pt-24 bg-white">
                    <h1> Ini user biasa  </h1>
                        <Slider></Slider>
                        <Popular Barang={Barang}></Popular>
                        <Kategori IKategori={IKategori}></Kategori>
             </div>
           </>

    );
}
