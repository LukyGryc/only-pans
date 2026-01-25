import { Product } from "@/types/products"
import React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ProductCard: React.FC<Product> = ({ name, imageLink, description, id }) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        src={imageLink}
        alt={name}
        width={300}
        height={225}
        className="w-full object-cover rounded-t-xl"
      />
      <CardHeader>

        <CardTitle>{name}</CardTitle>
        <CardDescription>
            {description[0] ?? "Coming Soon!"}
        </CardDescription>
      </CardHeader>
      <CardFooter>

      <Button asChild className="w-full bg-black text-white cursor-pointer">
        <Link href={`/product/${id}`}>
          Learn More
        </Link>
      </Button>

      </CardFooter>
    </Card>
  )
}

export default ProductCard