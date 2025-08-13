
import React, { useState, useEffect } from 'react';

interface FinalStepProps {
  onNext: () => void;
}

const CircularProgress: React.FC<{ percentage: number }> = ({ percentage }) => {
    const radius = 60;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full my-4">
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#e5e7eb"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    stroke="#4ade80"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset, strokeLinecap: 'round', transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1.5s ease-out' }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <span className="absolute text-3xl font-bold text-gray-700">
                {Math.round(percentage)}%
            </span>
        </div>
    );
};

const Step8Final: React.FC<FinalStepProps> = ({ onNext }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
        setProgress(96);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">CREADOR DEL FUTURO</h2>

      <div className="my-8">
        <CircularProgress percentage={progress} />
      </div>

      <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg mb-6 text-center">
        <p className="mb-2">
            Estás a un paso de convertirte en un Creador PRO de Videos con Inteligencia Artificial
        </p>
        <p className="font-semibold">
            Felicidades, haz clic en continuar para acceder a tu entrenamiento...
        </p>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105"
      >
        Continuar
      </button>
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

export default Step8Final;
