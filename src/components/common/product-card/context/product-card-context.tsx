import { Product } from '@/types/product'
import { createContext, useContext, useState } from 'react'

interface ProductCardContextType {
  selectedColorVariant: string
  setSelectedColorVariant: (color: string) => void
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
  const [selectedColorVariant, setSelectedColorVariant] = useState('')

  return (
    <ProductCardContext.Provider
      value={{
        selectedColorVariant,
        setSelectedColorVariant,
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
