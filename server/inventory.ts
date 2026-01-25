"use server";

import { db } from "@/db/drizzle";
import { inventory } from "@/db/schema";

export async function getInventory(){
    try{
        return await db.select().from(inventory);
    }catch{
        throw new Error("Failed to create new order")
    }
}