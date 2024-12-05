import foster_buddy from "../../images/client_success/fosterbuddy.comlg.png";
import empiric from "../../images/client_success/empiric.iolg.png";
import dillionlist from "../../images/client_success/dillionlist.orglg.png";
import teamnoodle from "../../images/client_success/teamnoodle.comlg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
export default function SuccessStoriesSection() {
  const slides = [empiric, dillionlist, teamnoodle, foster_buddy];
  return (
    <section
      id="success-stories-section"
      className="my-[10rem] w-full flex flex-col items-center gap-[60px] bg-defaultwhite"
    >
      <div className="w-full gap-12 flex flex-col items-start">
        <div className="flex-col items-center gap-2 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="relative self-stretch mt-[-1.00px] font-other-caption text-[#00c2c6] text-[length:var(--other-caption-font-size)] text-center tracking-[var(--other-caption-letter-spacing)] leading-[var(--other-caption-line-height)] [font-style:var(--other-caption-font-style)] font-semibold">
            A HISTORY OF SUCCESS
          </div>

          <div className="self-stretch  font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
            Stories Of Our Success
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8 px-4">
        {/* <Carousel slides={[empiric, dillionlist, teamnoodle, foster_buddy]} /> */}
        <Carousel
          className="w-full max-w-lg"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem className="" key={index}>
                <img className="h-full w-full" src={slide} alt="slide" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
