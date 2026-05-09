import Link from "next/link"
import { NAV_LINKS } from "@/lib/navigation"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ENERBAT</h3>
            <p className="text-gray-300">
              Comercializamos una amplia variedad de baterías para satisfacer todas sus necesidades.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-300">
              <p>Email: info@enerbat.com</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Dirección: Av. Principal 123, Ciudad</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Enerbat. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}