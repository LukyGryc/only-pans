export interface Product {
    id: string;
    name: string;
    image: string;
    description: string[];
    price: number;
    features: string[];
    stock: number;
}

export interface CartItem {
    id: string;
    quantity: number;
    price: number;
}

export interface ProductWithQuantity extends Product {
    quantity: number
}