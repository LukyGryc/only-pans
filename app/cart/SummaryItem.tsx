import { ProductWithQuantity } from "@/types/products"
import { getPriceFormatted } from "@/util/productUtil"
import Image from "next/image"

const SummaryItem: React.FC<ProductWithQuantity> = ({image, name, price, quantity }) => {
  return (
    <div className="flex items-center gap-6 border-b pb-6 last:border-b-0">
        <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center">
            <Image
                src={image}
                alt={name}
                width={96}
                height={96}
                className="object-contain"
            />
        </div>

        <div className="flex-1">
            <h2 className="font-semibold text-gray-900">
                {name}
            </h2>
            <p className="text-sm text-gray-500">
                Quantity: {quantity}
            </p>
        </div>

        <div className="font-semibold text-gray-900">
            {getPriceFormatted(price * quantity)}
        </div>
    </div>
  )
}

export default SummaryItem