import { Product } from '@/types/product'
import { createContext, useContext, useState } from 'react'

interface ProductCardContextType {
  selectedVariant: number
  setSelectedVariant: (index: number) => void
  product: Product
}

export const ProductCardContext = createContext({} as ProductCardContextType)

export const ProductCardProvider = ({
  children,
  product,
}: {
  children: React.ReactNode
  product: Product
}) => {
  const [selectedVariant, setSelectedVariant] = useState(0)

  return (
    <ProductCardContext.Provider
      value={{
        selectedVariant,
        setSelectedVariant,
        product,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  )
}

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext)
  if (!context) {
    throw new Error(
      'useProductCardContext must be used within a ProductCardProvider'
    )
  }
  return context
}
