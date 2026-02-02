import ProductInfo from "@/app/product/[id]/ProductInfo"
import { Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import Page from "@/components/layout/Page"
import Content from "@/components/layout/Content"
import { getProduct } from "@/server/inventory"

interface Props {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  if (!product) return { title: "Product Not Found" }
  return {
    title: product.name,
    description: product.description?.[0] ?? `Shop ${product.name} at OnlyPans`,
  }
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params

  const product = await getProduct(id)

  if (!product) {
    return (
      <Page>
        <Content>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Product Not Found
            </h1>
            <p className="text-gray-600">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </Content>
      </Page>
    )
  }

  const { name, imageLink } = product

  return (
    <Page>
      <Link
        href="/"
        className="inline-flex mt-16 xl:mt-0 items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
      >
        <Home className="w-4 h-4" aria-hidden />
        <span className="font-medium">Back to Home</span>
      </Link>

      <Content>
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-xl p-8">
          <Image
            src={imageLink}
            alt={name}
            width={500}
            height={400}
            className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex items-center">
          <ProductInfo {...product} />
        </div>
      </Content>
    </Page>
  )
}

export default ProductPage
