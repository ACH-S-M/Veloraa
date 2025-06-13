
import { Head } from '@inertiajs/react';
import Slider from '../components/ui/carousel';
import {Navbaruser} from '@/components-user/navbar-user';
import { Popular } from '@/components-user/Layout-popular';
import { type TypeBarang} from '@/types';
import { Kategori } from '@/components-user/kategori';
export default function Dashboard({Barang}:TypeBarang) {
    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content md:pt-24 bg-white">
                    <h1> Ini user biasa  </h1>
                        <Slider></Slider>
                        <Popular Barang={Barang}></Popular>
                        <Kategori></Kategori>
             </div>
           </>

    );
}
