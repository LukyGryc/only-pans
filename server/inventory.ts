"use server";

import { db } from "@/db/drizzle";
import { inventory } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

async function fetchInventory() {
    const rows = await db.select().from(inventory).orderBy(asc(inventory.id));
    return rows;
}

export const getInventoryCached = unstable_cache(
    async () => {
        try {
            return await fetchInventory();
        } catch {
            throw new Error("Failed to retrieve the inventory");
        }
    },
    ["inventory-list"],
    { tags: ["inventory"], revalidate: 3600 }
);

export async function getInventory() {
    try {
        return await fetchInventory();
    } catch {
        throw new Error("Failed to retrieve the inventory");
    }
}

export async function getProduct(id: string) {
    try {
        const rows = await db
            .select()
            .from(inventory)
            .where(eq(inventory.id, id))
            .limit(1);
        return rows[0] ?? null;
    } catch {
        throw new Error("Failed to retrieve the product");
    }
}