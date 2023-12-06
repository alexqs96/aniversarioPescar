import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { memoTestImages } from '../../../lib/images';
import { FaGithub } from 'react-icons/fa6';

// Desarrollado por https://github.com/martinvirun

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function MemoTest() {
  const [intentos, setIntentos] = useState(0);
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [contadorCartasIguales, setContadorCartasIguales] = useState(0);

  useEffect(() => {
    // Crea los objetos con la data necesaria
    const imagesObject = memoTestImages.map((imagen, indice) => {
      return {
        src: "/memoTest/"+imagen,
        id: `${imagen}_id${indice + 1}`,
        isFlipped: false
      };
    });

    const duplicatedImages = [...imagesObject, ...imagesObject];
    const updatedDuplicatedImages = duplicatedImages.map((image, index) => {
      return {
        ...image,
        id: `${image.id}_${index}`,
      };
    });

    // Baraja aleatoriamente las imágenes
    const shuffledImages = shuffleArray(updatedDuplicatedImages);

    // Establece el estado inicial del juego con las imágenes barajadas
    setImgs(shuffledImages);
    setIntentos(0);
  }, []);

  function handleCardClick(card, index) {
    //console.log(intentos)
    if (cartasSeleccionadas.length === 2 || card === null || card.isFlipped) {
      return;
    }
    const updatedImgs = [...imgs];
    updatedImgs[index].isFlipped = true;

    // Agrega la carta seleccionada al estado de las cartas seleccionadas
    const cartasSeleccionadasActual = [...cartasSeleccionadas];
    cartasSeleccionadasActual.push(card);

    setCartasSeleccionadas(cartasSeleccionadasActual);
    // Incrementa el número de intentos
    setIntentos(intentos + 1);

    function sonCartasIguales() {
      if (cartasSeleccionadasActual.length === 2) {
        const carta1 = cartasSeleccionadasActual[0];
        const carta2 = cartasSeleccionadasActual[1];
        // Verifica si ambos objetos tienen las propiedades 'id' antes de comparar
        const idCarta1 = carta1.id.substring(0, 8);
        const idCarta2 = carta2.id.substring(0, 8);

        return idCarta1 === idCarta2;

      }
      return false;
    }

    if (cartasSeleccionadasActual.length === 2) {
      const carta1 = cartasSeleccionadasActual[0];
      const carta2 = cartasSeleccionadasActual[1];

      if (sonCartasIguales()) {
        setCartasSeleccionadas([]);
        setContadorCartasIguales(contadorCartasIguales + 1);
        if (contadorCartasIguales === 7) {
          Swal.fire({
            icon: 'success',
            title: '¡Ganaste!',
            text: `Cantidad de intentos ${intentos}.`,
            timer: 7000, // Configura el tiempo en milisegundos
            timerProgressBar: true
          }).then(() => {
            window.location.reload();
          });
        }
      } else {
        setTimeout(() => {
          const flippedBackImgs = updatedImgs.map((image) => {
            if (image.id === carta1.id || image.id === carta2.id) {
              return { ...image, isFlipped: false };
            } else {
              return image;
            }
          });

          // Actualiza el estado con las cartas volteadas nuevamente
          setImgs(flippedBackImgs);

          // Luego, limpia las cartas seleccionadas
          setCartasSeleccionadas([]);
        }, 800);
      }
    }
  }

  return (
    <section>
      <h1 className='text-4xl font-semibold'>¡Juga al MemoTest!</h1>
      
      <h2 className='font-medium mt-1'>Pone en practica tu memoria jugando al MemoTest.</h2>

      <p className='flex text-sm bg-gradient-to-r from-indigo-700 to-indigo-400 font-mono py-1.5 px-3 text-white rounded-md w-fit mt-2'>Juego Desarrollado por
        <a
          className='ml-2 font-semibold flex items-center gap-1.5 hover:underline'
          href="https://github.com/martinvirun"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Github de Martin Virun"
          title="Github de Martin Virun"
        >
          <FaGithub className='-mt-[1px]' />
          Martin Virun
        </a>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-5">
        {imgs.map((image, index) => (
          <button
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
            name={"Carta "+(index+1)}
            onClick={() => handleCardClick(image, index)}
            className='relative overflow-hidden fadeIn'
          >
            <img
              className={"object-cover h-full border rounded-xl transition duration-300 p-2 "+
                (image.isFlipped? "opacity-100" : "[transform:rotateY(180deg)] opacity-0")
              }
              src={image.isFlipped? image.src : "/logo_pescar.png"}
              alt={`Carta ${index+1}`}
            />
            <img
              className={"object-contain w-full h-full absolute border rounded-xl inset-0 bg-white transition duration-300 p-2 "+
                (image.isFlipped? "[transform:rotateY(180deg)] opacity-0" : "opacity-100")
              }
              src="/logo_pescar.png"
              alt="Carta Pescar"
            />
          </button>
        ))}
      </div>
    </section>
  )
}