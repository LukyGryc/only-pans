import { Product } from "@/types/products";

export const Products: Product[] = [
    { 
        id: "pan-pro",
        name: "Pan Pro", 
        image: "/pan_1.jpg",
        description: [
            "The ultimate pan for all your cooking needs. Durable, non-stick, and perfect for any kitchen.",
            "Perfect for everyday cooking and professional chefs alike.",
            "Level up your cooking game with Pan Pro."
        ],
        price: 119.99,
        features: [
            "High-quality non-stick surface",
            "Ergonomic handle design",
            "Dishwasher safe",
            "Lightweight and portable"
        ],
        stock: 0
     },
    { 
        id: "pan-ultra",
        name: "Pan Ultra", 
        image: "/pan_2.jpg",
        description: [
            "The ultimate pan for all your cooking needs. Durable, non-stick, and perfect for any kitchen.",
            "Perfect for everyday cooking and professional chefs alike.",
            "Level up your cooking game with Pan Pro."
        ],
        price: 149.99,
        features: [
            "High-quality non-stick surface",
            "Ergonomic handle design",
            "Dishwasher safe",
            "Lightweight and portable"
        ],
        stock: 15
     },
    { 
        id: "pan-ultra-pro-max",
        name: "Pan Ultra Pro Max", 
        image: "/pan_3.jpg",
        description: [
            "The ultimate pan for all your cooking needs. Durable, non-stick, and perfect for any kitchen.",
            "Perfect for everyday cooking and professional chefs alike.",
            "Level up your cooking game with Pan Pro."
        ],
        price: 199.99,
        features: [
            "High-quality non-stick surface",
            "Ergonomic handle design",
            "Dishwasher safe",
            "Lightweight and portable"
        ],
        stock: 99
     }
]