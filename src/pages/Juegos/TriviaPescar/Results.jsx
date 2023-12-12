import { useEffect } from "react";
import { confetti } from "tsparticles-confetti";

const Results = ({ score, questionsFiltered, onReset }) => {
  useEffect(() => {
    if (score === questionsFiltered.length) {
      confetti("tsparticles", {
        disableForReducedMotion: true,
        count: 250,
        spread: 300,
      })
    }
  }, [questionsFiltered])
  

  return (
    <>
      <div className="flex flex-col gap-5 text-center text-lg font-bold mt-4">
        <span className="text-4xl">¡{score === questionsFiltered.length? "Ganaste" : "Buen Intento"}!</span>
        <span className="-mb-2">Acertaste el</span>
        <span className="font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse">
          {((score / questionsFiltered.length) * 100).toFixed(0)}%
        </span>
        {score} / {questionsFiltered.length} de las preguntas.
      </div>

      <button
        className="border border-orange-500 text-orange-500 px-5 py-2 mb-4 rounded-lg transition-all font-bold hover:bg-orange-500 hover:text-white"
        onClick={onReset}
      >
        ¡Vamos de nuevo!
      </button>
    </>
  );
};

export default Results;