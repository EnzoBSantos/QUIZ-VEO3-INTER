
import React from 'react';

interface VideoStepProps {
  onNext: () => void;
}

const Step4ProductDemo: React.FC<VideoStepProps> = ({ onNext }) => {
  return (
    <div className="text-center w-full max-w-lg animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span role="img" aria-label="warning">⚠️</span> ¡NOVEDAD ABSURDA! <span role="img" aria-label="warning">⚠️</span>
      </h2>
      <p className="text-gray-600 mb-2">
        Liberamos esta actualización para los alumnos del método:
      </p>
      <p className="text-gray-600 mb-4">
        Te vamos a enseñar cómo poner tu producto físico en la mano de tu modelo o personaje, como en el video de abajo (solo necesitas una foto del producto con fondo blanco, como en el ejemplo) <span role="img" aria-label="pointing down">👇</span>
      </p>
      <p className="font-semibold text-gray-800 mb-6">(Perfecto para quienes venden productos físicos o están en nichos black)</p>

       <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/cZjK430_Whs"
          title="Secreto VEO 3 (3)"
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

export default Step4ProductDemo;
