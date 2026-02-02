'use client';
import Content from "@/components/layout/Content"
import Page from "@/components/layout/Page"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link";
import { Home } from "lucide-react";
import SummaryItem from "./SummaryItem";
import SummaryOrder from "./SummaryOrder";

const Cart = () => {

    const { products } = useCartStore();

    return (
        <Page>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group"
            >
                <Home className="w-4 h-4" aria-hidden />
                <span className="font-medium">Continue Shopping</span>
            </Link>

            <Content>
                <div className="flex-1 space-y-6">
                    <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>

                    {products.length === 0 && (
                        <p className="text-gray-600">Your cart is empty.</p>
                    )}

                    {products.map(item => (
                        <SummaryItem key={item.id} {...item} />
                    ))}
                </div>

                <SummaryOrder />
            </Content>
        </Page>
  )
}

export default Cart