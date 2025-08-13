import React from 'react';
import type { QuizAnswers } from '../../types';

interface Step1GenderProps {
  onAnswer: (answer: Partial<QuizAnswers>) => void;
}

const SelectionCard: React.FC<{
  image: string;
  label: 'Hombre' | 'Mujer';
  onClick: () => void;
}> = ({ image, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center justify-start w-full p-4 space-x-6 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-black hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
  >
    <img src={image} alt={label} className="w-14 h-14 rounded-full object-cover" />
    <span className="text-lg font-bold">{label}</span>
  </button>
);

const Step1Gender: React.FC<Step1GenderProps> = ({ onAnswer }) => {
  return (
    <div className="text-center w-full max-w-sm animate-fade-in">
      <h1 className="text-4xl font-extrabold mb-2">Comiencemos</h1>
      <p className="text-gray-500 mb-6">Elige una opción para continuar.</p>
      <p className="text-sm text-gray-700 mb-8">Esta encuesta te tomará solo 2 minutos.</p>
      <div className="space-y-4">
        <SelectionCard
          image="https://media.inlead.cloud/uploads/19347/2025-07-20/xs-G2hUK-4913b432-41a3-4b5f-aebd-a9ef62cbf66b.webp"
          label="Hombre"
          onClick={() => onAnswer({ gender: 'Hombre' })}
        />
        <SelectionCard
          image="https://media.inlead.cloud/uploads/19347/2025-07-20/xs-aym4g-46edb30d-5514-4cee-9a5f-9b799aef27f7.webp"
          label="Mujer"
          onClick={() => onAnswer({ gender: 'Mujer' })}
        />
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
    `}</style>
    </div>
  );
};

export default Step1Gender;