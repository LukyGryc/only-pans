'use client';

import { useCartStore } from "@/store/cartStore"
import CardNav from "../reactbits/CardNav"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link";
import type { Product } from "@/types/products";

interface HeaderProps {
  products?: Product[];
}

const Header = ({ products = [] }: HeaderProps) => {
  const [ mounted, setMounted ] = useState(false);
  const { products: cartProducts } = useCartStore();
  const count = cartProducts.reduce((acc, item) => acc + item.quantity, 0);

  // Prevent hydration mismatch by only rendering count after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed w-full z-20">
      <CardNav
          products={products}
          name="OnlyPans"
          nameStyle="text-2xl font-bold"
          extra={
            <div className="relative">
              <Link href="/cart" aria-label={count > 0 ? `View cart (${count} items)` : "View cart"}>
                <ShoppingCart className="w-6 h-6 text-gray-900" aria-hidden />
              </Link>

              {mounted && count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {count}
                </span>
              )}
            </div>
          }
      />
    </header>
  )
}

export default Header