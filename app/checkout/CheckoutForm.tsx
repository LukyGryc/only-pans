"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createOrder } from "@/server/order"
import { useCartStore } from "@/store/cartStore"

const formSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name must be at least 1 character.")
        .max(32, "First name must be at most 32 character."),
    lastName: z
        .string()
        .min(1, "Last name must be at least 1 character.")
        .max(32, "Last name must be at most 32 character."),
    address: z
        .string()
        .min(1, "Address must be at least 1 character.")
        .max(62, "Address name must be at most 64 character."),
    city: z
        .string()
        .min(1, "City must be at least 1 character.")
        .max(32, "City name must be at most 32 character."),
    zipCode: z
        .string()
        .min(1, "Zip code must be at least 1 character.")
        .max(5, "Zip code name must be at most 5 character."),
    phone: z
        .string()
        .min(1, "Phone number must be at least 1 character.")
        .max(13, "Phone number name must be at most 13 character."),
    email: z
        .email({ error: "Not a valid email address" })
})

interface FieldConfig {
    name: keyof z.infer<typeof formSchema>,
    label: string,
    placeholder: string,
    fullWidth?: boolean
}

const fields: FieldConfig[] = [
    { name: "firstName", label: "First Name", placeholder: "Peter" },
    { name: "lastName", label: "Last Name", placeholder: "Parker" },
    { name: "address", label: "Address", placeholder: "At Auntey 1", fullWidth: true },
    { name: "city", label: "City", placeholder: "New York City" },
    { name: "zipCode", label: "Zip Code", placeholder: "123 45" },
    { name: "phone", label: "Phone Number", placeholder: "123 456 789" },
    { name: "email", label: "Email", placeholder: "Peter.Parker@spidey.com" }
]

export function CheckoutForm() {
    const { products, clearCart } = useCartStore();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: ""
        },
    })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
        await createOrder(data, products)
        clearCart();
        toast.success("Yees")
        //redirect to success page
    }catch(e){
        toast.error(e instanceof Error ? e.message : "Order creation fail")
    }
  }

  return (
    <div className="flex-1 min-w-0">
        <form id="form-checkout" onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
                {fields.map(({ label, name, placeholder, fullWidth }) => (
                    <div
                        key={name}
                        className={fullWidth ? "md:col-span-2" : ""}
                    >
                        <Controller
                            name={name}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={`checkout-${name}`}>
                                        {label}
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={`checkout-${name}`}
                                        aria-invalid={fieldState.invalid}
                                        placeholder={placeholder}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                ))}
            </div>
        </form>
    </div>
  )
}
