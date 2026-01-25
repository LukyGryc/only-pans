'use client';
import Content from "@/components/layout/Content"
import Page from "@/components/layout/Page"
import { Products } from "@/constants/products";
import { useCartStore } from "@/store/cartStore"
import Link from "next/link";
import Image from "next/image";
import { ProductWithQuantity } from "@/types/products";
import { Home } from "lucide-react";
import { getPriceFormatted } from "@/util/productUtil";
import SummaryItem from "./SummaryItem";
import SummaryOrder from "./SummaryOrder";

const Cart = () => {

    const { products } = useCartStore();
    const allProducts = Products;

    const items: ProductWithQuantity[] = allProducts
    .map(product => {
        const productInCart = products.find(({ id }) => id === product.id)
        if(!productInCart) return { ...product, quantity: 0 }

        return { ...product, quantity: productInCart.quantity }
    })
    .filter(({ quantity }) => quantity > 0)

    return (
        <Page>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group"
            >
                <Home className="w-4 h-4" />
                <span className="font-medium">Continue Shopping</span>
            </Link>

            <Content>
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>

                {items.length === 0 && (
                    <p className="text-gray-600">Your cart is empty.</p>
                )}

                {items.map(item => (
                    <SummaryItem key={item.id} {...item} />
                ))}
                </div>

                <SummaryOrder items={items} />
            </Content>
        </Page>
  )
}

export default Cart