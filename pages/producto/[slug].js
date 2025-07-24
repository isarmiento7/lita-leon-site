import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Conjunto de flores",
    imagenPrincipal: "/traje_flores.jpg",
    imagenHover: "/traje_flores_modelo.jpg",
    descripcion: "Conjunto elegante con flores.",
    tallas: "S, M, L",
    precio: "$29.990",
    slug: "conjunto-flores"
  },
  {
    id: 2,
    nombre: "Conjunto encaje zebra",
    imagenPrincipal: "/conjunto_zebra.jpg",
    imagenHover: "/conjunto_zebra_modelo.jpg",
    descripcion: "Ropa interior delicada en tono rosa pastel.",
    tallas: "S, M, L",
    precio: "$19.990",
    slug: "conjunto-zebra"
  },
  {
    id: 3,
    nombre: "Bikini azul",
    imagenPrincipal: "/bikini_azul.jpeg",
    imagenHover: "/bikini_azul_modelo.png",
    descripcion: "Bikini azul con detalles dorados para un verano elegante.",
    tallas: "S, M, L",
    precio: "$32.990",
    slug: "bikini-azul"
  },
  {
    id: 4,
    nombre: "Encaje negro",
    imagenPrincipal: "/encaje_negro.jpeg",
    imagenHover: "/encaje_negro_modelo.png",
    descripcion: "Conjunto de encaje negro clásico y atemporal.",
    tallas: "S, M, L",
    precio: "$22.990",
    slug: "set-encaje-negro"
  },
  {
    id: 5,
    nombre: "Bikini rojo",
    imagenPrincipal: "/bikini_rojo.jpeg",
    imagenHover: "/rojo2.jpeg",
    descripcion: "Conjunto de encaje morado clásico y atemporal.",
    tallas: "S, M, L",
    precio: "$22.990",
    slug: "traje-morado"
  },
  {
    id: 6,
    nombre: "Bikini blanco perla",
    imagenPrincipal: "/nuevo1.jpeg",
    imagenHover: "/bikini_blanco_modelo.png",
    descripcion:
      "Un diseño limpio y sofisticado que realza tu figura con contraste y carácter. El blanco perla con bordes terracota es el toque perfecto para destacar este verano.",
    tallas: "S, M, L",
    precio: "$34.990",
    slug: "bikini-blanco-perla",
    imagenesExtra: ["/nuevo2.jpeg", "/nuevo3.jpg", "/nuevo4.jpg"]
  }
];

export default function Producto() {
  const router = useRouter();
  const { slug } = router.query;
  const producto = productos.find((p) => p.slug === slug);

  const imagenes = [];

  if (producto) {
    if (producto.imagenPrincipal) {
      imagenes.push({ src: producto.imagenPrincipal, tipo: "general" });
    }
    if (producto.imagenHover) {
      imagenes.push({ src: producto.imagenHover, tipo: "uso" });
    }
    if (producto.imagenesExtra?.length) {
      imagenes.push(
        ...producto.imagenesExtra.map((src) => ({ src, tipo: "extra" }))
      );
    }
  }

  const [imagenIndex, setImagenIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  if (!producto) return <p className="text-center mt-10">Cargando producto...</p>;

  return (
    <main className="bg-[#FAF6F2] text-[#611427] min-h-screen font-sans px-6 py-12 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen principal */}
        <div className="w-full">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
            <Image
              src={imagenes[imagenIndex]?.src}
              alt={producto.nombre}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out cursor-pointer"
              onClick={() => setFullscreen(true)}
            />
            {imagenes.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setImagenIndex(
                      (imagenIndex - 1 + imagenes.length) % imagenes.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#611427] px-2 py-1 rounded-full shadow"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setImagenIndex((imagenIndex + 1) % imagenes.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#611427] px-2 py-1 rounded-full shadow"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Tipo de imagen */}
          <p className="mt-2 text-sm text-center text-gray-600">
            {imagenes[imagenIndex]?.tipo === "general" && "Vista general"}
            {imagenes[imagenIndex]?.tipo === "uso" && "Vista en uso"}
            {imagenes[imagenIndex]?.tipo === "extra" && "Vista adicional"}
          </p>

          {/* Miniaturas */}
          {imagenes.length > 1 && (
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {imagenes.map((img, idx) => (
                <div
                  key={idx}
                  className={`relative w-20 h-20 border rounded-md overflow-hidden cursor-pointer ${
                    idx === imagenIndex ? "border-[#611427] border-2" : "border-gray-300"
                  }`}
                  onClick={() => setImagenIndex(idx)}
                >
                  <Image
                    src={img.src}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detalle del producto */}
        <div>
          <h1 className="text-3xl font-serif font-semibold mb-4">{producto.nombre}</h1>
          <p className="text-lg mb-3">{producto.descripcion}</p>
          <p className="mb-2"><strong>Tallas disponibles:</strong> {producto.tallas}</p>
          <p className="mb-6"><strong>Precio:</strong> {producto.precio}</p>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#611427] text-white rounded-full shadow hover:bg-[#41101e] transition-all"
          >
            Encargar por WhatsApp
          </a>
          <Link href="/" className="mt-6 block text-sm underline hover:text-[#41101e]">
            ← Volver a la tienda
          </Link>
        </div>
      </div>

      {/* Lightbox pantalla completa */}
      {fullscreen && (
        <div
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-zoom-out"
        >
          <Image
            src={imagenes[imagenIndex]?.src}
            alt="Imagen ampliada"
            width={1000}
            height={1000}
            className="object-contain max-h-[90vh] w-auto rounded"
          />
        </div>
      )}
    </main>
  );
}
