import { Head } from '@inertiajs/react';
import Slider from '../../components/ui/carousel';
import {Navbaruser} from '@/components-user/navbar-user';
import { Popular } from '@/components-user/Layout-popular';
import {  type TypeProdukPopuler} from '@/types';
import { type TypeBarangKategori } from '@/types';
import { HeroHijab } from './hero1';

import { Kategori } from '@/components-user/kategori';


type DashboardProps = TypeProdukPopuler & TypeBarangKategori;
export default function Dashboard({Produk, IKategori} :DashboardProps) {

    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content  bg-white pb-6">
                 {/* Hero Section */}
                <HeroHijab></HeroHijab>
                 {/* <section Produk"> */}
                        <Popular Produk={Produk}></Popular>
                        <Kategori IKategori={IKategori}></Kategori>
             </div>
           </>
    );
}
