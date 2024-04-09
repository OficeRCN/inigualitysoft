"use client";

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

enum Roles {
  DISEÑADOR = "Diseñador",
  PROGRAMADOR_FRONTEND = "Programador front-end",
  PROGRAMADOR_BACKEND = "Programador back-end",
  PROGRAMADOR_FULLSTACK = "Programador full-stack",
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
    nombre: "Ken",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.jpg",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "kenaguirosado@gmail.com",
  },
  {
    nombre: "Pepe",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.jpg",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "kenaguirosado@gmail.com",
  },
  {
    nombre: "Payo",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.jpg",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "kenaguirosado@gmail.com",
  },
  {
    nombre: "Pepe",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.jpg",
    linkedin: "",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "kenaguirosado@gmail.com",
  },
  {
    nombre: "Payo",
    rol: Roles.PROGRAMADOR_FULLSTACK,
    img: "/images/ken/perfil.jpg",
    instagram: "https://www.instagram.com/kenatiks/",
    facebook: "https://www.facebook.com/marilu.briones.503/",
    github: "https://github.com/OficeRCN",
    correo: "kenaguirosado@gmail.com",
  },
];

export function EmblaCarousel() {
  return (
    <>
      <div className="w-full bg-blue-200">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            startIndex: 0,
          }}
          className="w-full max-w-sm border bg-red-300"
        >
          <CarouselContent className="border">
            {data.map((dato, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {dato.nombre}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
