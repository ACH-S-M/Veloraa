import { type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navbaruser } from '@/components-user/navbar-user';
import ProfileLayout from '@/layouts/ProfileLayout';

type AlamatForm = {
    alamat: string;
    kota: string;
    kode_pos: string;
}

// Extend the user type to include pelanggan data
type UserWithPelanggan = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    pelanggan?: {
        alamat?: string;
        kota?: string;
        kode_pos?: string;
        no_telp?: string;
    };
}

export default function AlamatPelanggan() {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user as UserWithPelanggan;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<AlamatForm>>({
        alamat: user.pelanggan?.alamat || '',
        kota: user.pelanggan?.kota || '',
        kode_pos: user.pelanggan?.kode_pos || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('alamat.update'), {
            preserveScroll: true,
        });
    };

    return (
        <div>
            <Head title="Address settings" />
            <Navbaruser />
            <ProfileLayout>
                <div className="min-h-screen w-full bg-gradient-to-br from-teal-50 to-cyan-50 p-6 pt-36">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r bg-blue-400 rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-teal-800 mb-2">Address Information</h1>
                            <p className="text-teal-600">Update your address, city, and postal code for accurate delivery</p>
                        </div>

                        {/* Main Form Card */}
                        <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
                            <div className="bg-gradient-to-r bg-blue-400 px-8 py-6">
                                <h2 className="text-xl font-semibold text-white flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Address
                                </h2>
                                <p className="text-teal-100 mt-1">Keep your address information up to date for smooth deliveries</p>
                            </div>

                            <form onSubmit={submit} className="p-8 space-y-8">
                                {/* Address Field */}
                                <div className="space-y-3">
                                    <Label htmlFor="alamat" className="text-teal-700 font-semibold flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        Complete Address
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="alamat"
                                            className="w-full pl-12 pr-4 py-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 bg-white"
                                            value={data.alamat}
                                            onChange={(e) => setData('alamat', e.target.value)}
                                            required
                                            autoComplete="street-address"
                                            placeholder="Enter your complete address"
                                        />
                                        <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    </div>
                                    {errors.alamat && (
                                        <div className="flex items-center mt-2 text-red-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <InputError className="text-sm" message={errors.alamat} />
                                        </div>
                                    )}
                                </div>

                                {/* City Field */}
                                <div className="space-y-3">
                                    <Label htmlFor="kota" className="text-teal-700 font-semibold flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        City
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="kota"
                                            className="w-full pl-12 pr-4 py-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 bg-white"
                                            value={data.kota}
                                            onChange={(e) => setData('kota', e.target.value)}
                                            required
                                            autoComplete="address-level2"
                                            placeholder="Enter your city"
                                        />
                                        <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    {errors.kota && (
                                        <div className="flex items-center mt-2 text-red-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <InputError className="text-sm" message={errors.kota} />
                                        </div>
                                    )}
                                </div>

                                {/* Postal Code Field */}
                                <div className="space-y-3">
                                    <Label htmlFor="kode_pos" className="text-teal-700 font-semibold flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        Postal Code
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="kode_pos"
                                            className="w-full pl-12 pr-4 py-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 bg-white"
                                            value={data.kode_pos}
                                            onChange={(e) => setData('kode_pos', e.target.value)}
                                            required
                                            autoComplete="postal-code"
                                            placeholder="Enter your postal code"
                                        />
                                        <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    {errors.kode_pos && (
                                        <div className="flex items-center mt-2 text-red-600">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <InputError className="text-sm" message={errors.kode_pos} />
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button and Success Message */}
                                <div className="flex items-center justify-between pt-6 border-t border-teal-100">
                                    <div className="flex items-center gap-4">
                                        <Button
                                            disabled={processing}
                                            className="px-8 py-3 bg-gradient-to-r bg-blue-400 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        >
                                            {processing ? (
                                                <div className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Saving...
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Simpan Perubahan
                                                </div>
                                            )}
                                        </Button>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out duration-300"
                                            enterFrom="opacity-0 transform translate-x-2"
                                            enterTo="opacity-100 transform translate-x-0"
                                            leave="transition ease-in-out duration-300"
                                            leaveTo="opacity-0 transform -translate-x-2"
                                        >
                                            <div className="flex items-center text-green-600">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="font-medium">Address updated successfully!</span>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ProfileLayout>
        </div>
    );
}
