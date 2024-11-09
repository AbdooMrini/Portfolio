import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "TNB",
    description: "La T.N.B est instituée sur la superficie des terrains non bâtis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["PHP", "JavaScript"],
    liveUrl: "http://www.kenitra.ma/ar/",
  },
  {
    title: "Tool de sécurité",
    description: "Outil automatisé pour l'audit et le renforcement de la sécurité des systèmes Windows en entreprise",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tech: ["Batch", "PowerShell", "HTA"],
    liveUrl: "https://mega.nz/file/ii4DiA4B#mcXpJa8CRJtbZ5Vq6-DzyPFS6fyA_0pqNmesQJ4J_wE",
  },
  {
    title: "Assistant Vêtement IA",
    description: "Application d'IA qui aide à choisir des tenues vestimentaires personnalisées selon les préférences et le style",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "Gemini API"],
    liveUrl: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Projets Réalisés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}