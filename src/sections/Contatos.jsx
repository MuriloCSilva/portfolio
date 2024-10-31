import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contatos = () => {
  return (
    
    <div className="border-t border-white/5 border-solid">
      <div className="py-5 flex flex-col md:flex-row w-full gap-4 mx-auto items-center justify-center">
        <div className="flex w-full md:w-1/4 justify-between px-5">
          <p>Murilo Câmara</p>
          <p className="text-white/50">© 2024 - 2025</p>
          <div className="border-r border-white/20 hidden md:flex"></div>
        </div>
        <div className="flex items-center justify-around w-full md:w-1/4">
          <a href="https://www.linkedin.com/in/murilocamara/" target="_blank"><FaLinkedin size={25} className="hover:cursor-pointer text-white/50 hover:text-white transition duration-150"/></a>
          <a href="https://github.com/MuriloCSilva" target="_blank"><FaGithub size={25} className="hover:cursor-pointer text-white/50 hover:text-white transition duration-150"/></a>
          <a href="mailto:murilocs.sjc@gmail.com" target="_blank"><MdEmail size={25} className="hover:cursor-pointer text-white/50 hover:text-white transition duration-150"/></a>
        </div>
      </div>
    </div>
  )
}

export default Contatos;