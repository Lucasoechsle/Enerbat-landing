"use client"
import { useState } from "react"
import { productosDestacadosData } from "@/lib/products"
import ProductCard from "./product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturedProducts() {
  const productsByCategory = productosDestacadosData.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof productosDestacadosData>,
  )

  const categories = Object.keys(productsByCategory)

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const currentCategory = categories[currentCategoryIndex]
  const currentProducts = productsByCategory[currentCategory]

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
  }

  const prevCategory = () => {
    setCurrentCategoryIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-primary">Productos Destacados</h2>
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevCategory}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Categoría anterior"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <h3 className="text-2xl font-semibold text-secondary">{currentCategory}</h3>
            <button
              onClick={nextCategory}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Categoría siguiente"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mb-6">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setCurrentCategoryIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCategoryIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Ver categoría ${category}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}