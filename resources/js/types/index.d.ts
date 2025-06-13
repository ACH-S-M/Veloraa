import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | React.ComponentType<Any>;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    [key: string]: unknown; // This allows for additional properties...
}

interface PropsBarangPopuler{
    nama_produk:string;
    harga:number;
}
interface BigPopuler{
    Barang:PropsBarangPopuler;
}
interface TypeBarangPopuler{
    Barang:PropsBarangPopuler[];
}
interface KategoriProps{
    nama_produk:string;
    harga:number;
}
interface TypeBarangKategori{
    IKategori:KategoriProps[]
}
