import { Product, ProductInCart } from '@/types/products'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartStore = {
    products: ProductInCart[],

    addToCart: (product: Product) => void,
    removeFromCart: (productId: string) => void,
    updateQuantity: (productId: string, quantity: number) => void,
    clearCart: () => void
}
export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
        products: [],

        addToCart: (product) => (
            set((state) => {
                const existingItem = state.products.find(item => item.id === product.id);
                //Only add new item if it's not already in the store
                if(!existingItem)
                    return { products: [...state.products, { ...product, quantity: 1 }] };

                return { products: state.products }
            })
        ),

        removeFromCart: (productId) => (
            set((state) => ({ products: state.products.filter(item => item.id !== productId) }))
        ),

        updateQuantity: (productId, quantity) => {
            set((state) => ({
                products: state.products
                    .map(item => {
                        if (item.id === productId) {
                            const newQuantity = item.quantity + quantity;
                            // Prevent negative quantities
                            return { ...item, quantity: Math.max(0, newQuantity) };
                        }
                        return item;
                    })
                    // Remove items with 0 quantity
                    .filter(item => item.quantity > 0)
            }))
        },

        clearCart: () => set({ products: [] })
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)