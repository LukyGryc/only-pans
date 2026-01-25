"use server";

import { db } from "@/db/drizzle";
import { orders } from "@/db/schema";
import { CartItem } from "@/types/products";

export async function createOrder(contact: OrderInformation, items: CartItem[]){

    const { address, city, email, firstName, lastName, phone, zipCode } = contact;
    try{
        await db.insert(orders).values({ 
            address,
            city,
            email,
            firstName,
            lastName,
            phone,
            zipCode,
            items,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }catch(e){
        console.log(e);
        throw new Error("Failed to create new order")
    }
}