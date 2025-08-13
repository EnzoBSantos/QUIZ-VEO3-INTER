import React from 'react';

interface VideoStepProps {
  onNext: () => void;
}

const Step3VideoIntro: React.FC<VideoStepProps> = ({ onNext }) => {
  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Descubre el nuevo formato de videos{' '}
        <span className="text-green-500">ultrarrealistas</span> que está
        rompiendo internet en los últimos días.
      </h2>
      <p className="text-gray-600 mb-6">
        Todo el video de ventas que verás a continuación fue creado con
        Inteligencia Artificial en menos de 3 minutos
      </p>

      <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/yD_qRktIxQY"
          title="Secreto VEO 3 (1)"
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
        Quiero saber más sobre esto
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

export default Step3VideoIntro;
