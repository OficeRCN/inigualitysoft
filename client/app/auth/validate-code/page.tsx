"use client";

// CARDS
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// AVATAR
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// ANIMATIONS
import { motion } from "framer-motion";

// FORM
import { Formik, Form, ErrorMessage, Field } from "formik";

// VALIDATIONS
import { forgotPasswordSchema } from "@/util/Validation";

// ICONS
import { Send } from "lucide-react";

// INPUT OTP
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ValidateCode() {
  return (
    <>
      <motion.section className="flex  justify-center items-center w-full h-[80vh]">
        <Formik
          initialValues={{ correo: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={() => console.log("hola")}
        >
          <Card className=" border-2  p-8 w-full md:w-4/6 lg:w-5/12">
            <CardTitle className="flex justify-center p-5">
              <Avatar className=" w-28 h-28">
                <AvatarImage src="/images/logo/ico-login.png"></AvatarImage>
                <AvatarFallback>IC</AvatarFallback>
              </Avatar>
            </CardTitle>
            <CardContent>
              {
                <Form className="flex flex-col gap-5">
                  <div className="flex flex-col md:flex-col lg:flex-row gap-6 w-full justify-center items-center py-3">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot className="border-black" index={0} />
                        <InputOTPSlot className="border-black" index={1} />
                        <InputOTPSlot className="border-black" index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot className="border-black" index={3} />
                        <InputOTPSlot className="border-black" index={4} />
                        <InputOTPSlot className="border-black" index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <motion.button
                      type="submit"
                      className="flex gap-3 max-w-max rounded-full px-5 py-3 border-2 border-black hover:shadow-lg shadow-slate-900"
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
            <CardFooter className="py-5">
              <a
                href="/auth/forgot-password"
                className=" opacity-60 hover:opacity-100 italic"
              >
                You do not recive an email? Try again.
              </a>
            </CardFooter>
          </Card>
        </Formik>
      </motion.section>
    </>
  );
}
