"use client";

// REACT
import { useState, ChangeEvent } from "react";

// SEPARATOR
import { Separator } from "@/components/ui/separator";

// SLIDER
import { Slider } from "@/components/ui/slider";

// BADGE
import { Badge } from "@/components/ui/badge";

// CONST
import { categories } from "../consts/Categories";
import { technologie } from "../consts/Technologies";

// VALIDATIONS
import { filterSchema } from "@/util/Validation";

// ICONS
import { Filter } from "lucide-react";

// NAVIGATION
import Link from "next/link";

// FORM
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SidebarWeb() {
  const [quantity, setQuantity] = useState<number>(0);

  const handleSliderChange = (newValues: number[]) => {
    const newValue = newValues[0];
    setQuantity(newValue);
  };

  return (
    <>
      <div className=" flex flex-col h-full w-full px-5 py-3">
        {/* CATEGORIE SECTION */}

        <div className="flex flex-wrap gap-3 h-auto p-4 ">
          {categories.map((item, index) => (
            <Link key={index} href={item.path}>
              <Badge variant="outline" className="px-3">
                {item.categorie}
              </Badge>
            </Link>
          ))}
        </div>

        {/* TECHNOLOGY SECTION */}

        <Separator className="bg-black" />

        <div className="flex flex-wrap gap-3 h-auto p-4 ">
          {technologie.map((item, index) => (
            <Link key={index} href={item.path}>
              <Badge variant="outline" className="px-3">
                {item.technologie}
              </Badge>
            </Link>
          ))}
        </div>

        <Separator className="bg-black" />

        {/* PRICICING SECTION */}

        <div className="flex flex-wrap gap-3 h-auto p-4 ">
          <Formik
            enableReinitialize={true}
            initialValues={{
              finalValue: quantity,
            }}
            validationSchema={filterSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="flex flex-col w-full gap-5">
              <div className="flex gap-3">
                <label>$</label>
                <Field
                  type="text"
                  name="finalValue"
                  id="finalValue"
                  value="0"
                />
              </div>
              <Slider
                onValueChange={(newValue) => handleSliderChange(newValue)}
                value={[quantity]}
                name="finalValue"
                min={0}
                max={100}
              />

              <div className="flex gap-3">
                <label>$</label>
                <Field
                  type="text"
                  name="finalValue"
                  id="finalValue"
                  value={quantity}
                />
              </div>
              <ErrorMessage name="finalValue" id="finalValue" />

              <div className=" flex justify-center w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-blue-200 max-w-max px-5 py-3 rounded-full"
                >
                  <Filter />
                  Filtrar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
