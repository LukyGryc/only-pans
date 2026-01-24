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
                <Home className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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

                {/* Summary */}
                <div className="w-full lg:max-w-sm bg-gray-50 rounded-xl p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Items</span>
                        <span>{ items.reduce((acc, { quantity }) => acc + quantity, 0) }</span>
                    </div>

                    <div className="flex justify-between font-semibold text-lg border-t pt-4">
                        <span>Total</span>
                        <span>{ getPriceFormatted(items.reduce((acc, { price, quantity }) => acc + price * quantity , 0)) }</span>
                    </div>

                    <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition">
                        Checkout
                    </button>
                </div>
            </Content>
        </Page>
  )
}

export default Cart