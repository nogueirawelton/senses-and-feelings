import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";

export function App() {
  return (
    <div className="flex flex-col lg:h-screen">
      <Header />
      <main className="mx-auto grid max-w-screen-2xl flex-1 grid-cols-1 items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:px-8">
        <Presentation />
        <Gallery />
      </main>
    </div>
  );
}
