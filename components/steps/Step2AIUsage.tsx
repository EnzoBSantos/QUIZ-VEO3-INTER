
import React from 'react';
import type { QuizAnswers } from '../../types';

interface Step2AIUsageProps {
  onAnswer: (answer: Partial<QuizAnswers>) => void;
}

const RadioButton: React.FC<{ label: 'Sí' | 'No'; onClick: () => void }> = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center w-full p-4 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 hover:border-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
        <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-4">
            <div className="w-3 h-3 rounded-full bg-transparent"></div>
        </div>
        <span className="text-lg font-medium text-gray-800">{label}</span>
    </button>
);


const Step2AIUsage: React.FC<Step2AIUsageProps> = ({ onAnswer }) => {
  return (
    <div className="text-center w-full max-w-sm animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">
        ¿Ya usas alguna herramienta de I.A en tu día a día?
      </h1>
      <div className="space-y-4">
        <RadioButton label="Sí" onClick={() => onAnswer({ usesAI: 'Sí' })} />
        <RadioButton label="No" onClick={() => onAnswer({ usesAI: 'No' })} />
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

export default Step2AIUsage;
