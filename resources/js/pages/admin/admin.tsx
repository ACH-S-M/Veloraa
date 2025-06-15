import React from "react";
import AppLayout from '@/layouts/app-layout-admin';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
export default function AdminNih(){
    const breadcrumbs: BreadcrumbItem[] = [
        {
            href: '/dashboard',
        },
    ];
    return <>
         <AppLayout breadcrumbs={breadcrumbs}>
                    <Head title="Menu" />
                    <h1>eakkk ini admin</h1>
                </AppLayout>
    </>
}
