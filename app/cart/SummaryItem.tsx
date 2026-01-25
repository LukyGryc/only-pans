import { ProductInCart } from "@/types/products"
import { getPriceFormatted } from "@/util/productUtil"
import Image from "next/image"
import UpdateCartButtons from "../product/[id]/UpdateCartButtons"
import Link from "next/link"

const SummaryItem: React.FC<ProductInCart> = (product) => {
  return (
    <div className="flex items-center gap-6 border-b pb-8 last:border-b-0">
        <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center">
            <Image
                src={product.imageLink}
                alt={product.name}
                width={96}
                height={96}
                className="object-contain"
            />
        </div>

        <div className="flex-1">
            <h2 className="font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                <Link href={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </h2>
            <p className="text-sm text-gray-500">
                Quantity: {product.quantity} | In stock: {product.stock}
            </p>
        </div>
        <div className="flex flex-col text-end">
            
            <div className="font-semibold text-xl text-gray-900">
                {getPriceFormatted(product.price * product.quantity)}
            </div>
            <UpdateCartButtons {...product} />
        </div>
    </div>
  )
}

export default SummaryItem