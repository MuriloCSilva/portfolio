import { useEffect } from "react"

import AboutMe from "./sections/AboutMe"
import Contatos from "./sections/Contatos"
import Experiencia from "./sections/Experiencia"
import Formacao from "./sections/Formacao"
import Projetos from "./sections/Projetos"
import NavbarMobile from "./components/NavbarMobile"
import Navbar from "./components/Navbar"

import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>  
      
      <main className="font-poppins relative text-white">
        <Navbar className="block md:hidden" />
        <NavbarMobile className="hidden md:block" />
        <section className="mt-32 mb-32" data-aos="fade-up" id="home">
          <AboutMe />
        </section>
        <section className="mt-32 mb-32" data-aos="fade-up" id="formacao">
          <Formacao />
        </section>
        <section className="mt-32 mb-32" data-aos="fade-up" id="experiencia">
          <Experiencia />
        </section>
        <section className="mt-32 mb-32" data-aos="fade-up" id="projetos">
          <Projetos />
        </section>
        <section className="mt-32" data-aos="fade-up" id="contatos">
          <Contatos />
        </section>
        
        
      </main>
    </>
  )
}

export default App
