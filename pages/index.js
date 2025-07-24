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
    descripcion: "Un diseño limpio y sofisticado que realza tu figura con contraste y carácter. El blanco perla con bordes terracota es el toque perfecto para destacar este verano.",
    tallas: "S, M, L",
    precio: "$34.990",
    slug: "bikini-blanco-perla",
    imagenesExtra: [
      "/nuevo2.jpeg",
      "/nuevo3.jpg",
      "/nuevo4.jpg"
    ]
  }
];

export default function Home() {
  const novedad = productos.find(p => p.slug === "bikini-blanco-perla");

  return (
    <main className="bg-[#FAF6F2] text-[#611427] min-h-screen font-sans">
      {/* Hero section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="bg-black/40 absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide">Lita & León</h1>
          <p className="mt-4 text-lg md:text-xl">Elegancia íntima, diseño con carácter</p>
          <Link href="#catalogo">
            <button className="mt-6 px-6 py-3 bg-white text-[#611427] font-semibold rounded-full shadow hover:bg-[#F8EAE7] transition-all">
              Ver colección
            </button>
          </Link>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">Colección</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <Link key={producto.id} href={`/producto/${producto.slug}`} className="group block overflow-hidden rounded-lg shadow-lg relative">
              <div className="relative w-full h-[400px]">
                <span className="absolute top-2 left-2 bg-[#611427] text-white text-xs px-2 py-1 rounded z-10">
                  {producto.slug === "bikini-blanco-perla" ? "Novedad" : ""}
                </span>
                <Image
                  src={producto.imagenPrincipal}
                  alt={producto.nombre}
                  fill
                  className="object-cover group-hover:opacity-0 transition-opacity duration-700 ease-in-out"
                />
                <Image
                  src={producto.imagenHover}
                  alt={producto.nombre + " modelo"}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out absolute top-0 left-0"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">{producto.nombre}</h3>
                <p className="text-sm mt-1">{producto.precio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Novedades */}
      <section className="py-24 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/nuevo1.jpeg"
            alt={novedad.nombre}
            width={600}
            height={700}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="uppercase text-sm tracking-widest mb-2">NOVEDADES</h3>
          <h2 className="text-4xl font-serif font-semibold mb-6">{novedad.nombre}</h2>
          <p className="text-lg mb-6">Un diseño limpio y sofisticado que realza tu figura con contraste y carácter. El blanco perla con bordes terracota es el toque perfecto para destacar este verano.

</p>
          <Link href={`/producto/${novedad.slug}`}>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#41101e] transition-all">
              Ver más
            </button>
          </Link>
        </div>
      </section>


      {/* Novedades */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest mb-2 text-center">NOVEDADES</h3>
        <h2 className="text-4xl font-serif font-semibold mb-10 text-center">{novedad.nombre}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[novedad.imagenPrincipal, ...(novedad.imagenesExtra || [])].map((img, idx) => (
            <div key={idx} className="relative w-full h-[400px]">
              <Image
                src={img}
                alt={`${novedad.nombre} ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">{novedad.descripcion}</p>
          <Link href={`/producto/${novedad.slug}`}>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#41101e] transition-all">
              Ver más
            </button>
          </Link>
        </div>
      </section>

      {/* Sobre nosotras */}
      <section className="py-20 bg-[#F8EAE7] px-6 text-center">
        <h2 className="text-3xl font-serif mb-6">Sobre nosotras</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Lita & León nace del deseo de crear prendas íntimas y trajes de baño que reflejen elegancia, comodidad y personalidad. Diseñado por Bárbara León, amante del diseño con alma, cada pieza busca abrazar la piel con estilo y autenticidad.
        </p>
      </section>

      {/* Contacto */}
      <footer className="py-10 px-6 text-center">
        <h2 className="text-2xl font-serif mb-4">Contáctanos</h2>
        <p>Escríbenos por <a href="https://wa.me/56912345678" className="underline hover:text-pink-700">WhatsApp</a></p>
        <p className="mt-2">Síguenos en <a href="https://instagram.com/litaandleon" className="underline hover:text-pink-700">Instagram</a></p>
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Lita & León. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
