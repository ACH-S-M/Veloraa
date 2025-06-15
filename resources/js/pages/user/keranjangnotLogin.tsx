import React from "react";
import { Head } from '@inertiajs/react';
import {Navbaruser} from '@/components-user/navbar-user';
export default function(){
    return<>
        <Head title="Keranjang"></Head>
        <Navbaruser></Navbaruser>
        <div className="content pt-24">
            <h1>Login Terlebih dahulu Baru Bisa Akses Keranjang</h1>
        </div>
    </>
}
