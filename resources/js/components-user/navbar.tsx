
import { NavItem } from "@/types";
import { LayoutGrid,ShoppingCart } from "lucide-react";
import { Link } from "@inertiajs/react";

export function NavBar() {


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
    <nav className={"w-1/3"}>
      <ul className={"w-full flex gap-2"}>
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
