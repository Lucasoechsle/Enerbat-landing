"use client"
import { useState } from "react"
import { productosData, getCategories } from "@/lib/products"
import ProductCard from "@/components/product-card"

export default function ProductosPage() {
  const categories = ["Todos", ...getCategories()]
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts =
    selectedCategory === "Todos"
      ? productosData
      : productosData.filter((product) => product.category === selectedCategory)

  return (
    <div className="container-custom">
      <h1 className="section-title text-primary">Nuestros Productos</h1>
      <div className="mb-8">
        <h2 className="section-subtitle mb-4">Filtrar por categoría</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}