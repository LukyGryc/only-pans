"use client"

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckoutForm } from "./CheckoutForm"
import SummaryCheckout from "./SummaryCheckout"
import { checkoutFormSchema, FormSchema } from "./checkoutSchema"

export function CheckoutWrapper() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(checkoutFormSchema),
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

    return (
        <FormProvider {...form}>
            <div className="flex-1 min-w-0 space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
                <CheckoutForm />
            </div>
            <SummaryCheckout />
        </FormProvider>
    )
}
