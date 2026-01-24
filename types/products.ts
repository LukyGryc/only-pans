export interface Product {
    id: string;
    name: string;
    image: string;
    description: string[];
    price: string;
    features: string[];
    stock: number;
}

export interface CartItem {
    id: string;
    quantity: number;
}