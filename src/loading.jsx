import { AiOutlineLoading } from 'react-icons/ai';

function Loading() {
  return (
    <section className="grid place-content-center h-[70dvh]">
      <AiOutlineLoading size={24} className="animate-spin" />
    </section>
  )
}

export default Loading