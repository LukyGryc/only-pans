import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cartStore";
import { getPriceFormatted } from "@/util/productUtil"
import Link from "next/link"

const SummaryOrder = () => {
    const { products } = useCartStore();
    const numberOfItemsInCart = products.reduce((acc, { quantity }) => acc + quantity, 0);

    return (
        <div className="w-full lg:max-w-sm bg-gray-50 rounded-xl p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Items</span>
                <span>{ numberOfItemsInCart }</span>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <span>Total</span>
                <span>{ getPriceFormatted(products.reduce((acc, { price, quantity }) => acc + price * quantity , 0)) }</span>
            </div>

            { //The asChild prevented the disabled styling to apply, so decided to go with two buttons one with link and one without
                numberOfItemsInCart === 0
                ? (
                    <Button 
                        className="mt-6 h-12 w-full text-lg bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
                        disabled={true}
                    >
                        Checkout
                    </Button>
                )
                : (
                    <Button 
                        asChild 
                        className="mt-6 h-12 w-full text-lg bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition"
                    >
                        <Link href={"/checkout"} >
                            Checkout
                        </Link>
                    </Button>
                )
            }

        </div>
  )
}

export default SummaryOrder