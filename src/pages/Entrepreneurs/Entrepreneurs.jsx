import { FiAtSign } from "react-icons/fi";
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import emprendedores from './data.json'

export default function Entrepreneurs(){
  return(
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
    {
      emprendedores.map(emprendedor => (
        <div
          key={emprendedor.id}
          className='flex max-md:flex-col gap-5 border border-black/5 shadow-lg p-5 rounded-2xl'
        >
          <img
            className='w-full md:max-w-[30%] mb-auto rounded-lg'
            src={'/emprendedores/'+emprendedor.photo}
            alt={"Logo de "+emprendedor.name}
          />
          <div className='flex flex-col'>
            <div className='flex max-md:flex-row-reverse md:justify-between items-center flex-wrap gap-2 max-md:w-fit'>
              <div className="flex flex-col w-fit">
                <span className='font-semibold text-2xl'>{emprendedor.name}</span>
                <span className='font-medium text-sm'>{emprendedor.owner}</span>
              </div>

              <img
                className='w-12 h-12 rounded-full'
                src={'/emprendedores/'+emprendedor.ownerPic}
                alt={"Foto de "+emprendedor.owner}
                title={"Foto de "+emprendedor.owner}
              />  
            </div>

            <div className='flex flex-wrap gap-2 text-sm my-1 max-md:my-2.5'>
              {
                emprendedor.instagram?
                <a
                  className='flex items-center gap-0.5 font-semibold'
                  href={"https://www.instagram.com/"+emprendedor.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={"Instagram de "+emprendedor.name}
                  title={"Instagram de "+emprendedor.name}
                >
                  <AiFillInstagram size={"1.5em"} /> {emprendedor.instagram}
                </a>
                :
                null
              }
              {
                emprendedor.email?
                <a
                  className='flex items-center gap-0.5 font-semibold'
                  href={"mailto:"+emprendedor.email}
                  aria-label={"Email de "+emprendedor.name}
                  title={"Email de "+emprendedor.name}
                >
                  <FiAtSign size={"1.5em"} className="p-0.5" /> {emprendedor.email}
                </a>
                :
                null
              }
              {
                emprendedor.linkedin?
                <a
                  href={emprendedor.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={"Linkedin de "+emprendedor.name}
                  title={"Linkedin de "+emprendedor.name}
                >
                  <AiFillLinkedin size={"1.5em"} />
                </a>
                :
                null
              }
            </div>

            <p className="mb-2 text-sm">{emprendedor.info}</p>
          </div>
        </div>
      ))
    }
    </section>
  )
}