import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productos/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative h-48 bg-white border-b border-gray-200">
          {product.image && product.image !== "/imagenes/" ? (
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-gray-500">Sin imagen</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <p className="text-xs text-gray-500 line-clamp-2">
            {product.denominación && `Denominación: ${product.denominación}`}
          </p>
        </div>
      </div>
    </Link>
  )
}