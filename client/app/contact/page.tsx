"use client";

// IMAGES
import Image from "next/image";

// CARDS
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// AVATAR
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ANIMATIONS
import { motion } from "framer-motion";

// FORM
import { Formik, Form, ErrorMessage, Field } from "formik";

// VALIDATIONS
import { contactSchema } from "@/util/Validation";

// ICONS
import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { MessageSquareMore } from "lucide-react";

// CUSTOM POPOVER
import ButtonHelpComponent from "@/components/ButtonHelp";

export default function Contact() {
  return (
    <>
      <motion.section className="flex justify-center items-center w-full h-[80vh]">
        <Formik
          initialValues={{ correo: "", contrasenia: "" }}
          validationSchema={contactSchema}
          onSubmit={() => console.log("hola")}
        >
          <Card className="p-8 w-full md:w-4/6 lg:w-5/12">
            <CardTitle className="flex justify-center p-5">
              <Avatar className=" w-28 h-28">
                <AvatarImage src="/images/logo/ico-login.png"></AvatarImage>
                <AvatarFallback>IC</AvatarFallback>
              </Avatar>
            </CardTitle>

            <CardContent>
              {
                <Form className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <Mail />
                    <Field
                      className=" h-11 p-5 focus:outline-none border-b-2 border-b-black w-full"
                      name="correo"
                      type="email"
                      placeholder="Correo electrónico"
                    />
                  </div>
                  <ErrorMessage name="correo" component="div" />

                  <div className="flex items-center gap-3">
                    <MessageSquareMore />
                    <Field
                      className=" h-20 p-5 focus:outline-none border-b-2 border-b-black w-full overflow-auto"
                      name="message"
                      as="textarea"
                      placeholder="Type yout message here."
                    />
                  </div>
                  <ErrorMessage name="message" component="div" />
                  <div className="flex items-center justify-center md:justify-end w-full lg:justify-end px-5">
                    <motion.button
                      type="submit"
                      className="flex gap-3 rounded-full px-5 py-3 border-2 border-black hover:shadow-lg shadow-slate-900"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send
                      <Send />
                    </motion.button>
                  </div>
                </Form>
              }
            </CardContent>
          </Card>
        </Formik>
      </motion.section>

      <div>
        <ButtonHelpComponent />
      </div>
    </>
  );
}
