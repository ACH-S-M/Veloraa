import { Link } from '@inertiajs/react';

export function HeroHijab() {
    return (
        <section className="relative flex h-screen w-full items-center bg-[#FDF6F6] px-6 md:px-20">
            {/* Background Wrapper */}
            <div className="absolute inset-0 hidden md:block ">
                {/* Gambar */}
                <img
                    src="/img/hero.png"
                    alt="Koleksi Hijab"
                    className="h-full w-full object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#ecdede]/80 to-white"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-20 max-w-xl space-y-4 md:space-y-6">
                <h1 className="font-lora text-4xl font-bold text-gray-900 md:text-5xl">
                    Koleksi Hijab
                    <br />
                    <span className="text-[#C79A6B]">Premium</span>
                </h1>

                <h2 className="text-lg font-medium text-[#C79A6B] md:text-xl">
                    untuk Muslimah Modern
                </h2>

                <p className="leading-relaxed text-gray-700">
                    Temukan keindahan dalam kesederhanaan dengan koleksi hijab premium kami.
                    Dibuat dari bahan berkualitas tinggi dengan desain elegan
                    yang sempurna untuk gaya hidup modern Anda.
                </p>

                <div className="flex gap-4 pt-2">
                    <Link
                        href="/koleksi"
                        className="rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 font-medium text-white shadow transition hover:opacity-90"
                    >
                        Jelajahi Koleksi →
                    </Link>
                    <Link
                        href="/katalog"
                        className="rounded-lg border border-gray-800 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-100"
                    >
                        Lihat Katalog
                    </Link>
                </div>
            </div>
        </section>
    );
}
