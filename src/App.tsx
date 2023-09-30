import { GallerySlide } from "./components/GallerySlide";
import { Header } from "./components/Header";

const mock = [
  "https://source.unsplash.com/random/",
  "https://source.unsplash.com/random/",
  "https://source.unsplash.com/random/",
  "https://source.unsplash.com/random/",
  "https://source.unsplash.com/random/",
  "https://source.unsplash.com/random/",
];

export function App() {
  return (
    <div className="flex flex-col lg:h-screen">
      <Header />
      <main className="mx-auto grid max-w-screen-2xl flex-1 grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-2 lg:px-8">
        <div className="flex h-full flex-col justify-center">
          <h1 className="text-4xl font-black text-zinc-600 lg:text-6xl lg:leading-tight">
            A Simplicidade da Felicidade
          </h1>
          <div className="pt-8 lg:pt-12">
            <div>
              <p className=" text-zinc-500">
                Sentidos e Sentimentos é um projeto dedicado a explorar a
                natureza descomplicada da alegria e bem-estar.
              </p>
              <p className="pt-4 text-zinc-500">
                Através de uma mistura de psicologia, filosofia e relatos
                pessoais, o projeto investiga como momentos simples,
                experiências sensoriais e autenticidade emocional podem
                contribuir para uma vida mais gratificante.
              </p>
            </div>
            <button className="mt-8 inline-block rounded-md bg-red-400 px-6 py-3 font-bold text-white lg:px-8 lg:py-4">
              Faça Parte!
            </button>
          </div>
        </div>
        <div>
          <div className="grid h-[calc(100vh-12rem-2px)] w-full grid-cols-12 grid-rows-6 gap-2">
            <GallerySlide
              colStart={1}
              colEnd={6}
              rowStart={1}
              rowEnd={3}
              images={mock}
              direction="vertical"
            />
            <GallerySlide
              colStart={6}
              colEnd={13}
              rowStart={1}
              rowEnd={3}
              images={mock}
              direction="horizontal"
            />
            <GallerySlide
              colStart={1}
              colEnd={5}
              rowStart={3}
              rowEnd={5}
              images={mock}
              direction="vertical"
            />
            <GallerySlide
              colStart={5}
              colEnd={9}
              rowStart={3}
              rowEnd={5}
              images={mock}
              direction="horizontal"
            />
            <GallerySlide
              colStart={9}
              colEnd={13}
              rowStart={3}
              rowEnd={7}
              images={mock}
              direction="vertical"
            />
            <GallerySlide
              colStart={1}
              colEnd={9}
              rowStart={5}
              rowEnd={7}
              images={mock}
              direction="horizontal"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
