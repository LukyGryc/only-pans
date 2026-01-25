import { ProductWithQuantity } from "@/types/products"
import { getPriceFormatted } from "@/util/productUtil"
import Image from "next/image"
import UpdateCartButtons from "../product/[id]/UpdateCartButtons"

const SummaryItem: React.FC<ProductWithQuantity> = (product) => {
  return (
    <div className="flex items-center gap-6 border-b pb-6 last:border-b-0">
        <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center">
            <Image
                src={product.image}
                alt={product.name}
                width={96}
                height={96}
                className="object-contain"
            />
        </div>

        <div className="flex-1">
            <h2 className="font-semibold text-gray-900">
                {product.name}
            </h2>
            <p className="text-sm text-gray-500">
                Quantity: {product.quantity}
            </p>
        </div>
        <div className="flex flex-col text-end">
            <UpdateCartButtons {...product} />
            <div className="font-semibold text-xl text-gray-900">
                {getPriceFormatted(product.price * product.quantity)}
            </div>
        </div>
    </div>
  )
}

export default SummaryItem