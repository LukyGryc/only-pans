"use client"

import * as React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { toast } from "sonner"

import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createOrder } from "@/server/order"
import { useCartStore } from "@/store/cartStore"
import { FormSchema } from "@/app/checkout/checkoutSchema"

interface FieldConfig {
    name: keyof FormSchema,
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
    const form = useFormContext<FormSchema>()

  async function onSubmit(data: FormSchema) {
    try {
        if (products.length === 0) {
            toast.error("Your cart is empty.");
            return;
        }

        await createOrder(data, products)
        clearCart();
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
