import { Carousel } from "flowbite-react";
import {Link} from '@inertiajs/react';

export default function Component() {
  return (
    <div className="h-[300px] max-w-9/12 mx-auto overflow-x-hidden">
      <Carousel className="overflow-x-hidden">
       <Link href="/youtube.com">
       <div className="flex h-full items-center justify-center bg-gray-500 dark:bg-gray-700 dark:text-white">

          <img
            src="img/banner1.png"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
       </Link>
       <Link href="/youtube.com">
       <div className="flex h-full items-center justify-center bg-gray-500 dark:bg-gray-700 dark:text-white">

          <img
            src="img/banner2.png"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
       </Link>
       <Link href="/youtube.com">
       <div className="flex h-full items-center justify-center bg-gray-500 dark:bg-gray-700 dark:text-white">

          <img
            src="img/banner3.png"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
       </Link>
      </Carousel>
    </div>
  );
}
