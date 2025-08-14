
import React from 'react';
import FaqItem from './FaqItem';
import CheckIcon from '../icons/CheckIcon';

const SalesPage: React.FC = () => {
    const checkoutUrl = "https://buy.stripe.com/cNiaEXfL80Z4fAX3P93ZK01";

    return (
        <div className="bg-white text-gray-800 font-sans w-full animate-fade-in-slow">
            <header className="bg-black h-10 w-full"></header>
            
            <main className="p-4 md:p-6 max-w-4xl mx-auto">
                {/* Video Section */}
                <div className="max-w-3xl mx-auto">
                    <div className="w-full aspect-video my-8 rounded-xl overflow-hidden shadow-2xl border">
                         <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/tFEctvEAsck"
                            title="Descubra o Hack por Trás dos Vídeos de IA Mais Virais e Realistas do Momento | VEO3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Video Level Section */}
                    <div className="bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-6 rounded-2xl shadow-lg mb-12">
                        <h3 className="text-center text-2xl font-bold mb-4">Nivel de tus videos</h3>
                        <div className="relative">
                            <div className="flex justify-between items-end mb-2 px-1">
                                <span className="text-md font-semibold">Nivel de tus videos antes</span>
                                <div className="text-right">
                                    <span className="text-md font-semibold">Tus videos DESPUÉS</span>
                                    <div className="bg-white text-blue-900 font-bold px-3 py-1 rounded-full mt-1 inline-block text-sm">
                                        Videos asombrosos
                                    </div>
                                </div>
                            </div>
                            <div className="h-4 bg-gray-600 rounded-full relative my-1">
                                <div className="h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-full"></div>
                                 <div className="absolute top-1/2 right-1 -translate-y-1/2 w-7 h-7 bg-white rounded-full border-4 border-cyan-300 shadow-md flex items-center justify-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-sm mt-2 px-2 text-gray-300">
                                <span>Bajo</span>
                                <span>Médio</span>
                                <span>Alto</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Congratulations Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-4">¡FELICIDADES POR LLEGAR HASTA EL FINAL DEL CUESTIONARIO!</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Preparamos un incentivo para ti: un descuento súper especial en el método para que te conviertas en nuestro alumno, empieces a transformar tus videos y creativos, ¡y cambies tu juego desde hoy mismo!
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    {/* Offer Box */}
                    <div className="border-2 border-gray-300 rounded-xl shadow-md mb-6">
                        <div className="bg-gray-800 text-white text-center py-2 rounded-t-lg font-bold tracking-wider">
                            Método Completo
                        </div>
                        <div className="p-6 flex justify-between items-center bg-gray-50">
                            <h3 className="text-2xl font-bold">Dominando Google Veo3</h3>
                            <div className="text-right flex-shrink-0 ml-4">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">80% off</span>
                                <p className="text-4xl font-bold text-gray-900 my-1">$9,00</p>
                                <p className="text-gray-500 text-sm">pago unico</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                     <a href={checkoutUrl} className="block w-full bg-green-500 text-white font-bold text-xl text-center py-4 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 mb-4">
                        Quiero activar mi acceso y empezar ahora
                    </a>
                    <p className="text-center text-gray-600 mb-16 max-w-lg mx-auto">
                        Activa hoy tu acceso y empieza en minutos a crear videos virales sin necesidad de aparecer ni saber editar.
                    </p>
                </div>


                {/* What you'll receive Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-8">Qué vas a recibir?</h2>
                    <div className="space-y-4 text-left max-w-2xl mx-auto">
                        <BenefitItem text="En cuanto finalices tu inscripción con descuento, recibirás los datos de acceso en el correo que registraste." />
                        <BenefitItem text={'El entrenamiento completo Método DOMINANDO GOOGLE VEO3, donde aprenderás a dominar esta nueva herramienta para crear videos ultrarrealistas en minutos.'} />
                        <BenefitItem text="Activa gratis VEO3 + Gemini Pro (acceso único, sin mensualidad)" />
                        <BenefitItem text="Todos los prompts ya creados con el método y que te mostramos aquí, listos para que los copies y pegues." />
                        <BenefitItem text="Podrás acceder desde tu celular o computadora, cuando y donde quieras, desde cualquier parte del mundo." />
                        <BenefitItem text="Todas las actualizaciones semanales del curso incluidas." />
                        <BenefitItem text="Soporte 24/7 + comunidad privada de creadores" />
                    </div>
                    <p className="mt-6 text-lg font-semibold italic">Y mucho más...</p>
                </div>
                
                <div className="max-w-xl mx-auto">
                    <a href={checkoutUrl} className="block w-full bg-green-500 text-white font-bold text-xl text-center py-4 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 mb-16">
                        Sí, quiero entrar ahora con 80% OFF
                    </a>
                </div>

                {/* FAQ Section */}
                <div className="mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider">Preguntas Frecuentes</h2>
                    <div className="space-y-2">
                        <FaqItem question="Y si tengo dudas o dificultades?">
                            <p>Contarás con nuestro soporte 24/7 a través de correo electrónico y acceso a nuestra comunidad privada de creadores, donde podrás hacer preguntas, compartir tus creaciones y recibir ayuda de otros alumnos y de nuestro equipo.</p>
                        </FaqItem>
                         <FaqItem question="Este método realmente funciona para ganar dinero?">
                            <p>¡Absolutamente! Te enseñamos no solo a crear videos increíbles, sino también a monetizarlos. Ya sea creando contenido para tus propias redes y ganando con monetización, vendiendo productos, o ofreciendo tus servicios de creación de video a empresas locales. Las posibilidades son enormes en este mercado emergente.</p>
                        </FaqItem>
                         <FaqItem question="El acceso es para siempre o tengo que pagar mensualidad?">
                             <p>El acceso es tuyo para siempre con un único pago. Sin mensualidades ni cargos ocultos. Además, recibirás todas las futuras actualizaciones del curso sin costo adicional. ¡Es una inversión única para un beneficio de por vida!</p>
                        </FaqItem>
                    </div>
                </div>

                <div className="max-w-xl mx-auto">
                    <a href={checkoutUrl} className="block w-full bg-green-500 text-white font-bold text-xl text-center py-4 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 mb-8">
                        Quiero activar mi acceso y empezar ahora
                    </a>

                    {/* Risk-Free Guarantee */}
                    <div className="bg-blue-50 border-2 border-blue-200 text-blue-900 p-6 rounded-2xl text-center mt-8">
                        <p className="text-2xl font-bold mb-2">🛡️ ¡Tu riesgo es cero!</p>
                        <p className="text-lg">Si el entrenamiento no cumple con tus expectativas, envía un correo a <strong className="font-bold">apoyo.codeveo3@gmail.com</strong> y te devolvemos tu dinero, sin líos ni complicaciones.</p>
                    </div>
                </div>
            </main>
             <style>{`
                @keyframes fade-in-slow {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in-slow { animation: fade-in-slow 0.8s ease-out forwards; }
            `}</style>
        </div>
    );
};


const BenefitItem: React.FC<{text: string}> = ({ text }) => (
    <div className="flex items-start space-x-3">
        <div className="w-6 h-6 flex-shrink-0 mt-1">
            <CheckIcon className="text-green-500" />
        </div>
        <p className="text-lg text-gray-700">{text}</p>
    </div>
);


export default SalesPage;