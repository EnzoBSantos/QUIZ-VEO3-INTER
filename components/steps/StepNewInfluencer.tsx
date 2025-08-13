
import React from 'react';

interface VideoStepProps {
  onNext: () => void;
}

const StepNewInfluencer: React.FC<VideoStepProps> = ({ onNext }) => {
  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Puedes crear modelos e influencers con consistencia en todas las escenas, para promocionar y viralizar tu marca o negocio... o incluso monetizar en TikTok o plataformas para adultos <span role="img" aria-label="18 plus">🔞</span><span role="img" aria-label="pointing down">👇</span>
      </h2>

      <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/827lMpv8bcc"
          title="Secreto VEO 3 (2)"
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

export default StepNewInfluencer;
