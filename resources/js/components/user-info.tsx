import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type User } from '@/types';
import {CircleUser} from 'lucide-react'
export function UserInfo({
    user,
    showEmail = false,
}: {
    user: User | null;
    showEmail?: boolean;
}) {
    const getInitials = useInitials();

    if (!user) {
        return (
            <>
                <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                        <CircleUser></CircleUser>
                    </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Halo Tamu</span>
                    {showEmail && <span className="text-muted-foreground truncate text-xs">Not logged in</span>}
                </div>
            </>
        );
    }

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(user.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Halo {user.name}</span>
                {showEmail && <span className="text-muted-foreground truncate text-xs">{user.email}</span>}
            </div>
        </>
    );
}

