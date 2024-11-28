import { CarouselComp } from "./section-one-comp/carousel";
import { ChoosenCard } from "./section-one-comp/choosen-card";

export const SectionOne = () => {
  return (
    <div className="flex  flex-col  max-w-[80vw] mx-auto">
      <div className=" flex justify-center items-center md:my-8 h-[60vh]">
        <CarouselComp />
      </div>
      <div>
        <ChoosenCard />
      </div>
    </div>
  );
};
