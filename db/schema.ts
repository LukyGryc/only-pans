import { CartItem } from "@/types/products";
import { sql } from "drizzle-orm";
import { integer, text, pgTable, timestamp, jsonb, uuid } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
    id: uuid("id").primaryKey().defaultRandom(),

    firstName: text("firstName").notNull(),
    lastName: text("lastName").notNull(),
    address: text("address").notNull(),
    city: text("city").notNull(),
    zipCode: text("zipCode").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull(),

    items: jsonb("items")
    .$type<CartItem[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
});
