
import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Step1Gender from './components/steps/Step1Gender';
import Step2AIUsage from './components/steps/Step2AIUsage';
import Step3VideoIntro from './components/steps/Step3VideoIntro';
import StepNewInfluencer from './components/steps/StepNewInfluencer';
import Step4ProductDemo from './components/steps/Step4ProductDemo';
import Step5Monetization from './components/steps/Step5Monetization';
import Step6TikTok from './components/steps/Step6TikTok';
import Step7AccessUnlocked from './components/steps/Step7AccessUnlocked';
import Step8Final from './components/steps/Step8Final';
import SalesPage from './components/sales/SalesPage';
import type { QuizAnswers } from './types';

const TOTAL_STEPS = 9;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
        console.log("Quiz finished. Answers:", answers);
        setQuizCompleted(true);
    }
  };

  const handleAnswer = (answer: Partial<QuizAnswers>) => {
    setAnswers(prev => ({ ...prev, ...answer }));
    // A small delay for a smoother transition
    setTimeout(() => {
        nextStep();
    }, 200);
  };
  
  const progress = (currentStep / TOTAL_STEPS) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Gender onAnswer={handleAnswer} />;
      case 2:
        return <Step2AIUsage onAnswer={handleAnswer} />;
      case 3:
        return <Step3VideoIntro onNext={nextStep} />;
      case 4:
        return <StepNewInfluencer onNext={nextStep} />;
      case 5:
        return <Step4ProductDemo onNext={nextStep} />;
      case 6:
        return <Step5Monetization onNext={nextStep} />;
      case 7:
        return <Step6TikTok onNext={nextStep} />;
      case 8:
        return <Step7AccessUnlocked onNext={nextStep} />;
      case 9:
        return <Step8Final onNext={nextStep} />;
      default:
        return <Step1Gender onAnswer={handleAnswer} />;
    }
  };
  
  if (quizCompleted) {
    return <SalesPage />;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white font-sans text-gray-800 p-4 sm:p-6">
      <div className="w-full max-w-lg mx-auto">
        <ProgressBar progress={progress} />
        <main className="flex-grow flex flex-col items-center justify-center mt-4">
            {renderStep()}
        </main>
      </div>
    </div>
  );
};

export default App;