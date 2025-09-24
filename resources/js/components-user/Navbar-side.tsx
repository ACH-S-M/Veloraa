import { Link } from '@inertiajs/react';
import { ShoppingBag } from 'lucide-react';
import { Navaccount } from './nav-account';

export function Navbarside() {
    return (
        <>
            <div className="mx-12 flex items-center gap-6">
                <Link href={route('keranjang')} className="inline-block">
                    <ShoppingBag className="h-6 w-6 text-black" />
                </Link>
                <Navaccount></Navaccount>
            </div>
        </>
    );
}
