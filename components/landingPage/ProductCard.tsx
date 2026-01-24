import { Product } from "@/types/products"
import React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

const ProductCard: React.FC<Product> = ({ name, image, description, id }) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        src={image}
        alt={name}
        width={300}
        height={225}
        className=" z-20 w-full object-cover rounded-t-xl"
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