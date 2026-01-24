import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CartItem } from '@/types/products'
type CartStore = {
    products: CartItem[],

    addToCart: (productId: string) => void,
    removeFromCart: (productId: string) => void,
    updateQuantity: (productId: string, quantity: number) => void,
    clearCart: () => void
}
export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
        products: [],

        addToCart: (productId) => (
            set((state) => ({ products: [...state.products, { id: productId, quantity: 1 }] })
        )),

        removeFromCart: (productId) => (
            set((state) => ({ products: state.products.filter(item => item.id !== productId) }))
        ),

        updateQuantity: (productId, quantity) => (
            set((state) => ({
                products: state.products.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
                )
            }))
        ),

        clearCart: () => set({ products: [] })
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)