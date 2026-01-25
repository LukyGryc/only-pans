import { getInventoryCached } from "@/server/inventory";
import ProductCard from "./ProductCard"

const ProductsIntro = async () => {
  const products = await getInventoryCached();

  return (
    <div className="w-3/4 h-auto flex flex-col lg:flex-row mx-auto justify-between gap-6 p-12 mb-12">
        {
            products.map((product, index) => (
                <ProductCard key={index} {...product} />
            ))
        }
    </div>
  )
}

export default ProductsIntro