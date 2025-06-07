import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';

export function AppSidebar() {
    const navItemValue :NavItem[] =[
        {
            title : "Dashboard admin",
            href : "/admin",
        },
    ]
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
              <NavUser />
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={navItemValue} /> {/* INI buat admin templatenya isinya biar beda  */}
            </SidebarContent>
        </Sidebar>
    );
}


