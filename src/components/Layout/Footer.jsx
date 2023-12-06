import { FaXTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6'

const footerLinks = [
  {
    id: "footer_1_link",
    href: "https://www.linkedin.com/company/fundacionpescar",
    icon: <FaLinkedin size={"1.65em"} />,
    label: "Seguinos en Linkedin"
  },
  {
    id: "footer_2_link",
    href: "https://www.instagram.com/fundacionpescar",
    icon: <FaInstagram size={"1.65em"} />,
    label: "Seguinos en Instagram"
  },
  {
    id: "footer_3_link",
    href: "https://x.com/FundacionPescar",
    icon: <FaXTwitter size={"1.65em"} />,
    label: "Seguinos en X"
  },
  {
    id: "footer_4_link",
    href: "https://www.facebook.com/pescarargentina",
    icon: <FaFacebook size={"1.65em"} />,
    label: "Seguinos en Facebook"
  },
  {
    id: "footer_5_link",
    href: "https://www.youtube.com/user/fundacionpescarargen",
    icon: <FaYoutube size={"1.65em"} />,
    label: "Seguinos en Youtube"
  },
  {
    id: "footer_6_link",
    href: "https://www.github.com/alexqs96/pescar20años",
    icon: <FaGithub size={"1.65em"} />,
    label: "Repositorio de la Pagina Web"
  }
]

export default function Footer() {
  return (
    <footer className="py-4 my-10 sm:my-5 fadeIn">
      <div className="max-w-screen-xl mx-auto w-[90%] flex gap-5 max-lg:flex-col-reverse justify-between items-center">
        <span className='font-medium -tracking-wider'>Hecho con ❤️ por alumnos de Pescar</span>

        <div className='flex items-center gap-2 z-20'>
          {
            footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  )
}