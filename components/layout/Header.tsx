import CardNav from "../reactbits/CardNav"
import { ShoppingCart } from "lucide-react"



const Header = () => {
  return (
    <header className="fixed w-full z-1">
        <CardNav 
            name="OnlyPans"
            nameStyle="text-2xl font-bold"
            extra={<ShoppingCart />}
        />
    </header>
  )
}

export default Header