"use server";

import { db } from "@/db/drizzle";
import { inventory, orders } from "@/db/schema";
import { ProductInCart } from "@/types/products";
import { eq, sql } from "drizzle-orm";

export async function createOrder(contact: OrderInformation, items: ProductInCart[]){

    const { address, city, email, firstName, lastName, phone, zipCode } = contact;
    try{
        await db.transaction( async (tx) => {
            await tx.insert(orders).values({ 
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

            for (const item of items) {
                await tx
                .update(inventory)
                .set({
                    stock: sql`${inventory.stock} - ${item.quantity}`,
                })
                .where(eq(inventory.id, item.id));
            }
        })
        
    }catch{
        throw new Error("Failed to create new order")
    }
}

//Get pans from DB
//Get all orders -> filter by user -> show past orders