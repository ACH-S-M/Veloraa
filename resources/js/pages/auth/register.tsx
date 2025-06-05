import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}; // Ini Tipe buat Registernya nanti ya

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({ //dia make tipe Register
        name: '',
        email: '',
        password: '',
        password_confirmation: '',  //awalnya kosong karna kalo diisi bakal jadi kaya placeholder
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault(); //biar ga ngrarah kke link lain atau kepage lain make e.preventdefault jadinya tetep aja kalo misalkan udah diklick tetep dipage ini
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Sign Up">
            <Head title="Register" />
            <form className="flex flex-col  pt-4" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid justify-center">
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                            className='bg-[#035F79] text-white placeholder-white md:w-[260px]'
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid justify-center">
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                            className='bg-[#035F79] text-white placeholder-white md:w-[260px]'
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid justify-center" >
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                            className='bg-[#035F79] text-white placeholder-white md:w-[260px]'
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid justify-center">
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                            className='bg-[#035F79] text-white placeholder-white md:w-[260px]'
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button type="submit" className="mt-2 w-1/2 flex mx-auto bg-gray-800 text-white mb-4" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-black text-center text-sm">
                    Already have an account?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
