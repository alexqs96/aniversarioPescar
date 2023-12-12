import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { questions } from "./data";
import { LogoPescar } from "../../../components/Icons";
import Question from "./Question";

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray.slice(0, 5);
}

export default function TriviaPescar() {
  // useState. Tomo de data.js, buscando todos los questions que coincidan con la categoría dada. 
  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter(question => question.category === "pescar")
  )
  // Busca la pregunta segun el index solicitado mediante este estado
  const [indexQuestion, setIndexQuestion] = useState(0);

  // Inicia el Juego
  const [activeQuiz, setActiveQuiz] = useState(false)

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
    //console.log(newQuestions)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <p className='flex text-[.6em] mx-auto sm:text-sm bg-gradient-to-r from-indigo-700 to-indigo-400 font-mono py-1.5 px-3 text-white rounded-md w-fit mt-2'>Juego Desarrollado por
        <a
          className='ml-2 font-semibold flex items-center gap-1.5 hover:underline'
          href="https://github.com/Rodrigo-Emca"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github de Rodrigo Cabrera"
          title="Github de Rodrigo Cabrera"
        >
          <FaGithub className='-mt-[1px]' />
          Rodrigo Cabrera
        </a>
      </p>

      {
        activeQuiz ?
          <Question
            filteredQuestion={questionsFiltered[indexQuestion]}
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered}
            setActiveQuiz={setActiveQuiz}
          />
          :
          <div className="fadeIn my-6 flex flex-col justify-center w-full max-w-sm mx-auto bg-white p-6 shadow-xl border border-black/5 rounded-lg">
            <span className="text-3xl text-center font-bold">
              ¡Trivia Pescar!
            </span>

            <LogoPescar className="max-sm:w-[128px] max-sm:h-[128px] w-[256px] h-[256px] mx-auto my-5" />
            
            <button
              className="text-white bg-blue-500 py-2 rounded-lg font-bold px-5 transition-all hover:bg-orange-500"
              onClick={() => setActiveQuiz(true)}
            >
              Iniciar Quiz
            </button>
          </div>
      }
    </section>
  )
}