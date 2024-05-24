
import { Carousel } from "flowbite-react";

const CarouselCustomTheme = {
  scrollContainer: {
    "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    "snap": "snap-x"
  }
}
function CarouselMain() {
  return (
    <div className="h-40 sm:h-64 xl:h-[70vh] relative">
      <Carousel slideInterval={4000} theme={CarouselCustomTheme}>
        <img src="/images/carousel/carousel_1.webp" alt="imagen feria de huancaro" className="object-cover"/>
        <img src="/images/carousel/carousel_2.webp" alt="imagen feria de huancaro" className="object-cover"/>
        <img src="/images/carousel/carousel_3.webp" alt="imagen feria de huancaro" className="object-cover"/>
        <img src="/images/carousel/carousel_4.webp" alt="imagen feria de huancaro" className="object-cover"/>
        
      </Carousel>
      <div className="absolute bottom-10 lg:top-[35%] xl:top-[50%] right-16 lg:right-[12%] text-white hidden md:block ">
        <h4 className="text-xl md:text-4xl lg:text-7xl font-midnight font-normal">Huancaro</h4>
        <h4 className="text-xl md:text-4xl lg:text-8xl font-midnight font-normal">te Espera!</h4>
      </div>
    </div>
  );
}

export default CarouselMain;
