import testimonios from './data.json'

export default function Testimonials(){
  return(
    <section className='flex flex-col gap-10 lg:gap-3'>
      <h1 className="text-5xl font-bold text-center my-4 pb-1 border-b-4 border-b-orange-500 w-fit mx-auto">Testimonios</h1>
      {
        testimonios[0].map(testimonio => (
          <div
            key={testimonio.id}
            className='flex max-lg:flex-col items-center gap-5 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-orange-50/50 lg:to-orange-50 rounded-2xl overflow-hidden'
          >
            <iframe src="https://www.youtube.com/watch?v=b3PskU2RC8E" className="aspect-video lg:max-w-sm w-full" allowFullScreen />
            <div className='flex flex-col gap-2 p-4 lg:p-2 max-lg:mr-auto'>
              <div className='flex items-center gap-3'>
                <img
                  className='w-12 h-12 rounded-full object-cover'
                  src={'/testimonios/'+testimonio.photo}
                  alt={"Foto de "+testimonio.name}
                  title={"Foto de "+testimonio.name}
                />  
                <span className='text-2xl font-bold'>{testimonio.name}</span>
              </div>
              <span className='font-semibold text-sm bg-gradient-to-t from-orange-500 to-orange-400 rounded-md py-1 px-2 w-fit text-white'>{testimonio.about}</span>
              <em className='font-medium'>{testimonio.info}</em>
            </div>
          </div>
        ))
      }
      <h2 className="text-4xl font-bold text-center mb-4 mt-8 pb-1 lg:border-b-4 border-b-orange-500 w-fit mx-auto">Testimonios Puente: Mi Primer Empleo</h2>
      {
        testimonios[1].map(testimonio => (
          <div
            key={testimonio.id}
            className='flex max-lg:flex-col items-center gap-5 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-orange-50/50 lg:to-orange-50 rounded-2xl overflow-hidden'
          >
            <iframe src="https://www.youtube.com/watch?v=b3PskU2RC8E" className="aspect-video lg:max-w-sm w-full" allowFullScreen />
            <div className='flex flex-col gap-2 p-4 lg:p-2 max-lg:mr-auto'>
              <div className='flex items-center gap-3'>
                <img
                  className='w-12 h-12 rounded-full object-cover'
                  src={'/testimonios/'+testimonio.photo}
                  alt={"Foto de "+testimonio.name}
                  title={"Foto de "+testimonio.name}
                />  
                <span className='text-2xl font-bold'>{testimonio.name}</span>
              </div>
              <span className='font-semibold text-sm bg-gradient-to-t from-orange-500 to-orange-400 rounded-md py-1 px-2 w-fit text-white'>{testimonio.about}</span>
              <em className='font-medium'>{testimonio.info}</em>
            </div>
          </div>
        ))
      }

    </section>
  )
}