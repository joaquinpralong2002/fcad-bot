"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    title:
      "Curso de créditos académicos: Diseño UX/UI. Interfaz y Experiencia de Usuario",
    category: "ESTUDIANTES",
    image: "/ux-ui-design-interface-mobile-app.jpg",
  },
  {
    title: "Talleres de Articulación Universitaria (TAU)",
    category: "ESTUDIANTES",
    image: "/university-students-studying-together.jpg",
  },
  {
    title: "X Jornadas de Contabilidad y Auditoría 2025",
    category: "ACADÉMICO",
    image: "/accounting-business-laptop-charts.jpg",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-[#1A1A2E] rounded-lg overflow-hidden">
      <div className="bg-[#1A1A2E] text-white px-6 py-3 border-b border-white/10">
        <h2 className="font-bold text-sm uppercase tracking-wide">NOVEDADES</h2>
      </div>

      <div className="relative">
        {/* Slides */}
        <div className="relative h-[400px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/90 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="max-w-xl">
                      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded mb-4">
                        {slide.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
