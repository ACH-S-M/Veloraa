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
                  <section className='w-full pt-10'>
                        <h1 className='text-4xl text-black text-center font-bold'>Koleksi Hijab Premium</h1>
                        <div className="detail w-full flex justify-center pt-4 pb-8 text-center">
                        <h3 className='text-xl font-light text-gray-500  w-1/2'>Temukan berbagai pilihan hijab berkualitas tinggi untuk setiap momen dan gaya hidup Anda</h3>
                        </div>
                        <LayoutPopuler Produk={Produk}></LayoutPopuler>

                  </section>
             </div>
           </>
    );
}
