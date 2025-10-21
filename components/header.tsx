import {
  Building2,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Users,
  Phone,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-[#0F3B5C] text-white">
      <div className="container mx-auto px-4">
        {/* Logo y título */}
        <div className="flex items-center gap-4 py-4 border-b border-white/10">
          <div className="bg-white p-2 rounded">
            <div className="w-12 h-12 flex items-center justify-center">
              <span className="text-[#0F3B5C] font-bold text-xs">UNER</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">
              Facultad de Ciencias
            </h1>
            <h2 className="text-xl font-bold leading-tight">
              de la Administración
            </h2>
          </div>
        </div>

        {/* Navegación */}
        <nav className="py-4">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <Building2 className="w-4 h-4" />
                Institucional
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Académica
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Carreras
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <FlaskConical className="w-4 h-4" />
                Investigación
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Extensión
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <Users className="w-4 h-4" />
                Estudiantes
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 gap-2"
              >
                <Phone className="w-4 h-4" />
                Contacto
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-white hover:bg-white/10"
              >
                <Search className="w-4 h-4" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
