"use client";

// NAVIGATION
import { NavigationMenuComponent } from "./NavigationMenu";

// THEME
import { ModeToggle } from "./ToogleTheme";

export default function Header() {
  return (
    <>
      <header className="flex flex-row items-center justify-around h-20 w-full p-7">
        <div>Logo</div>
        <div>
          <NavigationMenuComponent />
        </div>
        <ModeToggle />
      </header>
    </>
  );
}
