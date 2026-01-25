import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { CartItem } from '@/types/products'
type CartStore = {
    products: CartItem[],

    addToCart: (productId: string, price: number) => void,
    removeFromCart: (productId: string) => void,
    updateQuantity: (productId: string, quantity: number) => void,
    clearCart: () => void
}
export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
        products: [],

        addToCart: (productId, price) => (
            set((state) => {
                const existingItem = state.products.find(item => item.id === productId);
                //Only add new item if it's not already in the store
                if(!existingItem)
                    return { products: [...state.products, { id: productId, quantity: 1, price }] };

                return { products: state.products }
            })
        ),

        removeFromCart: (productId) => (
            set((state) => ({ products: state.products.filter(item => item.id !== productId) }))
        ),

        updateQuantity: (productId, quantity) => (
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
        ),

        clearCart: () => set({ products: [] })
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)