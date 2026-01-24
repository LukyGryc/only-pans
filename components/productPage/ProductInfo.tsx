'use client';
import { Product } from "@/types/products"
import { Check } from "lucide-react"
import { Button } from "../ui/button"
import UpdateCartButtons from "./UpdateCartButtons";

const ProductInfo:React.FC<Product> = (product) => {

  const { description, features, name, price, stock, id } = product

  const isInStock = stock > 0

  return (
    <div className="flex flex-col gap-6 max-w-xl">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
          <div className="text-3xl font-semibold text-gray-900">
            <p>
              {price}
            </p>
            <p className={`text-lg font-medium ${isInStock? 'text-green-600' : 'text-red-600'}`}>
              {isInStock ? `In Stock (${stock < 20 ? stock : "10+"})` : 'Out of Stock'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-gray-700 leading-relaxed">
          {description.map((desc, index) => (
            <p key={index} className="text-base md:text-lg">{desc}</p>
          ))}
        </div>
        
        <div className="border-t border-gray-200 my-2"/>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <UpdateCartButtons {...product} />
    </div>
  )
}

export default ProductInfo