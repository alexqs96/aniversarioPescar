import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LogoPescar } from "../Icons";
import { BiJoystick } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { BsFillBagHeartFill, BsChatRightQuote } from "react-icons/bs";

const navLinks = [
  {
    id: "link_1_nav",
    icon: <PiStudentFill size={"1.5em"} />,
    href: "/alumnos",
    label: "Alumnos"
  },
  {
    id: "link_2_nav",
    icon: <BiJoystick size={"1.5em"} />,
    href: "/juegos",
    label: "Juegos"
  },
  {
    id: "link_3_nav",
    icon: <BsFillBagHeartFill size={"1.5em"} className="lg:w-[1.25em] lg:h-[1.25em]" />,
    href: "/emprendedores",
    label: "Emprendedores"
  },
  {
    id: "link_4_nav",
    icon: <BsChatRightQuote size={"1.5em"} className="lg:w-[1.15em] lg:h-[1.15em]" />,
    href: "/testimonios",
    label: "Testimonios"
  }
]

export default function Header(){
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="h-20 pb-2 max-lg:pt-0.5 max-lg:flex-col max-w-screen-xl mx-auto w-[90%] flex items-center gap-5">
        <div className={"flex items-center justify-between max-lg:w-full min-w-max z-50 "+(openMenu? " max-lg:fixed top-0 max-w-[90%] mx-auto" : "")}>
          <Link 
            to="/"
            onClick={() => setOpenMenu(false)}
            className="font-medium flex items-center gap-0.5 group h-20"
          >
            <LogoPescar size="4.5em" className="h-fit group-hover:-rotate-3 transition-transform duration-300 origin-bottom-left" />
            <div className="relative flex flex-col w-full -mb-0.5 group-hover:rotate-2 duration-300 transition-transform">
              <span className="group-hover:opacity-100 opacity-0 transition duration-300 w-3 h-[0.005rem] bg-[#1f288ba6] absolute -top-1 rotate-[70deg] -left-2.5"></span>
              <small>Fundación Pescar</small>
              <small className="-mt-1">20º Aniversario</small>
            </div>
          </Link>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={"lg:hidden hamburger" + (openMenu ? " is-active" : "")}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav
          className={
          "flex items-center gap-3 lg:gap-1 w-full max-lg:flex-col max-lg:overflow-hidden transition-all duration-200 max-lg:fixed z-40 "
          +
          (openMenu? " max-lg:h-[100dvh] bg-white top-0 pt-20" : " max-lg:hidden")
          }
        >
          {
            navLinks.map((link, index) => (
              <NavLink
                key={link.id}
                to={link.href}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setOpenMenu(false)}
                className={({isActive, isPending}) => (
                  "max-lg:fadeIn max-lg:w-[90%] max-lg:mx-auto max-lg:text-3xl transition-colors duration-75 flex items-center gap-2 lg:gap-1 py-1.5 px-3 font-medium bg-gradient-to-t hover:from-[#fc7203] hover:to-orange-400 hover:text-white rounded-xl"+
                  (isActive? " bg-gradient-to-t from-[#fc7203] to-orange-400 text-white" : "")+
                  (isPending? " animate-pulse" : "")
                  )
                }
              >
                {link.icon}
                <span className="max-lg:w-[14ch]">
                  {link.label}
                </span>
              </NavLink>
            ))
          }
        </nav>
      </div>
    </header>
  )
}