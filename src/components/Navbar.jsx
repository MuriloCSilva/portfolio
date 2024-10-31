import { navLinks } from "../constants"
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="z-10 w-full hidden md:block" data-aos="fade-down">
        <nav className="flex items-center justify-center py-8 px-24">
            <ul className="flex flex-row justify-center items-center gap-12">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className="hover:text-gray-300 transition delay-100"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    
  )
}

export default Navbar;