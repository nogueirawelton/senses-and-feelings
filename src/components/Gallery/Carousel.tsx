import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
interface CarouselProps {
  index: number;
  col: string;
  row: string;
  images: string[];
}

export function Carousel({ index, col, row, images }: CarouselProps) {
  return (
    <div
      style={{
        gridColumn: col,
        gridRow: row,
      }}
    >
      <Swiper
        className="h-full w-full"
        direction={index % 2 ? "horizontal" : "vertical"}
        modules={[Autoplay]}
        speed={1000}
        loop={images.length > 1}
        spaceBetween={8}
        autoplay={{
          delay: Math.ceil(Math.random() * (20 - 5) + 5) * 1000,
        }}
      >
        {images.map((image, imageIndex) => (
          <SwiperSlide key={`${image}-${imageIndex}`}>
            <a href={image} data-fancybox="all">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
