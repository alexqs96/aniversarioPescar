import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function shuffle(array) {
  const randomize = () => Math.random() - 0.5;
  return array.sort(randomize);
}

export default function Students() {
  const devs = [
    {
      name: "Brian Pumarica",
      linkedin: "https://www.linkedin.com/in/brian-martin-pumarica",
      github: "https://github.com/brianpumarica",
      about: "Desarrollador Web con especialización en React, Angular, Node, Express, SQL, entre otros.",
      photo: "/devs/brian_pumarica.webp"
    },
    {
      name: "Rodrigo Cabrera",
      linkedin: "https://www.linkedin.com/in/rodrigo-cabrera-developer",
      github: "https://github.com/Rodrigo-Emca",
      about: "Desarrollador Web Full-Stack MERN y estudiante de Desarrollo de Software. Tecnologías: React, React Native, Node.js, MongoDB, PHP, entre otras.",
      photo: "/devs/rodrigo_cabrera.webp"
    },
    {
      name: "Martin Virun",
      linkedin: "https://www.linkedin.com/in/martin-virun-1b5a20220",
      github: "https://github.com/martinvirun",
      about: "Estudiante de programación en la UTN Avellaneda y alumno de la fundación Pescar, y me sueño es trabajar de lo que le apasiona y llegar a ser un gran profesional.",
      photo: "/devs/martin_virun.webp"
    },
    {
      name: "Tadeo Abbruzzese",
      linkedin: "https://www.linkedin.com/in/tadeo-abbruzzese-867286229",
      github: "https://github.com/tadeoabbruzzese",
      about: "Estudiante de Ingenieria Informática y alumno de la Fundación Pescar. Me especializo en el Desarrollo Web Full stack MERN y en Ciencia de Datos con Python y R.",
      photo: "/devs/tadeo_abbruzzese.webp"
    },
    {
      name: "Maximiliano Dorado",
      linkedin: "https://www.linkedin.com/in/maximiliano-dorado",
      github: "https://github.com/6bos",
      about: "Estudiante de Analista Programador Universitario en la UNLP, egresado de la Fundacion Pescar como Full Stack MERN, profundizando en Python actualmente, en busca de seguir aprendiendo.",
      photo: "/devs/maximiliano_dorado.webp"
    },
    {
      name: "Alexander Mamani",
      linkedin: "https://www.linkedin.com/in/alexander-mamani",
      github: "https://github.com/alexqs96",
      about: "Desarrollador Web Fullstack Estudiante de Ingeniería en sistemas en la UTN, Tecnologías: NextJS, Astro, Node.Js, MongoDB, MySQL, Typescript, React Native.",
      photo: "/devs/alexander_mamani.webp"
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 w-full mx-auto h-fit gap-5 font-mono mt-5">
      {
        shuffle(devs).map((dev, index) => (
          <div
            key={dev.linkedin}
            style={{ animationDelay: `${index * 0.15}s` }}
            className="flex max-xl:flex-col gap-5 border border-black/10 p-4 rounded-3xl transition duration-200 fadeIn"
          >
            <img
              className="xl:w-full xl:h-full aspect-square rounded-2xl object-cover xl:max-w-[35%]"
              src={dev.photo}
              alt={"Foto de " + dev.name}
              title={"Foto de " + dev.name}
              loading='lazy'
            />
            <div className='flex flex-col gap-1.5'>
              <span className="block text-xl truncate font-medium" title={dev.name}>
                {dev.name}
              </span>

              <div className="flex items-center flex-wrap gap-1.5 w-fit">
                {dev.linkedin ? (
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Perfil de Linkedin"
                    title="Seguime en Linkedin"
                  >
                    <AiFillLinkedin size={"1.8em"} />
                  </a>
                ) : null}
                {dev.github ? (
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Perfil de Github"
                    title="Seguime en Github"
                  >
                    <AiFillGithub size={"1.8em"} />
                  </a>
                ) : null}
              </div>

              <small>{dev.about}</small>
            </div>
          </div>
        ))
      }
    </section>
  )
}