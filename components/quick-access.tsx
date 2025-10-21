import { Button } from "@/components/ui/button";
import {
  FileText,
  Video,
  Target,
  Mail,
  BookOpen,
  Wifi,
  Building2,
  Award,
} from "lucide-react";

const quickLinks = [
  { icon: FileText, label: "SIU Guaraní" },
  { icon: Video, label: "Campus Virtual" },
  { icon: Target, label: "Plan Estratégico 2017-2054" },
  { icon: Mail, label: "Digesto Online" },
  { icon: Mail, label: "Correo Institucional" },
  { icon: BookOpen, label: "Biblioteca" },
  { icon: Wifi, label: "Área Educación A Distancia" },
  { icon: Building2, label: "Conocé la Facultad" },
  { icon: Award, label: "Concursos Docentes" },
];

export function QuickAccess() {
  return (
    <aside className="space-y-4">
      <div className="bg-[#1A1A2E] text-white p-4 rounded-lg">
        <h2 className="font-bold mb-4 text-sm uppercase tracking-wide">
          ACCESOS RÁPIDOS
        </h2>
        <div className="space-y-2">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start gap-3 bg-white text-gray-900 hover:bg-gray-100 border-gray-300"
            >
              <link.icon className="w-4 h-4" />
              <span className="text-sm">{link.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
