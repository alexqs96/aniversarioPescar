import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components/index"
import Loading from "./loading"

function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto w-[90%] flex flex-col gap-20">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default Layout