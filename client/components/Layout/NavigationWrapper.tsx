// BUTTON
import { Button } from "@/components/ui/button";

// WRAPpER
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ACCORDION
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// SELECT
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// MOTION
import { motion } from "framer-motion";

// NAVIGATION
import Link from "next/link";

// CONFIG NAVIGATION
import { NavigationWrapper } from "../configs/navigation";

// ICONS
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";

export function NavigationWrapperComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild className="block md:block lg:hidden">
        <motion.button
          className="flex items-center justify-center md:justify-center h-10 w-10 dark:fill-white rounded-full focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AlignJustify />
        </motion.button>
      </SheetTrigger>

      <SheetContent className="flex flex-col h-full pt-10 overflow-auto">
        {NavigationWrapper.map((item, index) => (
          <div key={index}>
            {Array.isArray(item.path) ? (
              ""
            ) : (
              <Link key={index} href={item.path}>
                <motion.div
                  className="w-full flex gap-3 items-center justify-start text-sm hover:bg-blue-500 hover:text-white p-3 rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.itemName}
                </motion.div>
              </Link>
            )}
            {index === 1 && (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" text-sm hover:no-underline p-3">
                    Servicios
                  </AccordionTrigger>

                  {NavigationWrapper.map((item, index) => (
                    <div key={index}>
                      {Array.isArray(item.path)
                        ? item.path.map((subPath, subIndex) => (
                            <AccordionContent>
                              <motion.div
                                className="w-full flex gap-3 items-center justify-start text-md  hover:text-white py-1 rounded"
                                whileHover={{ scale: 1.05 }}
                              >
                                <Link
                                  key={subIndex}
                                  href={subPath}
                                  className="w-full "
                                >
                                  <div className="w-full flex gap-3 items-center justify-start hover:bg-blue-500 hover:text-white p-3 rounded indent-5">
                                    {Array.isArray(item.itemName)
                                      ? item.itemName[subIndex]
                                      : item.itemName}
                                  </div>
                                </Link>
                              </motion.div>
                            </AccordionContent>
                          ))
                        : ""}
                    </div>
                  ))}
                </AccordionItem>
              </Accordion>
            )}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
