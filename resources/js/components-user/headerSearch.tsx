import { router } from '@inertiajs/react';
import { useState } from 'react';

export function HeaderSearch() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            console.log('Empty query, not submitting');
            return; // Don't submit empty queries
        }

        console.log('Submitting search query:', query);
        setIsSubmitting(true);

        router.get(
            route('search'),
            { q: query },
            {
                onFinish: () => setIsSubmitting(false),
                onSuccess: () => {
                    console.log('Search successful for query:', query);
                },
                onError: (errors) => {
                    console.error('Submission errors:', errors);
                    alert('Terjadi kesalahan saat memproses pencarian');
                },
            },
        );
    };

    return (
        <form onSubmit={handleSubmit} className="w-1/3 ml-12">
            <div className="relative">
                <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                    {!isSubmitting ? (
                        <svg className="h-4 w-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="6" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    ) : (
                        <svg className="h-4 w-4 text-gray-700 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="6" />
                        </svg>
                    )}
                </span>

                <input
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari barang"
                    aria-label="Cari barang"
                    className="w-full rounded bg-gray-300 p-1.5 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    disabled={isSubmitting}
                />
            </div>
        </form>
    );
}
