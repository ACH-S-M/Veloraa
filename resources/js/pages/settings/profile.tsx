import { type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import DeleteUser from '@/components/delete-user';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navbaruser } from '@/components-user/navbar-user';
import ProfileLayout from '@/layouts/ProfileLayout';

type ProfileForm = {
    name: string;
    email: string;
}

export default function Profile({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    return (
        <div>
    <Head title="Profile settings" />
    <Navbaruser />
        <ProfileLayout>
        <div className="min-h-screen w-full bg-gradient-to-br from-teal-50 to-cyan-50 p-6 pt-36">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r bg-blue-400 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-teal-800 mb-2">Profile Information</h1>
                    <p className="text-teal-600">Update your name and email address to keep your account current</p>
                </div>

                {/* Main Form Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
                    <div className="bg-gradient-to-r bg-blue-400 px-8 py-6">
                        <h2 className="text-xl font-semibold text-white flex items-center">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Edit Profile
                        </h2>
                        <p className="text-teal-100 mt-1">Keep your profile information up to date</p>
                    </div>

                    <form onSubmit={submit} className="p-8 space-y-8">
                        {/* Name Field */}
                        <div className="space-y-3">
                            <Label htmlFor="name" className="text-teal-700 font-semibold flex items-center">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Full Name
                            </Label>
                            <div className="relative">
                                <Input
                                    id="name"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 bg-white"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                />
                                <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            {errors.name && (
                                <div className="flex items-center mt-2 text-red-600">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <InputError className="text-sm" message={errors.name} />
                                </div>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-teal-700 font-semibold flex items-center">
                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Address
                            </Label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-teal-100 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-200 text-gray-800 bg-white"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoComplete="username"
                                    placeholder="Enter your email address"
                                />
                                <svg className="w-5 h-5 text-teal-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            {errors.email && (
                                <div className="flex items-center mt-2 text-red-600">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <InputError className="text-sm" message={errors.email} />
                                </div>
                            )}
                        </div>

                        {/* Email Verification Notice */}
                        {mustVerifyEmail && auth.user.email_verified_at === null && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-amber-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-amber-800 mb-2">Email Verification Required</h3>
                                        <p className="text-amber-700 text-sm mb-3">
                                            Your email address is unverified. Please verify your email to access all features.
                                        </p>
                                        <Link
                                            href={route('verification.send')}
                                            method="post"
                                            as="button"
                                            className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Resend Verification Email
                                        </Link>
                                    </div>
                                </div>

                                {status === 'verification-link-sent' && (
                                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <div className="flex items-center text-green-800">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm font-medium">A new verification link has been sent to your email address.</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Submit Button and Success Message */}
                        <div className="flex items-center justify-between pt-6 border-t border-teal-100">
                            <div className="flex items-center gap-4">
                                <Button
                                    disabled={processing}
                                    className="px-8 py-3 bg-gradient-to-r bg-blue-400 hover:from-teal-700 hover:to-teal-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                                    <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm font-medium">Profile updated successfully!</span>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Additional Info Card */}
                <div className="bg-white rounded-xl border border-teal-100 p-6 shadow-lg">
                    <div className="flex items-start">
                        <svg className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="font-semibold text-teal-800 mb-2">Profile Security</h3>
                            <p className="text-teal-600 text-sm">
                                Keep your profile information current to ensure account security and better user experience.
                                Changes to your email address may require verification.
                            </p>
                        </div>
                    </div>
                </div>

                <DeleteUser />
            </div>
        </div>
        </ProfileLayout>
        </div>
    );
}
