import React from 'react';
import { Code2, Database, Terminal, Cloud } from 'lucide-react';

const skillsData = [
  {
    category: "Architecture Backend",
    icon: <Database className="w-6 h-6 text-blue-400 mr-2" />,
    skillsList: ["PHP", "Node.js"]
  },
  {
    category: "Développement Frontend",
    icon: <Code2 className="w-6 h-6 text-blue-400 mr-2" />,
    skillsList: ["React JS", "TypeScript"]
  },
  {
    category: "Architecture Système",
    icon: <Terminal className="w-6 h-6 text-blue-400 mr-2" />,
    skillsList: ["Scalabilité", "Haute Disponibilité", "Performance", "Sécurité"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-blue-400 mr-2" />,
    skillsList: ["Docker", "CI/CD"]
  }

];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fadeIn">Expertise Technique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map(({ category, icon, skillsList }, index) => (
            <div 
              key={category} 
              className="skill-card bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slideIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {skillsList.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}