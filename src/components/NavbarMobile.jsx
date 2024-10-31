import { useState } from "react";
import { navLinks } from "../constants"
import { HiMenuAlt3 } from "react-icons/hi";

const NavbarMobile = () => {
  const [toogle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toogle)
  }
  return (
    <header className="w-full block md:hidden">
        <nav className="flex justify-between items-center px-8 py-8">
            <h1>Murilo Câmara</h1>
            <HiMenuAlt3 size={28} onClick={handleClick} />
        </nav>
        <div className={`${toogle ? 'block' : 'hidden'} transition duration-150`}>
          <ul className="flex flex-col justify-center items-center gap-12">
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
        </div>
    </header>
  )
}

export default NavbarMobile