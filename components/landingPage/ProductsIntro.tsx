import ProductCard from "./ProductCard"
import { Products } from "@/constants/products"

const ProductsIntro = () => {
  return (
    <div className="w-3/4 h-auto flex flex-col lg:flex-row mx-auto justify-between gap-6 p-12 mb-12">
        {
            Products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))
        }
    </div>
  )
}

export default ProductsIntro