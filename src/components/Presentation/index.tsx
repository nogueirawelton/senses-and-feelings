import { SendPhoto } from "./SendPhoto";

export function Presentation() {
  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="text-4xl font-black text-zinc-600 lg:text-6xl lg:leading-tight">
        A Simplicidade da Felicidade
      </h1>
      <div className="pt-8 lg:pt-12">
        <div>
          <p className=" text-zinc-500">
            Sentidos e Sentimentos é um projeto dedicado a explorar a natureza
            descomplicada da alegria e bem-estar.
          </p>
          <p className="pt-4 text-zinc-500">
            Através de uma mistura de psicologia, filosofia e relatos pessoais,
            o projeto investiga como momentos simples, experiências sensoriais e
            autenticidade emocional podem contribuir para uma vida mais
            gratificante.
          </p>
        </div>
        <SendPhoto />
      </div>
    </div>
  );
}
