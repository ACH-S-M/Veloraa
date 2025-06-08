
import { Card } from "flowbite-react";

export function Component() {
  return (
    <Card
      className="w-1/4 "
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="/img/iphone.png"
    >
      <a href="#">
        <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">20.000,00 IDr</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 p-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
}
