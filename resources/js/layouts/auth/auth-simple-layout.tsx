
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="bg-blue flex min-h-screen">
        <div className="w-full md:w-1/3 h-auto bg-white flex flex-col  ">
          <img src="/img/logoAir.png" alt="logo" className="w-[100px] mx-auto" />
          <div className="flex flex-col items-center gap-4">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-medium text-[#035F79]">{title}</h1>

            </div>
          </div>
          {children}
        </div>

        <img
          src="/img/frameLogin.png"
          alt="foto"
          className="hidden md:block md:w-3/4 md:h-screen object-cover brightness-50"
        />
      </div>

    );
}
