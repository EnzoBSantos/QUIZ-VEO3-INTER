
import React from 'react';

interface VideoStepProps {
  onNext: () => void;
}

const Step5Monetization: React.FC<VideoStepProps> = ({ onNext }) => {
  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span role="img" aria-label="money bags">💰</span> MONETIZACIÓN <span role="img" aria-label="money bags">💰</span>
      </h2>
      <p className="text-gray-600 mb-4">
        También puedes usar esta herramienta para crear videos para empresas (como en el ejemplo), ofrecer paquetes mensuales y sumar entre 600 y 1000 dólares extra a tu ingreso mensual.
      </p>
      <p className="font-bold italic text-gray-800 mb-6">(Este es un nuevo mercado... sé pionero y bebe agua limpia)</p>

      <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/QBdoNXhlhCE"
          title="Secreto VEO 3 (4)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105"
      >
        Quiero esos prompts secretos
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

export default Step5Monetization;
