"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import image1 from "../../../../../public/assets/doodle-1.png";
import image2 from "../../../../../public/assets/doodle-2.png";
import image3 from "../../../../../public/assets/doodle-3.png";
import image4 from "../../../../../public/assets/doodle-4.png";

export const CarouselComp = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      id="carousel-doodle-image"
    >
      <CarouselContent>
        {[image1, image2, image3, image4].map((asset, index) => (
          <CarouselItem key={index}>
            <Image
              src={asset}
              alt="index"
              width={1200}
              height={1000}
              className="lg:w-[30vw] sm:w-[50vw] w-[80vw]  mx-auto"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
