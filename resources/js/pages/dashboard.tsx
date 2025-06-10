
import { Head } from '@inertiajs/react';
import Slider from '../components/ui/carousel';
import {Component} from '@/components/ui/card-ecom'
import {Navbaruser} from '@/components-user/navbar-user';
export default function Dashboard() {
    return (
           <>
             <Head title="Menu" />
             <Navbaruser></Navbaruser>
              <div className="main-content md:pt-24 bg-white">
                    <h1> Ini user biasa  </h1>
                        <Slider></Slider>
                        <Component></Component>
              </div>
           </>

    );
}
