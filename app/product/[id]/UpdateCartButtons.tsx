'use client'

import { useCartStore } from '@/store/cartStore';
import { Button } from '../../../components/ui/button'
import { Product } from '@/types/products';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

const UpdateCartButtons: React.FC<Product> = ({ id, stock }) => {
  const { addToCart, removeFromCart, updateQuantity, products } = useCartStore();
  
  const cartItem = products.find((item) => item.id === id);
  const quantityInCart = cartItem?.quantity || 0;
  const isInStock = stock > 0;

  // If item is not in cart, show "Add to Cart" button
  if (!cartItem) {
    return (
      <Button
        size="lg"
        disabled={!isInStock}
        className="w-full mt-4 text-white py-4 px-8 font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
        onClick={() => addToCart(id)}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        {isInStock ? 'Add to Cart' : 'Out of Stock'}
      </Button>
    );
  }

  // If item is in cart, show quantity controls
  return (
    <div className="mt-4 space-y-3">
      <div className="flex gap-2">
        {/* Quantity Controls */}
        <div className="flex items-center border rounded-lg flex-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Decrease quantity"
            onClick={() => quantityInCart === 1 ? removeFromCart(id) : updateQuantity(id, -1)}
            className="rounded-r-none h-12"
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="px-4 py-2 min-w-[3rem] text-center font-semibold text-lg">
            {quantityInCart}
          </span>
          
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Increase quantity"
            onClick={() => updateQuantity(id, 1)}
            disabled={quantityInCart >= stock}
            className="rounded-l-none h-12"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Remove All Button */}
        <Button
          variant="destructive"
          size="icon"
          aria-label="Remove all from cart"
          onClick={() => removeFromCart(id)}
          className="h-12 w-12"
          title="Remove all from cart"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      {quantityInCart >= stock && (
        <p className="text-sm text-amber-600 font-medium">
          Maximum quantity reached
        </p>
      )}
    </div>
  );
}

export default UpdateCartButtons