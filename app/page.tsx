import { Header } from "@/components/header";
import { HeroCarousel } from "@/components/hero-carousel";
import { QuickAccess } from "@/components/quick-access";
import { ContentGrid } from "@/components/content-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Banner de inscripciones */}
        <div className="bg-[#8B1538] py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide">
              INSCRIPCIONES - INGRESO 2026
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            {/* Sidebar de accesos rápidos */}
            <QuickAccess />

            {/* Contenido principal */}
            <div className="space-y-6">
              {/* Carrusel de novedades */}
              <HeroCarousel />

              {/* Grid de contenido */}
              <ContentGrid />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
