import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const contentItems = [
  {
    title: "Talleres de Articulación Universitaria (TAU)",
    description:
      "Estos espacios buscan brindar a los estudiantes de último año del nivel secundario herramientas iniciales que favorezcan su ingreso y adaptación a la vida universitaria.",
    image: "/university-students-group-studying.jpg",
  },
  {
    title:
      "Curso de créditos académicos: Diseño UX/UI. Interfaz y Experiencia de Usuario",
    description:
      "Destinado a estudiantes de las carreras de Licenciatura en Sistemas y Programador de Sistemas",
    image: "/ux-ui-design-dark-blue-interface.jpg",
  },
  {
    title: "X Jornadas de Contabilidad y Auditoría 2025",
    description:
      "La Facultad de Ciencias de la Administración realizará las Jornadas de Contabilidad y Auditoría que tienen como objetivo propiciar un ámbito de actualización y reflexión acerca de los diferentes aspectos de actualidad vinculados al desarrollo de la actividad profesional.",
    image: "/laptop-keyboard-charts-business.jpg",
  },
  {
    title:
      'Curso de posgrado – Formación Docente Orientada "Diseño de materiales digitales para la enseñanza"',
    description:
      'Abierta la inscripción desde el 03 de octubre hasta el 18 de octubre de 2025 al curso de posgrado "Diseño de materiales digitales para la enseñanza", dictado por el Área de Educación a Distancia. Destinado a Docentes FCAD',
    image: "/people-working-together-planning.jpg",
  },
  {
    title:
      'Curso de extensión "Voces africanas en la literatura de expresión portuguesa"',
    description:
      "A través de la lectura y el análisis de estas obras, los participantes podrán acceder a una forma más amplia y matizada de su realidad y, al mismo tiempo, profundizar en los contenidos de la asignatura Literaturas Lusófonas (para los estudiantes del profesorado).",
    image: "/books-reading-literature-study.jpg",
  },
  {
    title: "Ingreso 2026: Inscripciones Abiertas",
    description:
      "La Facultad de Ciencias de la Administración informa que ya se encuentran abiertas las inscripciones para el Ciclo Lectivo 2026 en todas las carreras de grado, pregrado y propuestas virtuales.",
    image: "/calculator-pen-business-documents.jpg",
  },
  {
    title: "Convocatoria 2026-1 Intercambio Estudiantil",
    description:
      "Se encuentra abierta hasta el 17/10, la convocatoria 2026-1 de los programas de movilidad académica: PIU alumnos y ESCALA de estudiantes de grado, modalidad presencial.",
    image: "/students-talking-outdoor-campus.jpg",
  },
  {
    title: "Charlas informativas – Ingreso 2026",
    description:
      "La Facultad de Ciencias de la Administración invita a estudiantes de los últimos años de secundaria, padres y docentes a participar de las Charlas Informativas de Ingreso 2026",
    image: "/university-building-architecture.jpg",
  },
];

export function ContentGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contentItems.map((item, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48 w-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-lg text-blue-600 hover:text-blue-700 cursor-pointer leading-tight">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed">
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
