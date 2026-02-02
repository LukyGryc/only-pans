import { getInventoryCached } from "@/server/inventory";
import ProductCard from "./ProductCard"

const ProductsIntro = async () => {
  const products = await getInventoryCached();

  return (
    <section aria-labelledby="products-heading" className="w-full lg:w-3/4 h-auto flex flex-col lg:flex-row mx-auto justify-between gap-6 p-12 mb-12">
      <h2 id="products-heading" className="sr-only">Our pans</h2>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  )
}

export default ProductsIntro