import { HouseSimple, Info, TextAlignRight } from "phosphor-react";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-zinc- border">
      <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between px-4 lg:px-8">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo"
            width={138}
            height={24}
            className="h-6 lg:h-10 lg:w-48"
          />
        </Link>
        <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenu.Trigger asChild>
            <button>
              <TextAlignRight className="h-8 w-8 text-red-400" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="animate-show-down z-20 mt-[calc(2rem+1px)] w-64 bg-white p-4 shadow-md"
              align="end"
            >
              <DropdownMenu.Item
                className="rounded-sm px-1 text-zinc-500 hover:bg-red-500 hover:text-white hover:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/" className="flex h-8 items-center gap-4">
                  <HouseSimple size={20} />
                  Home
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="mt-4 rounded-sm px-1 text-zinc-500 hover:bg-red-500 hover:text-white hover:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/sobre" className="flex h-8 items-center  gap-4">
                  <Info size={20} />
                  Sobre
                </Link>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
