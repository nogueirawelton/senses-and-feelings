import { TextAlignRight } from "phosphor-react";

export function Header() {
  return (
    <header className="border-zinc- border">
      <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 lg:px-8">
        <img
          src="/logo.svg"
          alt="Logo"
          width={138}
          height={24}
          className="h-6 lg:h-10 lg:w-48"
        />
        <button>
          <TextAlignRight className="h-8 w-8 text-red-400" />
        </button>
      </div>
    </header>
  );
}
