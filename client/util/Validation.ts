import * as Yup from "yup"

export const loginSchema = Yup.object({
    correo: Yup.string()
        .email("Type a valid email.")
        .min(6, 'Too Short!')
        .required('Email is required')
        .test("has-a-correct-email", "Domain is not supported", (value) => {

            if (!value) return false;

            const validateDomains = ["gmail.com", "outlook.com",
                "hotmail.com", "yahoo.com"]

            const domain = value.split("@",)[1];

            return validateDomains.includes(domain);

        })
    ,
    contrasenia: Yup.string().required("Password is required").min(8, "Password must have no less than 8 characters. Please, try again.")
})

export const forgotPasswordSchema = Yup.object({
    correo: Yup.string()
        .required("Email is required")
        .test("has-a-valid-email", "Domain is not supported", (value) => {
            if (!value) return false;

            const validateDomains = ["gamil.com", "outlook.com", "yahoo.com", "hotmail.com"]

            const domain = value.split("@")[1]

            return validateDomains.includes(domain)

        })
})

export const resetPassword = Yup.object({
    password: Yup.string().required("Password required.")
        .min(6, "Must be at least 6 characters.")
        .max(12, "Password would not be more than 12 characters.")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter.")
        .matches(/[0-9]/, "Must contain at least one number.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one special character.")
        .matches(/^\S*$/, "Password cannot contain whitespace."),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords does not match, please try again.')
        .required("Password required.").min(6, "Must be at least 6 characters.").max(12, "Password would not be more than 12 characters."),
});

export const contactSchema = Yup.object({
    correo: Yup.string()
        .required("Email is required")
        .test("has-a-valid-domain", "Domain is not supported", (value) => {
            if (!value) return false;

            const validateDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];

            const domain = value.split("@")[1];

            return validateDomains.includes(domain);

        }),
    message: Yup.string()
        .required("Type a message to send")
        .min(10, "Message must have more than 10 characters.")
        .max(80, "Message must have not more than 25 characters.")
})

export const filterSchema = Yup.object({
    finalValue: Yup.string()
        .required("You need to set a value to filter")
        .test("is-not-zero", "The value cannot be 0", (value) => {
            return +value !== 0;
        })
});
