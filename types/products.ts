export interface Product {
    id: string;
    name: string;
    image: string;
    description: string[];
    price: number;
    features: string[];
    stock: number;
}

export interface ProductInCart extends Product {
    quantity: number
}