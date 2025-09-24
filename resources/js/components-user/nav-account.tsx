import { UserInfo } from '@/components/user-info';
import { UserMenuContent } from '@/components/user-menu-content';
import { type SharedData } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePage } from '@inertiajs/react';

export function Navaccount() {
  const { auth } = usePage<SharedData>().props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded  text-black transition" >
          <UserInfo user={auth.user} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 mt-2">
        <UserMenuContent user={auth.user}/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

