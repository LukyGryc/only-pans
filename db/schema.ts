
import { Product } from "@/types/products";
import { sql } from "drizzle-orm";
import { text, pgTable, timestamp, jsonb, uuid, integer } from "drizzle-orm/pg-core";

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
    .$type<Product[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
});


export const inventory = pgTable("inventory", {
  id: text("id").primaryKey(),

  name: text("name").notNull().unique(),

  imageLink: text("image_link").notNull(),

  description: text("description")
    .array()
    .notNull(),

  price: integer("price").notNull(),

  features: text("features")
    .array()
    .notNull(),

  stock: integer("stock").notNull(),
});