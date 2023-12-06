import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='grid h-[100dvh] place-content-center gap-4 text-center place-items-center'>
      <h1 className='text-8xl font-bold'>Oops</h1>
      <h2 className='text-2xl font-medium'>Esta pagina no existe</h2>
      <Link to="/" className='button button-pescar text-white py-2 px-4 rounded-xl font-semibold text-xl w-fit'>Volver al Inicio</Link>
    </main>
  )
}

export default NotFound