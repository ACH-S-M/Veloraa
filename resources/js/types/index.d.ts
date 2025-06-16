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

interface PropsProdukPopuler{
    ID_Produk:number;
    nama_produk:string;
    harga_produk:number;
    gambar_produk:string;
}

interface BigPopuler{
    Produk:PropsProdukPopuler;
}

interface TypeProdukPopuler{
    Produk:PropsProdukPopuler[];
}

interface KategoriProps{
    ID_Produk:number;
    nama_produk:string;
    harga_produk:number;
    gambar_produk:string;
}

interface TypeBarangKategori{
    IKategori:KategoriProps[]
}
interface Produk{
    ID_Produk:number;
    nama_produk:string;
    harga_produk:number;
    stok:number;
    deskripsi_produk:string;
    barang_terjual:number;
}
interface ProdukProps{
    Produk:Produk[];
}
