import { NavItem } from "@/types";
import { LayoutGrid,ShoppingCart } from "lucide-react";
import { Link } from "@inertiajs/react";

export function MobileNavBar() {


  const navitem: NavItem[] = [
    {
      title: "Menu",
      href: "/",
      icon: LayoutGrid,
      isActive: true,
    },
    {
      title: "Keranjang",
      href: route('keranjang'),
      icon: ShoppingCart,
      isActive: true,
    },
  ];

  return (
    <nav className={"w-full  h-screen p-4"}>
      <ul className={"w-full flex gap-4 h-1/2 flex-col"}>
        {navitem.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className={`flex items-center gap-2 cursor-pointer ${item.isActive ? "font-bold" : ""}`}
            >
              <Icon className="w-4 h-4" />
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
