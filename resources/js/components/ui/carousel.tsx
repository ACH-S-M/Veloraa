import { Carousel } from "flowbite-react";

export default function Component() {
  return (
    <div className="h-[300px] w-1/2 mx-auto overflow-x-hidden">
      <Carousel className="overflow-x-hidden">
        <div className="flex h-full items-center justify-center bg-gray-500 dark:bg-gray-700 dark:text-white">
          <img
            src="img/kucing1.jpeg"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="img/kucing2.jpeg"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            src="img/kucing2.jpeg"
            alt="kucing"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
