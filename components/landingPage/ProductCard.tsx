import { Product } from "@/types/products"
import React from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Image from "next/image"

const ProductCard: React.FC<Product> = ({ name, image, description }) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30" />
      <Image
        src={image}
        alt="Event cover"
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
        <Button className="w-full bg-black text-white">Show More</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard