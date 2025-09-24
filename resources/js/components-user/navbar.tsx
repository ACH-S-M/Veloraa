
import { NavItem } from "@/types";
import { Link } from "@inertiajs/react";

export function NavBar() {


  const navitem: NavItem[] = [
    {
      title: "Menu",
      href: "/",
      isActive: true,
    },
    {
      title: "Kategori",
      href: "/",
      isActive: true,
    },
    {
      title: "Tentang",
      href: "/",
      isActive: true,
    },
  ];

  return (
    <nav className={"w-1/3"}>
      <ul className={"w-full flex gap-6 text-black "}>
        {navitem.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex items-center gap-2 cursor-pointer ${item.isActive ? "font-bold" : ""}`}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
