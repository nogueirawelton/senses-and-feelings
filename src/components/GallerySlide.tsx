import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
interface GallerySlideProps {
  colStart: number;
  colEnd: number;
  rowStart: number;
  rowEnd: number;
  images: string[];
  direction: "horizontal" | "vertical";
}

export function GallerySlide({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  images,
  direction,
}: GallerySlideProps) {
  return (
    <div
      className={`col-start-${colStart} bg-yellow-400" col-end-${colEnd} row-start-${rowStart} row-end-${rowEnd}`}
    >
      <Swiper
        className="h-full w-full"
        direction={direction}
        modules={[Autoplay]}
        speed={1000}
        loop={images.length > 1}
        spaceBetween={8}
        autoplay={{
          delay: Math.ceil(Math.random() * (20 - 5) + 5) * 1000,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
