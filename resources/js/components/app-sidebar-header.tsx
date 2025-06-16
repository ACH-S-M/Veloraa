import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Navlogo } from '@/components-user/nav-logo';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="  py-10 flex h-16 shrink-0 items-center bg-[#5A94C1] gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2 p-3 justify-between w-full"> {/* Ini adalah header buat atasss deket breadcumb*/}
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <Navlogo></Navlogo>
            </div>
        </header>
    );
}
