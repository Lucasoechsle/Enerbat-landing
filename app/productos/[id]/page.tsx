"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { getProductById } from "@/lib/products"
import { ArrowLeft } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const productId = Number.parseInt(params.id)
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="container-custom text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <button onClick={() => router.push("/productos")} className="btn-primary">
          Volver a Productos
        </button>
      </div>
    )
  }

  const renderProductDetails = () => {
    if (product.category.includes("Autos")) {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm font-semibold">Denominación</p>
              <p className="text-lg">{product.denominación}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Capacidad AH</p>
              <p className="text-lg">{product.CapacidadAH}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">CCA</p>
              <p className="text-lg">{product.CCA}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">CA</p>
              <p className="text-lg">{product.CA}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Dimensiones</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold">Largo</p>
                <p className="text-lg">{product.largo} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Ancho</p>
                <p className="text-lg">{product.ancho} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Alto</p>
                <p className="text-lg">{product.alto} mm</p>
              </div>
            </div>
          </div>
        </>
      )
    } else if (product.category === "Baterías para Motos") {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm font-semibold">C10</p>
              <p className="text-lg">{product.C10}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">CCA</p>
              <p className="text-lg">{product.CCA}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Dimensiones</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold">Largo</p>
                <p className="text-lg">{product.largo} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Ancho</p>
                <p className="text-lg">{product.ancho} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Alto</p>
                <p className="text-lg">{product.alto} mm</p>
              </div>
            </div>
          </div>
        </>
      )
    } else if (product.category === "Baterías de Ciclado Profundo") {
      return (
        <>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm font-semibold">Tensión</p>
              <p className="text-lg">{product.tension}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">AH20hs</p>
              <p className="text-lg">{product.AH20hs}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">AH10hs</p>
              <p className="text-lg">{product.AH10hs}</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Peso</p>
              <p className="text-lg">{product.peso} kg</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Dimensiones</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-semibold">Largo</p>
                <p className="text-lg">{product.largo} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Ancho</p>
                <p className="text-lg">{product.ancho} mm</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Alto</p>
                <p className="text-lg">{product.alto} mm</p>
              </div>
            </div>
          </div>
        </>
      )
    }

    return null
  }

  return (
    <div className="container-custom">
      <button onClick={() => router.push("/productos")} className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Volver a Productos
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative h-80 bg-gray-100 rounded-md">
            {product.image && product.image !== "/imagenes/" ? (
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500">Sin imagen</span>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.category}</p>

          {renderProductDetails()}

          <div className="mt-8">
            <p className="text-gray-700">
              Para más información sobre este producto, por favor contáctenos a través de nuestro formulario de
              contacto.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

