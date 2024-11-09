import React from 'react';
import { Code, Globe, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Développement Expert",
    description: "Plus de 5 ans d'expérience en développement full stack avec les technologies modernes."
  },
  {
    icon: Globe,
    title: "Solutions Internationales",
    description: "Création d'applications utilisées par des clients du monde entier."
  },
  {
    icon: Users,
    title: "Travail d'Équipe",
    description: "Collaboration efficace avec des équipes multidisciplinaires."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Approche créative pour résoudre des problèmes complexes."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À Propos de Moi</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionné par le développement web et les nouvelles technologies,
            je crée des solutions innovantes qui répondent aux besoins des entreprises modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-500/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}