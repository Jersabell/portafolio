import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../index.css'

type NavbarProps = {
  isOnProjectsSection: boolean
}
const Navbar: React.FC<NavbarProps> = ({isOnProjectsSection}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`flex items-center justify-center fixed w-screen pt-6 z-50`}>
      <div className='container'>
      <div className={`${isOnProjectsSection  ? "text-black" : "text-white hover:border-pink-400"} bg-pink-200/10 backdrop-blur-md border border-pink-200 hover:border-pink-400 px-8 py-2 md:flex items-center justify-between rounded-2xl text-black`}>
            <div className='flex justify-between'>
              <span className={`text-xl font-bold hover:text-pink-500 sacramento-regular ${isOpen ? 'text-pink-500' : ''}`}>Jersabell Tineo</span>
              <div className={`md:hidden ${isOpen ? 'text-pink-500' : ''}`}>
                <button onClick={toggleMenu}>
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
            <ul className={`md:flex md:gap-6 font-medium ${isOpen ? 'flex flex-col gap-3 mt-4 md:mt-0' : 'hidden'} text-center text-sm`}>
              <li><a href="#home" className="hover:text-pink-500 transition">Inicio</a></li>
              <li><a href="#experience" className="hover:text-pink-500 transition">Experiencia</a></li>
              <li><a href="#projects" className="hover:text-pink-500 transition">Proyectos</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition">Contacto</a></li>
            </ul>
        </div>

      </div>


    </nav>
  );
};

export default Navbar;
