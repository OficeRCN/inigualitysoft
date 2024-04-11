"use client";

// NAVIGATION
import { NavigationMenuComponent } from "./NavigationMenu";

// THEME
import { ModeToggle } from "./ToogleTheme";

// IMAGE
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-around h-20 w-full p-7">
        <Image
          src="/images/logo/logo-claro.svg"
          width={200}
          height={10}
          alt="LOGO"
        />
        <div>
          <NavigationMenuComponent />
        </div>
        <ModeToggle />
      </header>
    </>
  );
}
