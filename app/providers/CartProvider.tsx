'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { CartContextType } from "../models/cart-context.model";
import { CartItem } from "../models/cart-item.model";
import { Product } from "../models/product.model";

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('CartProvider is missing')
  }
  return context
}

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addCartItem = (product: Product) => {
    setCartItems(prev => {
      const findProduct = prev.find(p => p.id === product.id)

      if (findProduct) {
        return prev.map(p =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        )
      }

      return [...prev, { ...product, count: 1 }]
    })
  }

  const deleteCartItem = (product: Product) => {
    setCartItems(prev => {
      const findProduct = prev.find(p => p.id === product.id)

      if (!findProduct) return prev

      if (findProduct.count > 1) {
        return prev.map(p =>
          p.id === product.id ? { ...p, count: p.count - 1 } : p
        )
      }

      return prev.filter(p => p.id !== product.id)
    })
  }

  return (
    <CartContext.Provider value={{ isOpen, cartItems, setIsOpen, addCartItem, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  )
}
