import Content from "@/components/layout/Content"
import Page from "@/components/layout/Page"
import { CheckoutForm } from "./CheckoutForm"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const Checkout = () => {
  return (
    <Page>
        <Link
            href="/cart"
            className="inline-flex mt-16 xl:mt-0 items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
        >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-medium">Back to Cart</span>
        </Link>
        <Content>
            <CheckoutForm />
        </Content>
    </Page>
  )
}

export default Checkout