"use client";

import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Autoplay from "embla-carousel-autoplay";

import { easeIn, motion } from "framer-motion";

import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";

import { useTheme } from "next-themes";

enum Roles {
  DISEÑADOR = "Diseñador",
  PROGRAMADOR_FRONTEND = "Programador front-end",
  PROGRAMADOR_BACKEND = "Programador back-end",
  PROGRAMADOR_FULLSTACK = "Programador full-stack",
  INGENIERO_REDES = "Ingeniero en redes",
  CEO = "CEO",
}

interface DataType {
  nombre: string;
  rol: string;
  img: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  github?: string;
  correo?: string;
}

const data: DataType[] = [
  {
    nombre: "Manuel",
    rol: Roles.CEO,
    img: "/images/manuel/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Ruben",
    rol: Roles.INGENIERO_REDES,
    img: "/images/ruben/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Ariel",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ariel/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Vicente",
    rol: Roles.PROGRAMADOR_FRONTEND,
    img: "/images/vicente/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Juan",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/juan/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Ayrton",
    rol: Roles.DISEÑADOR,
    img: "/images/ayrton/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/ayrtondyne/",
    facebook: "",
    github: "",
    correo: "mailto:kenaguirosado@gmail.com",
  },
  {
    nombre: "Ken",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.png",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "mailto:kenaguirosado@gmail.com",
  },
];

export function EmblaCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="flex items-center justify-center w-full py-8 ">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-screen-lg py-4 px-4"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-1 py-3">
            {data.map((dato, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Card className=" flex items-center justify-center shadow-md shadow-slate-400 h-full">
                  <CardContent className="flex flex-col items-center gap-3 justify-center  h-full">
                    <div className="w-full h-full">
                      <div className="flex flex-col w-full justify-center items-center  ">
                        <span>{dato.nombre}</span>
                        <Avatar className="w-24 h-24">
                          <AvatarImage src={dato.img} alt="perfil" />
                          <AvatarFallback>HM</AvatarFallback>
                        </Avatar>
                      </div>
                      <ul className="flex flex-col gap-3 p-2 w-full  ">
                        <motion.li className="flex flex-row gap-4 items-center cursor-default px-3">
                          {dato.rol}
                        </motion.li>

                        {dato.github !== "" ? (
                          <motion.li
                            className="flex flex-row gap-4 items-center w-full px-3 py-2 cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            whileInView={{ transition: easeIn }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="h-6 w-6 " />

                            <a href={dato.github} target="_blank">
                              Github
                            </a>
                          </motion.li>
                        ) : (
                          ""
                        )}

                        {dato.linkedin !== "" ? (
                          <motion.li
                            className="flex flex-row gap-4 items-center w-full px-3 py-2 cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            whileInView={{ transition: easeIn }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="h-6 w-6 " />
                            <a href={dato.linkedin}>Linkedin</a>
                          </motion.li>
                        ) : (
                          ""
                        )}

                        {dato.facebook !== "" ? (
                          <motion.li
                            className="flex flex-row gap-4 items-center w-full px-3 py-2 cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            whileInView={{ transition: easeIn }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Facebook className="h-6 w-6 " />
                            <a href={dato.facebook}>Facebook</a>
                          </motion.li>
                        ) : (
                          ""
                        )}

                        {dato.instagram !== "" ? (
                          <motion.li
                            className="flex flex-row gap-4 items-center w-full px-3 py-2 cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            whileInView={{ transition: easeIn }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Instagram className="h-6 w-6 " />
                            <a href={dato.instagram}>Instagram</a>
                          </motion.li>
                        ) : (
                          ""
                        )}

                        {dato.correo !== "" ? (
                          <motion.li
                            className="flex flex-row gap-4 items-center w-full px-3 py-2 cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            whileInView={{ transition: easeIn }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail className="h-6 w-6 " />
                            <a href={dato.correo}>Correo</a>
                          </motion.li>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:hidden lg:block" />
          <CarouselNext className="hidden md:hidden lg:block" />
        </Carousel>
      </div>
    </>
  );
}
