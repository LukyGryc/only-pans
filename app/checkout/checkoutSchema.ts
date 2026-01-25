import * as z from "zod"

export const checkoutFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required.")
        .max(32, "First name must be at most 32 character."),
    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required.")
        .max(32, "Last name must be at most 32 character."),
    address: z
        .string()
        .trim()
        .min(1, "Address is required.")
        .max(64, "Address name must be at most 64 character."),
    city: z
        .string()
        .trim()
        .min(1, "City is required.")
        .max(32, "City name must be at most 32 character."),
    zipCode: z
        .string()
        .trim()
        .min(1, "Postal/Zip code is required.")
        .max(12, "Postal/Zip code must be at most 12 characters."),
    phone: z
        .string()
        .trim()
        .min(7, "Phone number must be at least 7 characters.")
        .max(20, "Phone number must be at most 20 characters."),
    email: z
        .email({ error: "Not a valid email address" })
})

export type FormSchema = z.infer<typeof checkoutFormSchema>
