import { Head } from '@inertiajs/react';
import { Card_PopulerSmall } from '@/components-user/Card-PopulerSmall';
import {Navbaruser} from '@/components-user/navbar-user';
import { LayoutPopuler } from '@/components/ui/layoutPopuler';
import {  type TypeProdukPopuler} from '@/types';
import { type TypeBarangKategori } from '@/types';
import { HeroHijab } from './hero1';

type DashboardProps = TypeProdukPopuler & TypeBarangKategori;
export default function Dashboard({Produk} :DashboardProps) {

    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content user-dashboard bg-white pb-6">
                 {/* Hero Section */}
                <HeroHijab></HeroHijab>
                 {/* <section Produk"> */}
                    <LayoutPopuler Produk={Produk}></LayoutPopuler>
             </div>
           </>
    );
}
