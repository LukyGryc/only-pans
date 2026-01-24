import { ProductWithQuantity } from "@/types/products"
import { getPriceFormatted } from "@/util/productUtil"

const SummaryOrder: React.FC<ProductWithQuantity[]> = (items) => {
  return (
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
  )
}

export default SummaryOrder