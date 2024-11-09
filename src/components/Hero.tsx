import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Développeur Full Stack
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Création de solutions robustes et évolutives avec les technologies modernes.
            Axé sur la performance, la sécurité et l'expérience utilisateur.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Voir les Projets
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="https://abdelqedous-mrini.rf.gd/pdf/abdoooo.pdf"
              target="_blank"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all transform hover:scale-105"
            >
              Télécharger CV
              <Download className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}