export interface Product {
    id: string;
    name: string;
    imageLink: string;
    description: string[];
    price: number;
    features: string[];
    stock: number;
}

export interface ProductInCart extends Product {
    quantity: number
}