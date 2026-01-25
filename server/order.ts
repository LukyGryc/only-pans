"use server";

import { db } from "@/db/drizzle";
import { inventory, orders } from "@/db/schema";
import { revalidateTag } from "next/cache";
import { ProductInCart } from "@/types/products";
import { eq, sql } from "drizzle-orm";

export async function createOrder(contact: OrderInformation, items: ProductInCart[]){

    const { address, city, email, firstName, lastName, phone, zipCode } = contact;
    
    try{
        await db.transaction( async (tx) => {
            
            for (const item of items) {
                const inventoryItem = await tx
                .select()
                .from(inventory)
                .where(eq(inventory.id, item.id))
                .limit(1);
                
                if (!inventoryItem) {
                    throw new Error("Item not found in inventory");
                }
                if (inventoryItem[0].stock < item.quantity) {
                    throw new Error("Not enough stock for item, readjust your cart");
                }
            }

            await tx.insert(orders).values({ 
                address,
                city,
                email,
                firstName,
                lastName,
                phone,
                zipCode,
                items: JSON.stringify(items),
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
        });

        revalidateTag("inventory", "max");
    } catch (e){
        console.log(e)
        throw new Error(e instanceof Error ? e.message : "Failed to create new order")
    }
}