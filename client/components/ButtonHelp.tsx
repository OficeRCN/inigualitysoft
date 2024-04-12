"use client";

// IMAGES
import Image from "next/image";

// ICONS
import { BadgeInfo } from "lucide-react";
import { Facebook } from "lucide-react";

// POPOVER
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// BUTTON
import { Button } from "./ui/button";

export default function ButtonHelpComponent() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="">
            <BadgeInfo />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <div className="flex flex-col gap-3">
            <Facebook />
            <Image src="/icons/whatsapp.png" width={20} height={20} alt="Icon" />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
