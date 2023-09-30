import { Carousel } from "./Carousel";
import { useMemo } from "react";
import carouselsConfig from "./config";
import { CircleNotch } from "phosphor-react";
import chunkArray from "../../utils/chunkArray";
import { usePhotos } from "../../hooks/usePhotos";

export function Gallery() {
  const { photos } = usePhotos();

  const pagination = useMemo(() => chunkArray(photos), [photos]);

  if (!photos.length) {
    return (
      <div className="grid place-items-center">
        <CircleNotch className="h-12 w-12 animate-spin text-red-400" />
      </div>
    );
  }

  return (
    <div className="grid h-[320px] w-full grid-cols-12 grid-rows-6 gap-2 lg:h-[calc(100vh-16rem-2px)]">
      {carouselsConfig.map(({ col, row }, index) => (
        <Carousel
          index={index}
          col={col}
          row={row}
          images={pagination[index]}
          key={index}
        />
      ))}
    </div>
  );
}
