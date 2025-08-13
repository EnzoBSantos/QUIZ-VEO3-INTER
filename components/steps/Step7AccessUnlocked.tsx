
import React from 'react';

interface AccessUnlockedProps {
  onNext: () => void;
}

const Step7AccessUnlocked: React.FC<AccessUnlockedProps> = ({ onNext }) => {
  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg mb-6">
        <p className="font-bold">¡Felicidades!</p>
        <p>Has DESBLOQUEADO el ACCESO al CREADOR DE VIDEOS más INSANO del momento.</p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
        <img
          src="https://media.inlead.cloud/uploads/19347/2025-07-30/lg-bIBqL-dmgveo.png"
          alt="Dominando Google VEO 3"
          className="w-full h-auto"
        />
      </div>

      <h2 className="text-2xl font-bold mb-2">
        Tu entrenamiento está disponible en la <span className="underline">siguiente página</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Tendrás acceso a los prompts más locos de internet y podrás crear tus videos ridículamente realistas en menos de 15 minutos después de entrar al entrenamiento.
      </p>

      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105"
      >
        Quiero crear mis videos ahora
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

export default Step7AccessUnlocked;
