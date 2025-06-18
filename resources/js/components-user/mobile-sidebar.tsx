import { Menu } from "lucide-react";
import { MobileNavBar } from "./mobile-navbar";
import { Navaccount } from "./nav-account";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild >
        <button
          className="p-2 text-white hover:bg-blue-500 rounded-md transition"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-blue-400">
        <div className="flex flex-col gap-4 mt-8">
           <Navaccount />
         <div className="border-t pt-4 flex flex-col">
             <MobileNavBar></MobileNavBar>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
