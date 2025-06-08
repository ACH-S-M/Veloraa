
import AppLayout from '@/layouts/app-layout-user';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Slider from '../components/ui/carousel';
import {Component} from '@/components/ui/card-ecom'
const breadcrumbs: BreadcrumbItem[] = [
    {
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu" />

           <h1> Ini user biasa  </h1>
           <Slider></Slider>
            <Component></Component>


        </AppLayout>
    );
}
