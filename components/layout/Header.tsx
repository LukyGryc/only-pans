'use client';

import { useCartStore } from "@/store/cartStore"
import CardNav from "../reactbits/CardNav"
import { ShoppingCart } from "lucide-react"

const Header = () => {

  const { products } = useCartStore();
  const count = products.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed w-full z-20">
      <CardNav 
          name="OnlyPans"
          nameStyle="text-2xl font-bold"
          extra={
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-900" />
              {count > 0 && (
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