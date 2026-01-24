import ProductInfo from "@/components/productPage/ProductInfo"
import { Products } from "@/constants/products"
import { Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
    params: Promise<{
        id: string
    }>
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params
  
  const product = Products.find((product) => product.id === id);
  if (!product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const { name, image } = product;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
        >
          <Home className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12">
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-8">
              <Image
                src={image}
                alt={name}
                width={500}
                height={400}
                className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
              />
            </div>
            <div className="flex-1 flex items-center">
              <ProductInfo {...product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage