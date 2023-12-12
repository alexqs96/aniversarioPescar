import { useEffect, useState } from 'react'
import Results from './Results'
import { LogoPescar } from '../../../components/Icons'

const Question = ({ filteredQuestion, setIndexQuestion, indexQuestion, questionsFiltered, setActiveQuiz,
}) => {

  /* Estado para establecer las preguntas random. */
  const [answersRandom, setAnswersRandom] = useState([])

  /* Iniciamos el score en 0 */
  const [score, setScore] = useState(0)
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null) /* lo inicializamos en null, porque el jugador inicia sin ninguna respuesta pre seleccionada. */
  /* Iniciamos un estado ansered para verificar si el usuario ha respondido algo o no. */
  const [answered, setAnswered] = useState(false)
  const [activeResults, setActiveResults] = useState(false)

  useEffect(() => {
    /* Creamos una constante que guarde las respuestas incorrectas y la correcta. */
    const answers = [
      ...filteredQuestion.incorrect_answers,
      filteredQuestion.correct_answer
    ]

    setAnswersRandom(answers.sort(() => Math.random() - 0.5)); /* Seteamos esas answers guardadas en la constante. El math.random permite poner las respuestas de forma aleatoria para evitar que siempre quede en el mismo lugar.*/
  }, [filteredQuestion])

  /* Cambio y avance en la pregunta. */
  const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1);
    setSelectAnswerIndex(null);
    setAnswered(false);
  }

  const checkAnswer = (answerText, index) => {

    if (answerText === filteredQuestion.correct_answer) {
      setScore(score + 1);
    }
    setSelectAnswerIndex(index)
    setAnswered(true)
  }

  /* Reseteador de quiz */
  const onReset = () => {
    setScore(0);
    setActiveQuiz(false);
    setIndexQuestion(0)
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center mx-auto my-5 w-full max-w-full md:max-w-lg p-6 rounded-2xl border border-black/5 shadow-xl">

      {activeResults ? (
        <Results questionsFiltered={questionsFiltered} score={score} onReset={onReset} />
      ) : (
        <>
          <span className="text-xl font-bold mr-auto">
            {/* numero de pregunta actual y numero de preguntas totales. */}
            {indexQuestion + 1} / {questionsFiltered.length}
          </span>

          <LogoPescar size={128} className="mx-auto -mt-3" />

          <h1 className="font-bold">
            {filteredQuestion.question}
          </h1>

          {/* Las respuestas del usuario van aqui */}
          <div className="grid grid-cols-2 gap-3 my-5 w-full">
            {/* Mapeamos un arreglo de respuesta correcta e incorrectas */}
            {answersRandom.map((answer, index) => (
              <button
                className={`border p-5 transition duration-150 cursor-pointer rounded-lg flex justify-center items-center hover:bg-lime-300 hover:scale-105 ${selectAnswerIndex !== null &&
                  index === selectAnswerIndex
                  ? answer === filteredQuestion.correct_answer
                    ? 'bg-green-500'
                    : 'bg-red-500 hover:bg-red-500'
                  : ''}`}
                key={answer}
                onClick={() => checkAnswer(answer, index)}
                disabled={answered && selectAnswerIndex !== index} //Desactiva la posibilidad de que el usuario vuelva a elegir una respuesta. 
              >
                <p className="font-medium text-center text-sm">
                  {answer}
                </p>
              </button>
            ))
            }
          </div>

          <div className='grid grid-cols-2 gap-3 max-sm:text-sm w-full'>
            {/* Aqui va el condicional para mostrar el boton de siguiente pregunta o el de finalizar. */}
            {indexQuestion + 1 === questionsFiltered.length ? (
              <button
                className={'border border-green-500 text-green-500 rounded-md px-5 py-2 hover:bg-green-500 hover:text-white font-medium'+ (
                  answered? " opacity-100" : " opacity-30"
                )}
                onClick={() => answered? [setAnswered(false), setActiveResults(true)] : null}
              >
                Finalizar
              </button>
            ) : (
              <button
                className={'border border-orange-600 text-orange-600 rounded-md px-5 py-2 hover:bg-orange-600 hover:text-white font-medium'+ (
                  answered? " opacity-100" : " opacity-30"
                )}
                onClick={() => answered? onNextQuestion() : null}
              >
                Siguiente
              </button>
            )}
            <button
              className="border border-red-500 text-red-500 px-5 py-2 rounded-lg font-bold transition-all hover:bg-red-500 hover:text-white"
              onClick={onReset}
            >
              Reiniciar
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Question